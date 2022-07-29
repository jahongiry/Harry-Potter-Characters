import { useSelector } from 'react-redux';
import classes from './Details.module.css';

function Details() {
  const result = useSelector((state) => state.card);
  return (
    <div className={classes.middlePart}>
      <div>
        <img alt="Character" src={result.image} />
        <h3>{result.names}</h3>
        <p>
          House:
          <span>
            {' '}
            {result.house}
          </span>
        </p>
        { result.patronus && (
        <p>
          Patronus:
          <span>
            {' '}
            {result.patronus}
          </span>

        </p>
        )}
        <hr />
        <h3>{result.actorName}</h3>
        {result.dateOfBirth && (
        <p>
          Date of birth:
          {' '}
          <span>
            {' '}
            {result.dateOfBirth}
          </span>
        </p>
        )}
        {result.hairColour && (
        <p>
          Hair Colour:
          <span>
            {' '}
            {result.hairColour}
          </span>
        </p>
        )}
        {result.eyeColour && (
        <p>
          Eye Colour:
          <span>
            {' '}
            {result.eyeColour}
          </span>
        </p>
        )}
      </div>
    </div>
  );
}

export default Details;
