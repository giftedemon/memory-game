import "../styles/score.css";

function Score({ currentScore, bestScore }) {
    return (
        <div className="scores">
            <p>Current score: {currentScore}</p>
            <p>Best score: {bestScore}</p>
        </div>
    );
}

export default Score;
