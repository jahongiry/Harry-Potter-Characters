import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classes from './Characters.module.css';
import { actions } from '../redux/homeStore';

function CharactersHome(props) {
  const { actor, image, name } = props;
  const dispatch = useDispatch();

  const specificChar = () => {
    // eslint-disable-next-line
    dispatch(actions.character(props));
  };

  return (
    <div className={classes.characterCard}>
      <Link onClick={specificChar} className={classes.link} to="/Details">
        <div>
          {image && <img alt="Character" className={classes.image} src={image} />}
          <h3 className={classes.title}>{name}</h3>
          {actor && (
          <span>
            Actor:
            {actor}
          </span>
          )}
        </div>
      </Link>
    </div>
  );
}

CharactersHome.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  actor: PropTypes.string.isRequired,
};

export default CharactersHome;
