import React from 'react'
import '../header.css'
const Header = () => {
  return (

    <header className="container-fluid py-3 curve">
      <ul className="list-unstyled">
        <li className="nav-item float-start"><a href="#" className="nav-link" aria-current="page">LOGO</a></li>
        <li className="nav-item float-end dropdown">

        <div class="dropdown">
          <a class="dropdown-toggle nav-link" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            More
          </a>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Whitepaper</a>
            <a class="dropdown-item" href="#">About</a>
            <a class="dropdown-item" href="#">Contact</a>
          </div>
        </div>
          
        </li>


        
        <li className="nav-item float-end"><a href="#" className="nav-link">Team</a></li>
        <li className="nav-item float-end"><a href="#" className="nav-link">Roadmap</a></li>
        <li className="nav-item float-end"><a href="#" className="nav-link">NFTs</a></li>
      </ul>
    </header>
  )
}

export default Header