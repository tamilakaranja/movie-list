const movies = [
  { id: 1, title: "Black Panther", year: 2018 },
  { id: 2, title: "The Lion King", year: 1994 },
  { id: 3, title: "Inception", year: 2010 },
];

export default function App() {
  return (
    <div className="app">
      <h1>My Movie List</h1>
      <ul>
        {movies.map((m) => (
          <li key={m.id}>
            {m.title} ({m.year})
          </li>
        ))}
      </ul>
    </div>
  );
}