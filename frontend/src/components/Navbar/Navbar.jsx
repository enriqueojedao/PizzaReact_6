import './Navbar.css';

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-title d-none d-lg-block">Pizzería Mamma Mía!</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="btn btn-link nav-link">🍕Home</button>
            </li>
            {token ? (
              <>
                <li className="nav-item">
                  <button className="btn btn-link nav-link">🔓Profile</button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-link nav-link">🔒Logout</button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <button className="btn btn-link nav-link">🔐Login</button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-link nav-link">🔏Register</button>
                </li>
              </>
            )}
          </ul>
        </div>
        <button className="btn btn-link total-button nav-link ">
          🛒 Total: ${total.toLocaleString()}
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
