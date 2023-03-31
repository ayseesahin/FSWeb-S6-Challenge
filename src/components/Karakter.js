// Karakter bileşeniniz buraya gelecek
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import Accordeon from "./Accordeon";
import Filmler from "./Filmler";

function Karakterler(data) {
  const [starData, setStarData] = useState();
  const [starFilms, setStarFilms] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const starPromis = axios("https://swapi.dev/api/people/");
    const filmPromis = axios("https://swapi.dev/api/films/");
    const promise3 = new Promise((resolve, reject) => {
      setTimeout(resolve, 1000, "foo");
    });

    Promise.all([starPromis, filmPromis, promise3]).then((values) => {
      console.log(values);
      setStarData(values[0].data);
      setStarFilms(values[1].data[0].results);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading && <h2>Yükleniyor...</h2>}
      {loading &&
        starData.map((character, i) => {
          return (
            <Accordeon key={"c" + i} title={character.name}>
              <p>
                <span>Height: </span>
                {character.height}
              </p>
              <p>
                <span>Mass: </span>
                {character.mass}
              </p>
              <p>
                <span>Gender: </span>
                {character.gender}
              </p>
              <p>
                <span>Eye Color: </span>
                {character.eye_color}
              </p>
              <p>
                <span>Hair Color: </span>
                {character.hair_color}
              </p>
              <p>
                <span>Birth Year: </span>
                {character.birth_year}
              </p>
              <p>
                <span>Skin Color: </span>
                {character.skin_color}
              </p>
              <p>
                <span>Appears in: </span>
              </p>
              <Filmler starData={starData} i={i} starFilms={starFilms} />
            </Accordeon>
          );
        })}
    </div>
  );
}

export default Karakterler;
