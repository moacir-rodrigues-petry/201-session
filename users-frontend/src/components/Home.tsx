import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the User Management App</h1>
      <p>
        This application allows you to view and manage user data from our API.
      </p>
      <div className="cta-button">
        <Link to="/users" className="view-users-button">
          View Users
        </Link>
      </div>
      <div className="app-features">
        <div className="feature-card">
          <div className="feature-icon">👥</div>
          <h3>User Management</h3>
          <p>View a list of all users in the system</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🔍</div>
          <h3>User Details</h3>
          <p>Access detailed information about each user</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">📊</div>
          <h3>Data Visualization</h3>
          <p>Clear and organized display of user information</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
