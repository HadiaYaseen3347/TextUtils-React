import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default function Navbar({ title = "Type Title here", mode, toggleMode }) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">{title}</NavLink>
        <button className="navbar-toggler" type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
            {/* HOME link */}
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'fw-bold ' : ''}`
                }
                to="/"
              >
                Home
              </NavLink>
            </li>

            {/* ABOUT link */}
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'fw-bold ' : ''}`
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
          </ul>

          <div className={`form-check form-switch text-${mode === 'light' ? 'dark' : 'light'} ms-3`}>
            <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="switchCheckDefault" />
            <label className="form-check-label" htmlFor="switchCheckDefault">Enable Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
