import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import {actions} from '../redux/homeStore';

function CharactersHome(props) {
  const dispatch = useDispatch();

  const specificChar = () => {
  dispatch(actions.character(props));  
  }

  return <div>
    <Link onClick={specificChar} to='/Details'>
    <div>
    {props.image && <img src={props.image} />}
    <h3>{props.name}</h3> 
    {props.actor && <span>Actor: {props.actor}</span>}
    </div>
    </Link>
  </div>
}

export default CharactersHome;