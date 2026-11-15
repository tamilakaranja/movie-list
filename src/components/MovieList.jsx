import MovieCard from "./MovieCard";

function MovieList({ movies, onDeleteMovie }) {
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          year={movie.year}
          genre={movie.genre}
          id={movie.id}
          onDeleteMovie={onDeleteMovie}
        />
      ))}
    </div>
  );
}

export default MovieList;