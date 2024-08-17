import { render, screen } from "@testing-library/react";
import { vi, describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { CartContext } from "../../App";
import Cart from "./Cart";

describe("Cart Component", () => {
  const mockCart = [
    { id: 1, title: "Product 1", price: 10, quantity: 1 },
    { id: 2, title: "Product 2", price: 20, quantity: 2 },
  ];
  const user = userEvent.setup();

  const mockContext = {
    cart: mockCart,
    addToCart: vi.fn(),
    removeFromCart: vi.fn(),
    clearCart: vi.fn(),
    getCartTotal: vi.fn().mockReturnValue(50),
    getCartTax: vi.fn().mockReturnValue(10),
    decreaseQuantity: vi.fn(),
  };

  const renderWithCartContext = (component) => {
    return render(
      <CartContext.Provider value={mockContext}>
        {component}
      </CartContext.Provider>
    );
  };

  it("renders without crashing", () => {
    renderWithCartContext(<Cart />);
    expect(screen.getByText("Your cart")).toBeInTheDocument();
  });

  it('displays "Your cart is empty" when cart is empty', () => {
    renderWithCartContext(
      <CartContext.Provider value={{ ...mockContext, cart: [] }}>
        <Cart />
      </CartContext.Provider>
    );
    expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
  });

  it("displays correct items in the cart", () => {
    renderWithCartContext(<Cart />);
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();
    expect(screen.getAllByText(/Price:/).length).toBe(2);
    expect(screen.getAllByText(/Quantity:/).length).toBe(2);
  });

  it('calls addToCart when "+" button is clicked', async () => {
    renderWithCartContext(<Cart />);
    await user.click(screen.getAllByText("+")[0]);
    expect(mockContext.addToCart).toHaveBeenCalledWith(mockCart[0]);
  });

  it('calls removeFromCart when "Delete" button is clicked', async () => {
    renderWithCartContext(<Cart />);
    await user.click(screen.getAllByText("Delete")[0]);
    expect(mockContext.removeFromCart).toHaveBeenCalledWith(mockCart[0]);
  });

  it('calls decreaseQuantity when "-" button is clicked', async () => {
    renderWithCartContext(<Cart />);
    await user.click(screen.getAllByText("-")[0]);
    expect(mockContext.decreaseQuantity).toHaveBeenCalledWith(mockCart[0]);
  });

  it("displays correct subtotal, tax, and total", () => {
    renderWithCartContext(<Cart />);
    expect(screen.getByText("Subtotal: 50$")).toBeInTheDocument();
    expect(screen.getByText("Tax 20%: 10$")).toBeInTheDocument();
    expect(screen.getByText("Total: 60$")).toBeInTheDocument();
  });

  it('calls clearCart when "Clear cart" button is clicked', async () => {
    renderWithCartContext(<Cart />);
    await user.click(screen.getByText("Clear cart"));
    expect(mockContext.clearCart).toHaveBeenCalled();
  });
});
