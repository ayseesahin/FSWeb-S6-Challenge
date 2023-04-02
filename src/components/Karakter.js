// Karakter bileşeniniz buraya gelecek
import { useEffect, useState } from "react";
import axios from "axios";
import Filmler from "./Filmler";
import Accordeon from "./Accordeon";

function Karakter(data) {
  const [characters, setcharacters] = useState([]);
  const [films, setfilms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const charPromis = axios("https://swapi.dev/api/people/");
    const filmPromis = axios("https://swapi.dev/api/films/");
    const promise3 = new Promise((resolve, reject) => {
      setTimeout(resolve, 1000, "foo");
    });

    Promise.all([charPromis, filmPromis, promise3]).then((values) => {
      console.log(values);
      setcharacters(values[0].data);
      setfilms(values[1].data[0].results);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {/* {loading && <h2>Loading...</h2>}
      {!loading && */}
      {loading ? (
        <h2>Yükleniyor...</h2>
      ) : (
        characters.map((chr, i) => {
          return (
            <Accordeon key={"c" + i} title={chr.name}>
              <p>
                <span>Height: </span>
                {chr.height}
              </p>
              <p>
                <span>Mass: </span>
                {chr.mass}
              </p>
              <p>
                <span>Gender: </span>
                {chr.gender}
              </p>
              <p>
                <span>Eye Color: </span>
                {chr.eye_color}
              </p>
              <p>
                <span>Hair Color: </span>
                {chr.hair_color}
              </p>
              <p>
                <span>Birth Year: </span>
                {chr.birth_year}
              </p>
              <p>
                <span>Skin Color: </span>
                {chr.skin_color}
              </p>
              <p>
                <span>Appears in {chr.films.length} films </span>
              </p>
              <Filmler chr={chr} i={i} films={films} />
            </Accordeon>
          );
        })
      )}
    </div>
  );
}

export default Karakter;
