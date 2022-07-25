import { Link } from 'react-router-dom';

function Navigation() {
  return <header>
    <nav>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/Details'>Details</Link></li>
    </ul>
    </nav>
  </header>
}

export default Navigation;