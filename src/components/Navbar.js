import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header>
        <div className='navbar'>
          <nav>
            <ul>
              <li className='revlon-title'>
                <NavLink exact to='/'>
                  REVLON
                </NavLink>
              </li>
              <li>Makeup</li>
              <li>Beauty Tools</li>
              <li>Hair</li>
              <li>Collections</li>
              <li>Trending</li>
              <li className='icons'>
                <i class='fas fa-search'></i>
              </li>
              <li className='icons'>
                <i class='fas fa-shopping-cart'></i>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
