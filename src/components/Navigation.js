import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {fetchData} from '../redux/homeStore';
import {actions} from '../redux/homeStore';


function Navigation() {
  const dispatch = useDispatch();
  const home = () => {
  const data = dispatch(fetchData()); 
  dispatch(actions.initial(data));
  }

  return <header>
    <nav>
    <ul>
      <li><Link onClick={home} to='/'>Home</Link></li>
    </ul>
    </nav>
  </header>
}

export default Navigation;