import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../index.css'
const NavBar = ({ C, D, E }) => {
  const [change, Setonchange] = useState('');

  const handler = (e) => {
    e.preventDefault();
    C(change);
    Setonchange("");
  };

  const filter = (evt) => {
    evt.preventDefault();
    Setonchange(evt.target.value);
  };

  return (
    <nav className="navbar navbar-expand-lg text-white bg-dark bg-body-dark-500 NavBar">
      <div className="container-fluid">
        <Link
          className="navbar-brand text-white"
          to="/"
          style={{
            height: "50px",
            width: "200px",
            color: "#6A1E55",
            display: "flex",
            alignItems: "center",
          }}
          onClick={D}
        >
          <img src="/img4.png" alt="logo" />
          &nbsp;
          <span
            className="mt-1 px-2 py-3"
            style={{ fontSize: "20px", color: "#CF0F47", fontWeight: "bolder" }}
          >
            M CORNER
          </span>
        </Link>
        <div className="d-flex align-items-center justify-content-between w-100" id="navbarSupportedContent">
          <ul className="navbar-nav d-flex flex-row align-items-center mb-0">
            <li className="nav-item me-1">
              <Link
                className="nav-link active text-white"
                aria-current="page"
                to="/"
                onClick={D}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-house text-center align-center mb-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                </svg>{" "}
                Home
              </Link>
            </li>
            <li className="nav-item ms-4" onClick={E}>
              <Link className="nav-link text-white" to="/Movies" onClick={E}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-tv mb-0.5"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M13.991 3l.024.001a1.5 1.5 0 0 1 .538.143.76.76 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.5 1.5 0 0 1-.143.538.76.76 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.5 1.5 0 0 1-.538-.143.76.76 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.5 1.5 0 0 1 .143-.538.76.76 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2" />
                </svg>{" "}
                Movies
              </Link>
            </li>
          </ul>
          <form className="d-flex align-items-center ms-auto" role="search" onSubmit={handler}>
            <input
              className="form-control me-4 InputBar"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ width: "500px" }}
              value={change}
              onChange={filter}
            />
            <button className="btn btn-outline-success text-white me-3" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;