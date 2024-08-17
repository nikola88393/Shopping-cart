import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { vi, describe, beforeEach, expect, it } from "vitest";
import Store from "./Store";
import { CartContext } from "../../App";
import useFakeFetch from "../../useFakeFetch";

// Mock the `useFakeFetch` hook
vi.mock("../../useFakeFetch");

describe("Store Component", () => {
  const cart = [];
  const addToCart = vi.fn();
  const getCartTotal = vi.fn().mockReturnValue(0);

  beforeEach(() => {
    useFakeFetch.mockImplementation((url) => {
      if (url === "https://fakestoreapi.com/products") {
        return {
          data: [
            {
              id: 1,
              title: "Product 1",
              price: 10,
              image: "image1.jpg",
              category: "electronics",
            },
            {
              id: 2,
              title: "Product 2",
              price: 20,
              image: "image2.jpg",
              category: "jewelery",
            },
          ],
          loading: false,
          error: null,
        };
      } else if (url === "https://fakestoreapi.com/products/categories") {
        return {
          data: ["electronics", "jewelery"],
          loading: false,
          error: null,
        };
      }
      return { data: null, loading: false, error: "Error" };
    });
  });

  const renderComponent = (category = "") => {
    return render(
      <MemoryRouter initialEntries={[`/store/${category}`]}>
        <CartContext.Provider value={{ cart, addToCart, getCartTotal }}>
          <Routes>
            <Route path="/store/:category?" element={<Store />} />
          </Routes>
        </CartContext.Provider>
      </MemoryRouter>
    );
  };

  it("displays loading state", () => {
    useFakeFetch.mockReturnValueOnce({
      data: null,
      loading: true,
      error: null,
    });
    renderComponent();

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("displays error message when there is an error", () => {
    useFakeFetch.mockReturnValueOnce({
      data: null,
      loading: false,
      error: "Error",
    });
    renderComponent();

    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });

  it("renders categories and products", async () => {
    renderComponent();

    // Check that categories are rendered
    expect(screen.getByText("electronics")).toBeInTheDocument();
    expect(screen.getByText("jewelery")).toBeInTheDocument();

    // Check that products are rendered
    await waitFor(() => {
      expect(screen.getByText("Product 1")).toBeInTheDocument();
      expect(screen.getByText("10$")).toBeInTheDocument();
      expect(screen.getByText("Product 2")).toBeInTheDocument();
      expect(screen.getByText("20$")).toBeInTheDocument();
    });
  });

  it("filters products by category", async () => {
    renderComponent("electronics");

    // Wait for the products to be displayed
    await waitFor(() => {
      expect(screen.getByText("Product 1")).toBeInTheDocument();
      expect(screen.queryByText("Product 2")).not.toBeInTheDocument();
    });
  });

  it("adds product to cart", async () => {
    renderComponent();

    // Wait for the products to be displayed
    await waitFor(() => {
      expect(screen.getByText("Product 1")).toBeInTheDocument();
    });

    const addButton = screen.getAllByText(/add to cart/i)[0];
    const input = screen.getAllByRole("spinbutton")[0];
    await userEvent.clear(input);
    await userEvent.type(input, "2");

    userEvent.click(addButton);

    await waitFor(() => {
      expect(addToCart).toHaveBeenCalledWith(
        {
          id: 1,
          title: "Product 1",
          price: 10,
          image: "image1.jpg",
          category: "electronics",
        },
        2
      );
    });
  });
});
