import React from 'react';

import "../../styles/NavBar.css"
const Navbar = () => {

  return (
    <div class="BG">
    <nav>
      <input type="checkbox" id="check" />
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
      <label class="logo">CONFLUENCE</label>

      <ul>
        <li><a class="active" href="#">Home</a></li>
        <li><a href="#">Events</a></li>
        <li><a href="#">Sponsors</a></li>
        <li><a href="#">Gallery</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Conatct</a></li>
      </ul>
    </nav>
  </div>
  )  
};

export default Navbar;