import { useState, useEffect } from "react";
import CardList from "./components/CardList";

function App() {
    const [loading, setLoading] = useState(true);

    return (
        <main>
            <h1>Memory Game</h1>
            <CardList></CardList>
        </main>
    );
}

export default App;
