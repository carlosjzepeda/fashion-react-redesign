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
              <li>
                <NavLink exact to='/enter'>
                  Entry
                </NavLink>
              </li>
              <li>Makeup</li>
              <li>Beauty Tools</li>
              <li>Hair</li>
              <li>Collections</li>
              <li>Trending</li>
            </ul>
          </nav>
        </div>
        <hr />
      </header>
    </>
  );
};

export default Navbar;
