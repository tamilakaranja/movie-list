import { useState } from "react";
import MovieList from "./components/MovieList";
import initialMovies from "./data/movies";
import AddMovie from "./components/AddMovie";

function App() {
  const [movies, setMovies] = useState(initialMovies);

  function handleAddMovie(newMovie) {
    setMovies([...movies, newMovie]);
  }

  function handleDeleteMovie(id) {
    setMovies(movies.filter((movie) => movie.id !== id));
  }

  return (
    <div>
      <h1>Movie List</h1>

      <AddMovie onAddMovie={handleAddMovie} />

      <MovieList
        movies={movies}
        onDeleteMovie={handleDeleteMovie}
      />
    </div>
  );
}

export default App;