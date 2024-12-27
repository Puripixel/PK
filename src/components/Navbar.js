import React from 'react';
import './Styles/Navbar.css';

function Navbar({ setCurrentPage, currentPage }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark custom-navbar">
      <div className="container d-flex justify-content-between">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto text-center">
            <li className={`nav-item ${currentPage === "home" ? "active" : ""}`}>
              <a className="nav-link" href="#" onClick={() => setCurrentPage("home")}>
                หน้าแรก
              </a>
            </li>
            <li className={`nav-item ${currentPage === "about" ? "active" : ""}`}>
              <a className="nav-link" href="#" onClick={() => setCurrentPage("about")}>
                เกี่ยวกับเรา
              </a>
            </li>
            <li className={`nav-item ${currentPage === "courses" ? "active" : ""}`}>
              <a className="nav-link" href="#" onClick={() => setCurrentPage("courses")}>
                หลักสูตร
              </a>
            </li>
            <li className={`nav-item ${currentPage === "contact" ? "active" : ""}`}>
              <a className="nav-link" href="#" onClick={() => setCurrentPage("contact")}>
                ติดต่อเรา
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
