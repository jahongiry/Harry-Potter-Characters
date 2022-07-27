import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {fetchData} from '../redux/homeStore';
import {actions} from '../redux/homeStore';
import classes from './Navigation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faGear} from '@fortawesome/free-solid-svg-icons'



function Navigation() {
  const dispatch = useDispatch();
  const home = () => {
  const data = dispatch(fetchData()); 
  dispatch(actions.initial(data));
  }

  return <header>
    <nav className={classes.nav}>
    <ul>
      <li><Link className={classes.link} onClick={home} to='/'><FontAwesomeIcon className={classes.icon} icon={faHome}></FontAwesomeIcon> </Link></li>
      <li><Link className={classes.link} onClick={home} to='/'><FontAwesomeIcon className={classes.icon} icon={faGear}></FontAwesomeIcon> </Link></li>
    </ul>
    </nav>
  </header>
}

export default Navigation;