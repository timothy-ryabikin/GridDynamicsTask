import './css/Content.css';

function Content(props) {

    const { tickers } = props;

    return (
        <section className="content">
            <div className="content__about">
                {tickers.map((name, id) => (
                    <div key={id} className="content__item" id={`${tickers[id].id}`}>
                        <div>{tickers[id].name}</div>
                        <div>&#36;{tickers[id].price}</div>
                        <div><i className={`${tickers[id].trend}`}></i></div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Content;