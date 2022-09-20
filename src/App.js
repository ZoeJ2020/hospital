import React from 'react';
import './App.css';

function App() {

  const changeSky = () => {

    let sky = document.getElementById('container__sky').classList;
    sky.toggle('night');

    let stars = document.getElementById('container__sky__stars').style;

    // check if night class is currrently active = nighttime is on
    if(sky.contains('night')) //if nighttime is on
    {
      stars.display = 'flex'; //turn on stars
    } else //if not then
    {
      stars.display = 'none'; //turn off stars
    }

  }

  return (
    <div className="App">
      <header className="App-header">
        <div id="container__sky">

        <div id="container__sky__stars">
          <div id="stars"></div>
          <div id="stars2"></div>
        </div>

          <div className="container__sky__button">
            <button id='skyButton' onClick={changeSky}>
              <i className="fa-solid fa-sun">
                TESTTESTTESTTEST
              </i>
            </button>
          </div>
          <div className="container__field">
            <img src="" alt="" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;