import './css/Content.css';
import { useState, useEffect } from "react";

function Content(props) {

    const { tickers, setTickers, filteredTickers, setFilteredTickers } = props;

    const [dummy, setDummy] = useState();

    const deleteItem = (id) => {
        if (window.confirm("Confirm deleting ticker " + `${tickers[id].name}`)) {
            tickers.splice(id, 1);
            localStorage.setItem("key", JSON.stringify(tickers))
            setDummy({});
        }
    }

    useEffect(() => {
        const store = localStorage.getItem("key")
        if (store) {
            setTickers(JSON.parse(store))
        }
    }, []);

    return (
        <section className="content">
            <div className="content__about">
                {tickers.map((name, id) => (
                    <div key={id} className="content__item" id={`${tickers[id].id}`} >
                        <div>{tickers[id].name}</div>
                        <div>&#36;{tickers[id].price}</div>
                        <div><i className={`${tickers[id].trend}`}></i></div>
                        {tickers[id].showDelete &&
                            <div className="delete-ticker-button">
                                <button className="pointer" onClick={() => deleteItem(id)}>Delete</button>
                            </div>}
                    </div>
                ))}
            </div>
        </section >
    )
}

export default Content;