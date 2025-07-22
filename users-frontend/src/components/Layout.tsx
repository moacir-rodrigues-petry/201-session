import { Outlet, Link, useLocation } from "react-router-dom";
import "../styles/Layout.css";

const Layout = () => {
  const location = useLocation();

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="logo">
          <Link to="/">User Management</Link>
        </div>
        <nav className="main-nav">
          <ul>
            <li className={location.pathname === "/" ? "active" : ""}>
              <Link to="/">Home</Link>
            </li>
            <li className={location.pathname === "/users" ? "active" : ""}>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="app-content">
        <Outlet />
      </main>
      <footer className="app-footer">
        <p>
          &copy; {new Date().getFullYear()} User Management App. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default Layout;
