import "../styles/gameover.css";

function GameOver({ currentScore, clickHandle, gameOver }) {
    return (
        <div className="modal-overlay" style={{ display: gameOver ? "grid" : "none" }}>
            <div className="game-over">
                <div className="game-over__text">
                    <h2>Game Over!</h2>
                    <p>Your current score is {currentScore}</p>
                </div>
                <button onClick={clickHandle}>New Game</button>
            </div>
        </div>
    );
}

export default GameOver;
