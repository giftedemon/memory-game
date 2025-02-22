import "../styles/card.css";

function Card({ name, src, id }) {
    return (
        <div className="card">
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
