import { useState } from "react";

function AddMovie({ onAddMovie }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const newMovie = {
      id: Date.now(),
      title: title,
      year: Number(year),
      genre: genre
    };

    onAddMovie(newMovie);

    setTitle("");
    setYear("");
    setGenre("");
  }

  return (
    <div>
      <h2>Add a Movie</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Movie title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input
          type="number"
          placeholder="Release year"
          value={year}
          onChange={(event) => setYear(event.target.value)}
        />

        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(event) => setGenre(event.target.value)}
        />

        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;