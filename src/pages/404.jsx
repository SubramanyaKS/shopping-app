import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <div className="not-found">
      <h2 className="error-code">404</h2>
      <h5>Oops!!! Page Not Found</h5>
      <Link to="/">Back to Home Page</Link>
    </div>
  )
}

export default ErrorPage