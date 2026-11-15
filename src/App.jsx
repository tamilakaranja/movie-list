import { useState } from "react";
import MovieList from "./components/MovieList";
import initialMovies from "./data/movies";
import AddMovie from "./components/AddMovie";

function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [searchTerm, setSearchTerm] = useState("");

  function handleAddMovie(newMovie) {
    setMovies([...movies, newMovie]);
  }

  function handleDeleteMovie(id) {
    setMovies(movies.filter((movie) => movie.id !== id));
  }
const filteredMovies = movies.filter((movie) =>
  movie.title.toLowerCase().includes(searchTerm.toLowerCase())
);
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Movie List</h1>

      <AddMovie onAddMovie={handleAddMovie} />
<input
  type="text"
  placeholder="Search movies..."
  value={searchTerm}
  onChange={(event) => setSearchTerm(event.target.value)}
  className="w-full max-w-xl mx-auto block mb-6 p-3 rounded-lg bg-slate-800 text-white border border-slate-700"
/>
      <MovieList
        movies={filteredMovies}
        onDeleteMovie={handleDeleteMovie}
      />
    </div>
  );
}

export default App;