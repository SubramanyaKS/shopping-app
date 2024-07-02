import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <div className="not-found">
      <h2 className="error-code">404</h2>
      <h5>Oops!!! Page not found</h5>
      <p>
        The page you are looking for doesnot exist or has been moved.Please click
      <Link to="/">Back to Home Page</Link>
      </p>
    </div>
  );
}

export default ErrorPage