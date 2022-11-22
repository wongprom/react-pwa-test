import { useEffect, useState } from "react";
import { getAllPokemonList } from "./api/pokemon";
import logo from "./logo.svg";
// import './App.css';

function App() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getAllPokemonList();
      setPokemonData(data?.results);
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className="mt-50 flex justify-around flex-wrap w-11/12 m-auto">
        {pokemonData?.map((poke, i) => {
          return (
            <div key={i} className="w-[400px] h-[330px] border my-8 mx-2">
              <div className="p-2">
                <p className="font-bold capitalize">{poke.name}</p>
              </div>
              <img
                className="h-[300px] w-[300px]"
                alt="pokemon"
                src={`https://img.pokemondb.net/artwork/large/${poke.name}.jpg`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
