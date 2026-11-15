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
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Movie List</h1>

      <AddMovie onAddMovie={handleAddMovie} />

      <MovieList
        movies={movies}
        onDeleteMovie={handleDeleteMovie}
      />
    </div>
  );
}

export default App;