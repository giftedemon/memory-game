import Card from "./Card";
import { useState, useEffect } from "react";
import "../styles/cardlist.css";

function CardList() {
    const [animes, setAnimes] = useState([]);
    console.log(animes);

    useEffect(() => {
        async function loadImgs() {
            const response = await fetch("https://api.jikan.moe/v4/people/1870/full");
            const data = await response.json();
            setAnimes(data.data.anime.slice(0, 12));
        }
        loadImgs();
    }, []);

    return (
        <div className="card-list">
            {animes.map((el) => {
                return (
                    <Card
                        key={el.anime.mal_id}
                        name={el.anime.title}
                        src={el.anime.images.jpg.large_image_url}
                        id={el.anime.mal_id}
                    ></Card>
                );
            })}
        </div>
    );
}

export default CardList;
