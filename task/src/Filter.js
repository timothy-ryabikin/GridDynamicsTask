import { useState } from 'react';
import './css/Filter.css';

function Filter(props) {

    const { tickers, setTickers, filteredTickers, setFilteredTickers } = props;

    const [search, setSearch] = useState("");

    const [dummy, setDummy] = useState();

    const handleChangeName = (e) => {
        setSearch(e.target.value);
    }

    // const filterContent = (e) => {
    //     e.preventDefault();
    //     const regexp = new RegExp(search, 'i');
    //     const filter = tickers.filter(ticker => regexp.test(ticker.name));
    //     setFilteredTickers(filter);
    //     if (filteredTickers.length != 0) {
    //         setTickerOrFilter(true);
    //         console.log(filteredTickers);
    //     }
    //     else (setTickerOrFilter(false))
    //     if (search == "") {
    //         setFilteredTickers([]);
    //         console.log(tickerOrFilter);
    //     }
    // }

    const filterContent = (e) => {
        e.preventDefault();
        const regexp = new RegExp(search, 'i');
        const newArr = tickers.filter(ticker => regexp.test(ticker.name));
        console.log(newArr);
        setTickers(newArr);
    }

    return (
        <section className="filterContent ">
            <form onSubmit={filterContent}>
                <input autoFocus value={search} type="search" placeholder="filter..." className="filter__search-field" onChange={handleChangeName}></input>
            </form>
        </section>
    )
}

export default Filter;