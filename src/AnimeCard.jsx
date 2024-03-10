export default function AnimeCard({ anime }) {
    return (
        <div className="anime">
            <div>
                <p>{anime.year}</p>
            </div>
            <div>
                <img src={anime.images.jpg.image_url} alt={anime.title} />
            </div>
            <div>
                <span>{anime.type}</span>
                <h3>{anime.title}</h3>
            </div>
        </div>
    );
}
