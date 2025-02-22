import { useState, useEffect, use } from "react";
import CardList from "./components/CardList";
import Score from "./components/Score";
import GameOver from "./components/GameOver";

function App() {
    const [scores, setScores] = useState({
        currentScore: 0,
        bestScore: 0,
    });
    const [prevClicked, setPrevClicked] = useState({});
    const [gameOver, setGameOver] = useState(false);

    function scoreHandler(e) {
        if (!(e.target.id in prevClicked)) {
            setPrevClicked((prev) => ({ ...prev, [e.target.id]: "clicked" }));

            const curScore = scores.currentScore + 1;
            let bestScore = scores.bestScore;

            if (isBestScore(curScore, bestScore)) {
                bestScore = curScore;
            }

            setScores({ currentScore: curScore, bestScore: bestScore });
        } else {
            setGameOver(true);
        }
    }

    function startNewGame() {
        setScores((prev) => ({ ...prev, currentScore: 0 }));
        setPrevClicked({});
        setGameOver(false);
    }

    function isBestScore(current, best) {
        return current > best;
    }

    return (
        <main>
            <div className="memory-info">
                <h1>Memory Game</h1>
                <Score currentScore={scores.currentScore} bestScore={scores.bestScore}></Score>
            </div>
            <CardList clickHandle={scoreHandler}></CardList>
            <GameOver
                gameOver={gameOver}
                clickHandle={startNewGame}
                currentScore={scores.currentScore}
            ></GameOver>
        </main>
    );
}

export default App;
