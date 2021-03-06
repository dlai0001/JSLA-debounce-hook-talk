import React, { useState } from 'react';
import './App.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import initialData from './got'
import { useSearchState } from './libs/use-search-state';
import { useDebounceSearchWrong } from './libs/use-debounce-search-state-wrong';
import { useDebounceSearchRight } from './libs/use-debounce-search-state-right';


function App() {
  const [query, setQuery] = useState('');

  // const results = useSearchState(query);
  // const results = useDebounceSearchWrong(query);
  const results = useDebounceSearchRight(query);

  const displayResults = query.length > 0 ? results : initialData.characters

  const updateQuery = (evt => {
    setQuery(evt.target.value)
  })

  return (
    <div className="container">
      <h1 className="title">JSLA Talks</h1>
      <h2 className="subtitle">Building a Debounced Search As You Type</h2>
      Visit Javascript LA at <a href="https://javascriptla.net/">https://javascriptla.net/</a>.
      <div>
      <h2 className="subtitle">Search GOT characters</h2>
        <input className="input is-info" type="text" placeholder="Enter character name here." value={query} onChange={updateQuery}></input>
        <div >
          {
            displayResults.map(x => <CharacterBlurb character={x} key={x.id}/>)
          }
        </div>
      </div>
    </div>
  );
}

function CharacterBlurb(props) {
  const {character} = props;

  return <div>
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            {character.characterImageThumb && <img src={character.characterImageThumb}/>}
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{character.characterName}</strong> <small>{character.actorName}</small>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aenean efficitur sit amet massa fringilla egestas.Nullam condimentum luctus turpis.
            </p>
          </div>
        </div>
      </article>
    </div>
  </div>
}

export default App;