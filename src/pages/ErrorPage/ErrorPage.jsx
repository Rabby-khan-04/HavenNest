import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log();
  console.log(error);
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="container text-center">
        <h2 className="text-7xl font-old_standard font-bold text-dark_charcoal mb-2">
          {error.status} {error.statusText}
        </h2>
        <p className="text-sm font-bold font-open_sans text-dark_silver mb-4">
          {error.error.message}
        </p>
        <Link
          to="/"
          className="inline-block text-lg font-open_sans font-semibold bg-black text-white rounded-md py-2 px-4"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
