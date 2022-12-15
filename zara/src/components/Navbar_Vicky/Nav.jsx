import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrCart } from 'react-icons/gr'
import './Nav.css'
function Nav() {
  return (
    <div className="container">
      <ul className="ul1">
        <li>
          <GiHamburgerMenu />
        </li>
        <li style={{ marginTop: '-15%' }}>
          <img
            width="180px"
            height="180px"
            src="https://www.logo.wine/a/logo/Zara_(retailer)/Zara_(retailer)-Logo.wine.svg"
            alt=""
          />
        </li>
      </ul>
      <ul className="ul2">
        <li>
          <u>SEARCH____</u>
        </li>

        <li>LOG IN</li>
        <li>HELP</li>
        <li>
          <GrCart />
        </li>
      </ul>
    </div>
  )
}

export default Nav
