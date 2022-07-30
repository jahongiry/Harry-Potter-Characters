import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import classes from './Home.module.css';
import CharactersHome from './CharactersHome';

function Home() {
  const result = useSelector((state) => state.card);
  const [query, setQuery] = useState('');
  const [visible, setVisible] = useState(result);

  const inputRef = React.createRef();
  const updateQuery = () => {
    const inputText = inputRef.current.value;
    setQuery(inputText);
  };

  useEffect(() => {
    setVisible(result);
  }, [result]);

  useEffect(() => {
    const searchedName = query.toLowerCase();
    // eslint-disable-next-line
    setVisible(result.filter((info) => {
      const apiNames = info.names.toLowerCase();
      if (apiNames.includes(searchedName)) {
        return info;
      }
    }));
  }, [query]);

  return (
    <div>
      <div className={classes.middlePart}>
        <h2>Harry Potter Characters</h2>
        <p>Source: HP-API!</p>
        <form>
          <input className={classes.search} onChange={updateQuery} ref={inputRef} type="text" placeholder="Search..." name="search" />
        </form>
      </div>
      <div className={classes.itemPart}>
        <div className={classes.card}>
          {result[0] && visible.map((data) => (
            <CharactersHome
              key={data.id}
              id={data.id}
              name={data.names}
              image={data.image}
              actor={data.actorName}
              house={data.house}
              patronus={data.patronus}
              wand={data.wand}
              dateOfBirth={data.dateOfBirth}
              hairColour={data.hairColour}
              eyeColour={data.eyeColour}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
