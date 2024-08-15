import { useState } from "react";
import useFakeFetch from "../../useFakeFetch";

const reviewsText = {
  0: "Absolutely love the quality! The dress I bought fits perfectly and the fabric feels so luxurious. Will definitely shop here again!",
  1: "Fast shipping and the shoes are super comfy! I've worn them every day since they arrived. Great customer service too!",
  2: "Stylish and affordable! I was surprised by how well-made the jacket is for the price. My new go-to store for fashion!",
};
const Reviews = () => {
  const { data, loading, error } = useFakeFetch(
    "https://fakestoreapi.com/users?limit=3"
  );
  const [review, setReview] = useState(0);

  if (error) {
    return error;
  }
  if (loading) {
    return "Loading...";
  }
  if (!data) {
    return "No data to show";
  }

  return (
    <div>
      <ul>
        {data.map((entry) => (
          <li
            onClick={() => {
              setReview(entry.id - 1);
            }}
            key={entry.id}
          >
            {entry.name.firstname}
          </li>
        ))}
        ----------
      </ul>
      <div>
        <div>
          <p>
            {data[review].name.firstname} {data[review].name.lastname}
          </p>
          <p>{data[review].email}</p>
          <h2>Very satisfied</h2>
          <p>{reviewsText[review]}</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
