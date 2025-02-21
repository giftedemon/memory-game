import "../styles/card.css";

function Card({ name, src, id }) {
    return (
        <div className="card">
            <div className="card-img">
                <img src={src} alt="" />
            </div>
            <h2 className="card-name">{name}</h2>
        </div>
    );
}

export default Card;
