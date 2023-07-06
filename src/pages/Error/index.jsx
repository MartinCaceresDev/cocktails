import { Link } from "react-router-dom";


export const Error = () => {
  return (
    <section className="error-page">
      <div className="error-container">
        <h1>oops! it's a dead end</h1>
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
      </div>
    </section>
  );
};
