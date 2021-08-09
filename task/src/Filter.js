import './css/Filter.css';

function Filter() {
    return (
        <section className="filter">
            <form>
                <input type="search" placeholder="filter..." className="filter__search-field"></input>
            </form>
        </section>
    )
}

export default Filter;