

function MovieCard(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>Year: {props.year}</p>
      <p>Genre: {props.genre}</p>
    </div>
  );
}

export default MovieCard;