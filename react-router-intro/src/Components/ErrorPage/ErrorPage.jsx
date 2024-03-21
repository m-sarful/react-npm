import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <h2>OOpps Your result not found</h2>
            <p>{error.statusText || error.message}</p>
            <Link to='/'><button>Go Back</button></Link>
        </div>
    );
};

export default ErrorPage;