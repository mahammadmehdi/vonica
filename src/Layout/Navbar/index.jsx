import React from "react";
import "./index.scss";

function Navbar() {
  return (
    <div className="navigation">
      <div className="navbar">
        <div className="leftNavbar"><h3 className="vonica">Vonica</h3></div>
        <div className="mainNavbar">
          <ul className="pages">
            <li>
              Home <i class="fa-solid fa-angle-down"></i>
            </li>
            <li>
              Shop <i class="fa-solid fa-angle-down"></i>
            </li>
            <li>
              Pages <i class="fa-solid fa-angle-down"></i>
            </li>
            <li>
              Blog <i class="fa-solid fa-angle-down"></i>
            </li>
            <li>
              Contact <i class="fa-solid fa-angle-down"></i>
            </li>
          </ul>
        </div>
        <div className="rightNavbar">
          <i class="fa-regular fa-user"></i>
          <i class="fa-solid fa-magnifying-glass"></i>
          <i class="fa-solid fa-basket-shopping"></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
