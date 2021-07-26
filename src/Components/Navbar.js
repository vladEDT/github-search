import {NavLink} from 'react-router-dom'

const Navbar = () => (
  <nav className='navbar navbar-dark bg-primary navbar-expand-lg mb-3'>
    <div className='navbar-brand'>Github Search</div>
    <ul className='navbar-nav'>
      <li className='nav-item'>
        <NavLink to='/' exact className='nav-link'>
          Main Page
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink to='/about' className='nav-link'>
          Info
        </NavLink>
      </li>
    </ul>
  </nav>
)

export default Navbar
