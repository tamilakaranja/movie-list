function MovieCard({ id, title, year, genre, onDeleteMovie }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>

      <button onClick={() => onDeleteMovie(id)}>
        Delete
      </button>
    </div>
  );
}

export default MovieCard;