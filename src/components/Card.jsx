import "../styles/card.css";

function Card({ name, src, id, clickHandle, shuffleCards }) {
    return (
        <div
            className="card"
            onClick={(e) => {
                clickHandle(e);
                shuffleCards();
            }}
            id={id}
        >
            <div className="card-img">
                <img src={src} alt="" />
            </div>
            <div className="card-title">
                <h2 className="card-name">{name}</h2>
            </div>
        </div>
    );
}

export default Card;
