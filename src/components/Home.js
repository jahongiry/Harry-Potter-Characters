import { useSelector} from 'react-redux';
import CharactersHome from './CharactersHome';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {fetchData} from '../redux/homeStore';
import React, { useState } from "react";
import {actions} from '../redux/homeStore';


function Home() {
  const dispatch = useDispatch();
  const result  = useSelector(state => state.card);
  const [query, setQuery] = useState('');
  const [visible, setVisible] = useState(result);

  const inputRef = React.createRef()
  const updateQuery = () => {
    const inputText = inputRef.current.value
    setQuery(inputText)
  }

  useEffect(() => {
    setVisible(result);
  }, [result]);

   useEffect(() => {
    const searchedName = query.toLowerCase();
   setVisible(result.filter((info) => {
    const apiNames = info.names.toLowerCase();
      if(apiNames.includes(searchedName)) {
        return info
      }
    }))
  }, [query]);

  return <div>
    <h2>Harry Potter Characters</h2>
    <p>Source: HP-API!</p>
    <form>
      <input onChange={updateQuery} ref={inputRef} type="text" placeholder="Search..." name='search' />
    </form>
    <div>
      {result[0] && visible.map((data) => (
        <CharactersHome
        key= {data.id}
        id= {data.id}
        name={data.names} 
        image={data.image} 
        actor={data.actorName} 
        house={data.house}
        patronus={data.patronus}
        wand={data.wand}
        dateOfBirth={data.dateOfBirth}
        hairColour={data.hairColour}
        eyeColour={data.eyeColour} />
      ))}
    </div>
  </div>
}

export default Home;