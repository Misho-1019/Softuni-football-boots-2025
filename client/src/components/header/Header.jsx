import { Link } from "react-router";
import { useUserContext } from "../../context/userContext";

export default function Header() {
    const { email } = useUserContext()
    return (
        <header className="header_section">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg custom_nav-container ">
                    <a className="navbar-brand">
                        <span>Football Boots</span>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                            <ul className="navbar-nav  ">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item ">
                                    <Link className="nav-link" to="/boots">
                                        All Boots
                                    </Link>
                                </li>
                                {email
                                    ? (<div id="user">

                                        <li className="nav-item">
                                            <Link className="nav-link" to="/boots/create">
                                                Create Boot
                                            </Link>
                                        </li>
                                        <li className="nav-item ">
                                            <Link className="nav-link" to="/profile">
                                                Profile
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/logout">
                                                Logout
                                            </Link>
                                        </li>
                                    </div>)
                                    : (<div id="guest">

                                        <li className="nav-item">
                                            <Link className="nav-link" to="/login">
                                                Login
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/register">
                                                Register
                                            </Link>
                                        </li>
                                    </div>)
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}