import './css/TickerForm.css';
import { useState, useEffect } from "react";

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
                            <input type="submit" value="Add ticker" className="tikcer-form__add-ticker pointer" />
                        </div>
                    </form>
                </div>}
            <div className="button-show-ticker">
                <input className="pointer show-filter"
                    id="showform"
                    type="checkbox"
                    checked={showForm}
                    value={showForm}
                    onChange={() => setShowForm(!showForm)}
                />
                <label for="showform" className=" pointer">
                    <svg className="button-show-ticker__about" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 27    " width="50" height="50"><defs></defs><title>Add ticker</title><g id="_8.add" data-name="8.add"><circle class="cls-1" cx="12" cy="12" r="11" /><line class="cls-1" x1="12" y1="6" x2="12" y2="18" /><line class="cls-1" x1="18" y1="12" x2="6" y2="12" /></g></svg>
                </label>
            </div>

        </section >
    )
}

export default TickerForm;