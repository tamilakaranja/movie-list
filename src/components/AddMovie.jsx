function AddMovie() {
  return (
    <div>
      <h2>Add a Movie</h2>

      <form>
        <input
          type="text"
          placeholder="Movie title"
        />

        <input
          type="number"
          placeholder="Release year"
        />

        <input
          type="text"
          placeholder="Genre"
        />

        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;