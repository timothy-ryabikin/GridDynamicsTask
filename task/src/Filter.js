import { useState } from 'react';
import './css/Filter.css';

function Filter(props) {

    const { tickers, setTickers } = props;

    const [search, setSearch] = useState("")

    const handleChangeName = (e) => {
        setSearch(e.target.value);
    }

    const filterContent = (e) => {
        e.preventDefault();
        console.log("search = " + search);
        const regexp = new RegExp(search, 'i');
        const newArr = tickers.filter(item => regexp.test(item.name));
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