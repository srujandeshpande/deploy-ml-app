import React, {useState} from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

function App() {

  const [url, setUrl] = useState(null);
  const [result, setResult] = useState(null);
  const [blackbear, setBlackbear] = useState(0);
  const [grizzlybear, setGrizzly] = useState(0);
  const [teddybear, setTeddy] = useState(0);
  const [viewres, setViewres] = useState(0);
  const [bear, setBear] = useState(null);

  async function sendLink() {
    const result = await axios({
      method: 'post',
      url: 'http://localhost:5000/api/url/bear',
      data: {
      url: url
      }
    });

    setResult(result.data);
    console.log(result);

    var res = result.data['prediction'];

    setBlackbear(res[1]);
    setGrizzly(res[2]);
    setTeddy(res[3]);
    setViewres(1);
    setBear(res[0]);
  }


  function viewResults() {
    if(viewres){
      return(
        <>
      <p>
        You are a {bear} bear!
      </p>
      <img src={url}></img>
      <h6>
      Black Bear: {blackbear}
      </h6>
      <h6>
      Grizzly Bear: {grizzlybear}
      </h6>
      <h6>
      Teddy Bear: {teddybear}
      </h6>
      </>
    )
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Enter a URL!
        </p>
        <form onSubmit={(e) => { e.preventDefault(); sendLink()}}>
          <input type="url" onChange={(e) => { e.preventDefault(); setUrl(e.target.value)}}></input>
          <input type="submit"></input>
        </form>
        {viewResults()}
      </header>
    </div>
  );
}

export default App;
