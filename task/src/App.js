import Filter from './Filter'
import './css/App.css';
import Content from './Content';
import TickerForm from './TickerForm';
import { useState } from 'react';

function App() {

  const [tickers, setTickers] = useState([
    { id: '1', name: 'SPCE', price: "100", trend: "increase" },
    { id: '2', name: 'GDYN', price: "100", trend: "decrease" },
    { id: '3', name: 'AAPL', price: "100", trend: "nochange" },
  ]);

  return (
    <div className="App">
      <Filter></Filter>
      <Content tickers={tickers}></Content>
      <TickerForm tickers={tickers} setTickers={setTickers}></TickerForm>
    </div>
  );
}

export default App;
