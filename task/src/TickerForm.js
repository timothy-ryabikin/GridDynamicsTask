import './css/TickerForm.css';
import { useState } from "react";

function TickerForm(props) {

    const { tickers, setTickers } = props;

    const [showForm, setShowForm] = useState(false);

    const [tickerName, setTickerName] = useState("");

    const [tickerPrice, setTickerPrice] = useState("");

    const [tickerTrend, setTickerTrend] = useState("increase");

    const handleChangeName = (e) => {
        setTickerName(e.target.value)
        console.log("tickerName = " + tickerName);
    }

    const handleChangePrice = (e) => {
        setTickerPrice(e.target.value)
        console.log("tickerPrice = " + tickerPrice);
    }

    const handleChangeTrend = (e) => {
        setTickerTrend(e.target.value)
        console.log("tickerTrend = " + tickerTrend);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTicker = { id: '4', name: 'SPCE', price: "100", trend: "increase" };
        setTickers((tickers) => [
            ...tickers, { id: '4', name: tickerName, price: tickerPrice, trend: tickerTrend }
        ])
    }

    return (
        <section className="ticker-form">
            {showForm &&
                <div className="ticker-form__about">
                    <form onSubmit={handleSubmit}>
                        <div className="ticker-form__input">
                            <input type="text" placeholder="Enter ticker name..." value={tickerName} onChange={handleChangeName} />
                        </div>
                        <div className="ticker-form__input">
                            <input type="text" placeholder="Enter price..." value={tickerPrice} onChange={handleChangePrice} />
                        </div>
                        <div className="ticker-form__input">
                            <select name="select" onChange={handleChangeTrend}>
                                <option value="increase">increase</option>
                                <option value="decrease">decrease</option>
                                <option value="nochange">no change</option>
                            </select>
                        </div>
                        <div className="ticker-form__input">
                            <input type="submit" value="+" />
                        </div>
                    </form>
                </div>}
            <div>
                <div className="pointer">
                    <input className="pointer"
                        id="showform"
                        type="checkbox"
                        checked={showForm}
                        value={showForm}
                        onChange={() => setShowForm(!showForm)}
                    />
                    <label className="pointer" for="showform">Show form</label>
                </div>
            </div>
        </section >
    )
}

export default TickerForm;