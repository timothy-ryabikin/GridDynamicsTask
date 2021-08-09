import './css/TickerForm.css';
import { useState } from "react";

function TickerForm(props) {

    const { tickers, setTickers } = props;

    const [showForm, setShowForm] = useState(false);

    const [showDelete, setShowDelete] = useState(true);

    const [tickerName, setTickerName] = useState("");

    const [tickerPrice, setTickerPrice] = useState("");

    const [tickerTrend, setTickerTrend] = useState("increase");

    const handleChangeName = (e) => {
        setTickerName(e.target.value)
    }

    const handleChangePrice = (e) => {
        setTickerPrice(e.target.value)
    }

    const handleChangeTrend = (e) => {
        setTickerTrend(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // const id = (tickers.length + 1);
        const id = (new Date).getTime()
        setTickers((tickers) => [
            ...tickers, { id: id, name: tickerName, price: tickerPrice, trend: tickerTrend, showDelete: showDelete }
        ])
    }

    return (
        <section className="ticker-form">
            {showForm &&
                <div className="ticker-form__about">
                    <form onSubmit={handleSubmit}>
                        <div className="ticker-form__input">
                            <input type="text" placeholder="Enter ticker name..." value={tickerName} onChange={handleChangeName} required />
                        </div>
                        <div className="ticker-form__input">
                            <input type="text" placeholder="Enter price..." value={tickerPrice} onChange={handleChangePrice} required />
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