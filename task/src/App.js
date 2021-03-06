import Filter from './Filter'
import './css/App.css';
import Content from './Content';
import TickerForm from './TickerForm';
import React, { useState, useEffect } from 'react';

function App() {

  const [tickers, setTickers] = useState([
    //commet below to wirk with empty collection
    //*
    { id: 1, name: 'SPCE', price: "100", trend: "increase", showDelete: true },
    { id: 2, name: 'GDYN', price: "100", trend: "decrease", showDelete: true },
    { id: 3, name: 'AAPL', price: "100", trend: "nochange", showDelete: true },
    //*
    //
  ]);

  const [filteredTickers, setFilteredTickers] = useState(tickers);

  useEffect(() => {
    localStorage.setItem("key", JSON.stringify(tickers))
  });

  return (
    <div className="App">
      <Filter filteredTickers={filteredTickers} setFilteredTickers={setFilteredTickers}></Filter>
      <Content tickers={tickers} setTickers={setTickers} filteredTickers={filteredTickers} setFilteredTickers={setFilteredTickers}></Content>
      <TickerForm setTickers={setTickers} filteredTickers={filteredTickers} setFilteredTickers={setFilteredTickers}></TickerForm>
    </div>
  );
}

export default App;
