import './css/Content.css';
import { useState, useEffect } from "react";

function Content(props) {

    const { tickers, setTickers, filteredTickers, setFilteredTickers } = props;

    const [dummy, setDummy] = useState();

    const deleteItem = (id) => {
        if (window.confirm("Confirm deleting ticker " + `${tickers[id].name}`)) {
            tickers.splice(id, 1);
            filteredTickers.splice(id, 1);
            localStorage.setItem("key", JSON.stringify(tickers))
            setDummy({});
        }
    }

    useEffect(() => {
        const store = localStorage.getItem("key")
        if (store) {
            setTickers(JSON.parse(store))
            setFilteredTickers(JSON.parse(store))
        }
    }, []);

    return (
        <section className="content">
            <div className="content__about">
                {filteredTickers.map((name, id) => (
                    <div key={id} className="content__item" id={`${filteredTickers[id].id}`} >
                        <div>{filteredTickers[id].name}</div>
                        <div>&#36;{filteredTickers[id].price}</div>
                        <div><i className={`${filteredTickers[id].trend}`}></i></div>
                        {filteredTickers[id].showDelete &&
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