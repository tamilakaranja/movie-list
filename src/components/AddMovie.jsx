import { useState } from "react";

function AddMovie() {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");

  return (
    <div>
      <h2>Add a Movie</h2>

      <form>
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