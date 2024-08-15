import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div>
      <h1>404 Not Found</h1>
      <h2>Seems like you are lost</h2>
      <Link to="/">Go back to home</Link>
    </div>
  );
};

export default Error;
