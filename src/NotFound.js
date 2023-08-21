import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <>
      <h3>Sorry. Page not found.</h3>
      <Link to={'/'}>Home</Link>
    </>
  )
}

export default NotFound
