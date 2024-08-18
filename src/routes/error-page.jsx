import { useRouteError } from "react-router-dom";
import Header from "../components/Header";



export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
        <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
    </>
  );
}

// if putting header on page, need to do it inside the div and fix the appearance of navbar on the page

