import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Footer from './components/footer'
import Gigai from './components/Gigai'
import HeaderComponent from './components/header';

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header>*/}
  <HeaderComponent></HeaderComponent>
  <Gigai name='Comrade Ayush'></Gigai>
  <Gigai name='Comrade Yagnesh'></Gigai>
  <h1>Exorcizamus te, omnis immundus spiritus, omnis satanica potestas, omnis incursio infernalis adversarii,
      omnis legio, omnis congregatio et secta diabolica. Ergo, omnis legio diabolica,adiuramus te…cessa decipere humanas creaturas, eisque æternæ perditionìs venenum propinare…Vade,
      satana, inventor et magister omnis fallaciæ, hostis humanæ salutis…Humiliare sub potenti manu Dei; 
      contremisce et effuge, invocato a nobis sancto et terribili nomine…quem inferi tremunt…Ab insidiis diaboli, 
      libera nos, Domine.Ut Ecclesiam tuam secura tibi facias libertate servire, te rogamus, audi nos.
  </h1>
  <h1>Exorcizamus te, omnis immunde spiritus, omni satanica potestas, omnis incursioinfernalis adversarii, 
    omnis legio, omnis congregatio et secta diabolica, in nomini etvirtute Domini nostri Jesu Christi, 
    eradicare et effugare a Dei Ecclesia,ab animabusad imaginem Dei conditis ac pretioso divini Agni sanguini
    redemptis.
  </h1>

  <Footer/>
  
  </div>
  );
}
export default App;
