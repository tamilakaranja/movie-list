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
    <div className="bg-slate-800 p-6 rounded-xl shadow-lg mb-8 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-5">Add a Movie</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4"> 
        <input
          type="text"
          placeholder="Movie title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        className="p-3 rounded-lg bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"/>

        <input
          type="number"
          placeholder="Release year"
          value={year}
          onChange={(event) => setYear(event.target.value)}
       className="p-3 rounded-lg bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />

        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(event) => setGenre(event.target.value)}
        className="p-3 rounded-lg bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"/>

        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-lg transition">Add Movie </button>
      </form>
    </div>
  );
}

export default AddMovie;