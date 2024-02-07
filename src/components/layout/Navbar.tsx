import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav
      className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
      arial-label="Furni navigation bar"
    >
      <div className="container">
        <Link className="navbar-brand" href="/">
          Grace Furniture<span>.</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsFurni"
          aria-controls="navbarsFurni"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse" id="navbarsFurni">
          <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item active">
              <Link className="nav-link" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" href="/shop">
                Shop
              </Link>
            </li>
            <li>
              <Link className="nav-link" href="/about">
                About us
              </Link>
            </li>
            <li>
              <Link className="nav-link" href="/services">
                Services
              </Link>
            </li>
            {/* <li>
              <a className="nav-link" href="blog.html">
                Blog
              </a>
            </li> */}
            <li>
              <Link className="nav-link" href="/contact">
                Contact us
              </Link>
            </li>
          </ul>
          <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li>
              <a className="nav-link" href="#">
                <img src="images/user.svg" />
              </a>
            </li>
            <li>
              <Link className="nav-link" href="/cart">
                <img src="images/cart.svg" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
