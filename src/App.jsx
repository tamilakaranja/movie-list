import MovieCard from "./components/MovieCard";
import movies from "./data/movies"

function App() {
  return (
    <div>
      <h1>Movie List</h1>

      {movies.map((movie) => (
        <MovieCard 
        key= {movie.id}
        title={movie.title}
        year={movie.year}
        genre={movie.genre}
         />
  
  ))}
   </div>
);
}

export default App;