import React, {useState} from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

function App() {

  const [url, setUrl] = useState(null);
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);

  async function sendLinks() {
    const result = await axios({
      method: 'post',
      url: 'http://localhost:5000/api/bear',
      data: {
      url: url
      }
    });

    setResult(result.data);
    console.log(result);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Choose your bear picture!
        </p>
        <form onSubmit={(e) => { e.preventDefault(); sendLinks()}}>
          <input type="file" onChange={(e) => { e.preventDefault(); setImage(e.target.value)}}></input>
          <input type="submit"></input>
        </form>
        <p>
          OR
        </p>
        <p>
          Enter a URL!
        </p>
        <form onSubmit={(e) => { e.preventDefault(); sendLinks()}}>
          <input type="url" onChange={(e) => { e.preventDefault(); setUrl(e.target.value)}}></input>
          <input type="submit"></input>
        </form>
      </header>
    </div>
  );
}

export default App;
