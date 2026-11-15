import { useState } from "react";
import MovieCard from "./components/MovieCard";
import initialMovies from "./data/movies";
import AddMovie from "./components/AddMovie";

function App() {
  const [movies, setMovies] = useState(initialMovies);

  function handleAddMovie(newMovie) {
  setMovies([...movies, newMovie]);
}

  return (
    <div>
      <h1>Movie List</h1>

       <AddMovie />

      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          year={movie.year}
          genre={movie.genre}
        />
      ))}
    </div>
  );
}

export default App;