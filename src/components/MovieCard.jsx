function MovieCard({ id, title, year, genre, onDeleteMovie }) {
  return (
    <div className="bg-slate-800 p-5 rounded-xl shadow-lg border border-slate-700 hover:border-blue-500 transition m-4">
      <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
      <p className="text-slate-300 mb-4">Year: {year}</p>
      <p>Genre: {genre}</p>

      <button onClick={() => onDeleteMovie(id)} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition">
        Delete
      </button>
    </div>
  );
}

export default MovieCard;