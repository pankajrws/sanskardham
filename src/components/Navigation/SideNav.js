import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "./SideNav.css";

function SideNav(props) {
  document.addEventListener("DOMContentLoaded", function (event) {
    const showNavbar = (toggleId, navId, bodyId, headerId) => {
      const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId),
        bodypd = document.getElementById(bodyId),
        headerpd = document.getElementById(headerId);

      // Validate that all variables exist
      // if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener("click", () => {
        // show navbar
        nav.classList.toggle("show");
        // change icon
        toggle.classList.toggle("bx-x");
        // add padding to body
        bodypd.classList.toggle("body-pd");
        // add padding to header
        headerpd.classList.toggle("body-pd");
      });
      // }
    };

    showNavbar("header-toggle", "nav-bar", "body-pd", "header");
    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll(".nav_link");

    function colorLink() {
      if (linkColor) {
        linkColor.forEach((l) => l.classList.remove("active"));
        this.classList.add("active");
      }
    }
    linkColor.forEach((l) => l.addEventListener("click", colorLink));

    // Your code to run since DOM is loaded and ready
  });

  const [items, setItem] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchConfig = useCallback(async () => {
    try {
      const response = await fetch("https://sanskardhammumbai.com/wp-json/sanskardham_app/v1/submenu");
      if (!response.ok) {
        throw new Error("Something went wrong!. Cannot load data");
      }

      const data = await response.json();
      setItem(data.data);
    } catch (err) {
      setError(true);
    }
    setIsLoading(false);
  }, []);

  if (!isLoading) {
    // console.log(items);
  }

  useEffect(() => {
    fetchConfig();
  }, [fetchConfig]);

  function clickHandler(item) {
    props.onMenuChange(item);
  }

  return (
    <>
      <header className="header" id="header">
        <div className="header_toggle">
          <i className="fas fa-bars" id="header-toggle"></i>
        </div>
      </header>
      <div className="l-navbar" id="nav-bar">
        <nav className="nav">
          <div>
            <Link to="/" className="nav_logo">
              <i className="fas fa-layer-group nav_logo-icon"></i>
              <span className="nav_logo-name">108 Guruvani</span>
            </Link>
            <div className="nav_list">
              <Link to="/" className="nav_link active">
                <i className="fas fa-th-large nav_icon"></i>
                <span className="nav_name">{!isLoading && !error && items[0].category_name}</span>
              </Link>
              <Link to="/videos" className="nav_link" onClick={clickHandler(items[1])}>
                <i className="fas fa-play-circle"></i>
                <span className="nav_name">{!isLoading && !error && items[1].category_name}</span>
              </Link>
              <Link to="/gallery" className="nav_link">
                <i className="fas fa-images"></i>
                <span className="nav_name">{!isLoading && !error && items[2].category_name}</span>
              </Link>
              <Link to="/e-library" className="nav_link">
                <i className="fas fa-book-reader"></i>
                <span className="nav_name">{!isLoading && !error && items[3].category_name}</span>
              </Link>
              <Link to="/shishyagyan" className="nav_link">
                <i className="fas fa-user-friends"></i>
                <span className="nav_name">{!isLoading && !error && items[4].category_name}</span>
              </Link>
              <Link to="/contact" className="nav_link">
                <i className="fas fa-paper-plane"></i>
                <span className="nav_name">{!isLoading && !error && items[5].category_name}</span>
              </Link>
            </div>
          </div>
          {/* <a href="#" className="nav_link">
            <i className="bx bx-log-out nav_icon"></i>
            <span className="nav_name">SignOut</span>
          </a> */}
        </nav>
      </div>
    </>
  );
}

export default SideNav;
