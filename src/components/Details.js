import classes from './Details.module.css';
import { useSelector} from 'react-redux';


function Details() {
  const result  = useSelector(state => state.card);
  return <div className={classes.middlePart}>
    <div>
    <img src={result.image} />
    <h3>{result.names}</h3> 
    <p>House: {result.house}</p>
    { result.patronus && <p>Patronus: {result.patronus}</p>}
    <hr/>
    <h3>{result.actorName}</h3> 
    {result.dateOfBirth && <p>Date of birth: {result.dateOfBirth}</p>}
    {result.hairColour && <p>Hair Colour: {result.hairColour}</p>}
    {result.eyeColour && <p>Eye Colour: {result.eyeColour}</p>}
    </div>
  </div>
}

export default Details;