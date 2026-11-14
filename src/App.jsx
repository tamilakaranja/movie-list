import MovieCard from "./components/MovieCard";

function App() {
  return (
    <div>
      <h1>Movie List</h1>

      <MovieCard title="The Conjuring" year={2013} genre="Horror" />

      <MovieCard title="Scream" year={1996} genre="Slasher" />
 <MovieCard title="Insidious" year={2010} genre="Supernatural" />
      <MovieCard title= "The Black Phone" year={2021} genre="Thriller"/>
    </div>
  );
}

export default App;