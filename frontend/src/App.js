import React, {useState} from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

function App() {

  const [url, setUrl] = useState(null);
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);

  async function sendLinks() {
    fetch("https://")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.items);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Choose your bear picture!
        </p>
        <form>
          <input type="file" onChange={(e) => { e.preventDefault(); setImage(e.target.value)}}></input>
          <input type="submit"></input>
        </form>
        <p>
          OR
        </p>
        <p>
          Enter a URL!
        </p>
        <form>
          <input type="url" onChange={(e) => { e.preventDefault(); setUrl(e.target.value)}}></input>
          <input type="submit"></input>
        </form>
      </header>
    </div>
  );
}

export default App;
