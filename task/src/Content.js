import './css/Content.css';
import { useState, useEffect } from "react";

function Content(props) {

    const { tickers, setTickers } = props;

    const [dummy, setDummy] = useState();

    // const changeShowDelete = (id) => {
    //     console.log("changeShowDelete id = " + id);
    //     tickers[id].showDelete = !tickers[id].showDelete;
    //     setDummy({});
    // }

    const deleteItem = (id) => {
        if (window.confirm("Confirm deleting ticker " + `${tickers[id].name}`)) {
            tickers.splice(id, 1);
            setDummy({});
        }
    }

    return (
        <section className="content">
            <div className="content__about">
                {tickers.map((name, id) => (
                    <div key={id} className="content__item pointer" id={`${tickers[id].id}`} >
                        <div>{tickers[id].name}</div>
                        <div>&#36;{tickers[id].price}</div>
                        <div><i className={`${tickers[id].trend}`}></i></div>
                        {tickers[id].showDelete &&
                            <div className="delete-ticker-button">
                                <button className="pointer" onClick={() => deleteItem(id)}>Delete</button>
                            </div>}
                    </div>
                ))}
                {/* {tickers.map((name, id) => (

                    tickers[id].showDelete && <div className="delete-ticker-button">
                        <button onClick={() => deleteItem(id)}>Delete</button>
                    </div>
                ))} */}
            </div>
        </section >
    )
}

export default Content;