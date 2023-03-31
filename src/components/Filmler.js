import Accordeon from "./Accordeon";

function Filmler(props) {
  const { film, i } = props;
  return (
    <div>
      <Accordeon title={film.title}>
        <div key={"f" + i}>
          {film.title} {film.director}
          <p>Title: {film.title}</p>
          <p>Director: {film.director}</p>
          <p>Producer: {film.producer}</p>
          <p>Release Date: {film.release_date}</p>
        </div>
      </Accordeon>
    </div>
  );
}

export default Filmler;
