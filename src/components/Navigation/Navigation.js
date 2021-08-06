import React from "react";

function Navigation(props) {
  function clickHandler(event) {
    props.onPageChange(event.target.innerHTML);
    console.log(event);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="javascript:void(0);">
          Sanskardham
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" onClick={clickHandler} href="javascript:void(0);">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="javascript:void(0);" onClick={clickHandler}>
                ContactUs
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
