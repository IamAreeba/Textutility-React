import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-${props.mode} navbar-expand-lg bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.Title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">{props.Home}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.About}</Link>
              </li> 
              {/* <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </li> */}
            </ul>
            
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              {/* <button className="btn btn-info me-4 text-dark" type="submit">Search</button> */}
              <button className={`btn btn-info me-4 text-${props.mode==='light'?'dark':'light'}`} type="submit">Search</button>
            </form>


            {/* Button for Mode */}
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                <label className={"form-check-label"} htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                {/* <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`}                htmlFor="flexSwitchCheckDefault">Enable DarkMode</label> */}
            </div>



          </div>
        </div>
    </nav>

  )
}


// PropTypes
Navbar.propTypes = {
    Title: PropTypes.string,
    Home: PropTypes.string,
    About: PropTypes.string
} 

// Navbar.propTypes = {
//     Title: PropTypes.string.isRequired,
//     Home: PropTypes.string.isRequired,
//     About: PropTypes.string.isRequired
// }

// Default Props
Navbar.defaultProps = {
    Title: "Set Title here ..",
    Home: "Set Home text ..",
    About: "Set About text .."
}
