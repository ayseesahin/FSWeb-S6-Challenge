import Film from "./Film";

function Films(props) {
  const { chr, i, films } = props;
  return (
    <h2>
      <p>
        {films
          .filter((film) => chr.films.includes(film.title))
          .map((film, i) => {
            return <Film film={film} i={i} />;
          })}
      </p>
    </h2>
  );
}

export default Films;
