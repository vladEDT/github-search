import {NavLink} from 'react-router-dom'

const Navbar = () => (
  <nav className='navbar navbar-dark bg-dark navbar-expand'>
    <div className='container'>
      <div className='navbar-brand fs-3'>Github Search</div>
      <ul className='navbar-nav fs-5'>
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
    </div>
  </nav>
)

export default Navbar
