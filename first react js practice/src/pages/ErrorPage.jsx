import { Link, useRouteError } from "react-router-dom"

function ErrorPage() {
    const error = useRouteError()
    if (error.status === 404) {
        return (
            <div className="error-container container">
                <div>
                    <h1>Page not found 404</h1>
                    <Link to='/' className="btn">Go to Home</Link>
                </div>
            </div>
        )
    }
    return (
        <div className="error-container container">
            <div>
                <h1>Something wents wrong</h1>
                <Link to='/' className="btn">Go to Home</Link>
            </div>
        </div>)
}

export default ErrorPage
