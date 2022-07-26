import {actions} from '../redux/homeStore';
import {useDispatch, useSelector} from 'react-redux';

function Home() {
  const result  = useSelector(state => state.card)
  const dispatch = useDispatch();
  const testFun = () => {
    dispatch(actions.characters(result));  
  }
  console.log(result);
  
  
  

  return <div>
    <h2>Harry Potter Characters</h2>
    <p>Source: HP-API!</p>
    <button onClick={testFun} type='submit'>tttt</button>
  </div>
}

export default Home;