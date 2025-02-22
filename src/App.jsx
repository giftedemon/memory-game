import { useState, useEffect, use } from "react";
import CardList from "./components/CardList";
import Score from "./components/Score";

function App() {
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [prevClicked, setPrevClicked] = useState({});
    const [gameOver, setGameOver] = useState(false);

    function scoreHandler(e) {
        if (!(e.target.id in prevClicked)) {
            setPrevClicked((prev) => ({ ...prev, [e.target.id]: "clicked" }));
            setCurrentScore((prev) => prev + 1);
        } else {
            setGameOver(true);
        }
    }

    function isBestScore() {}

    return (
        <main>
            <div className="memory-info">
                <h1>Memory Game</h1>
                <Score currentScore={currentScore} bestScore={bestScore}></Score>
            </div>
            <CardList clickHandle={scoreHandler}></CardList>
        </main>
    );
}

export default App;
