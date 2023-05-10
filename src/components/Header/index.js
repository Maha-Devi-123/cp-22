import {Link} from 'react-router-dom'
import './index.css'

// Write your JS code here
const Header = () => (
  <div className="header-can">
    <div className="img-logo-can">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png "
        alt="wave"
        className="wave-logo"
      />
      <p className="items-head">Wave</p>
    </div>
    <ul className="items-can">
      <li>
        <Link className="items-head" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="items-head" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="items-head" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
