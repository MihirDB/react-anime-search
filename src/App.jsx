import { useEffect, useState } from "react";
import "./app.css";
import SearchIcon from "./search.svg";
import AnimeCard from "./AnimeCard";

function App() {
    const [animes, setAnimes] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const searchAnime = async (title) => {
        const response = await fetch(
            `https://api.jikan.moe/v4/anime?q=${title}&sfw`
        );
        const dataResponse = await response.json();
        setAnimes(dataResponse.data);
    };

    useEffect(() => {
        searchAnime("");
    }, []);

    return (
        <div className="app">
            <h1>AniSearch</h1>

            <div className="search">
                <input
                    type="text"
                    placeholder="Search for anime"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => {
                        searchAnime(searchTerm);
                    }}
                />
            </div>

            {animes?.length > 0 ? (
                <div className="container">
                    {animes.map((anime) => (
                        <AnimeCard key={anime.mal_id} anime={anime} />
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No Anime found</h2>
                </div>
            )}
        </div>
    );
}

export default App;
