import Card from "./Card";
import { useState, useEffect } from "react";
import "../styles/cardlist.css";
import Loading from "./Loading";

function CardList({ clickHandle }) {
    const [animes, setAnimes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://api.jikan.moe/v4/people/1870/full");
            const data = await response.json();

            setAnimes(data.data.anime.slice(0, 12));
            setLoading(false);
        }
        getData();
    }, []);

    function shuffleCards() {
        const newArray = animes;
        let currentIndex = newArray.length;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {
            // Pick a remaining element...
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [newArray[currentIndex], newArray[randomIndex]] = [
                newArray[randomIndex],
                newArray[currentIndex],
            ];
        }

        setAnimes(newArray);
    }

    return loading ? (
        <Loading></Loading>
    ) : (
        <div className="card-list">
            {animes.map((el) => {
                return (
                    <Card
                        key={el.anime.mal_id}
                        name={el.anime.title}
                        src={el.anime.images.jpg.large_image_url}
                        id={el.anime.mal_id}
                        clickHandle={clickHandle}
                        shuffleCards={shuffleCards}
                    ></Card>
                );
            })}
        </div>
    );
}

export default CardList;
