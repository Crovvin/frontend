import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import "../styles/pokemon.css"

function Pokemon(){
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getPokemon(){
        try {
          const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1025");
          setPokemon(res.data.results);
        } catch (error) {
          console.error("Error getting Pokémon:", error.message);
        }
      };
      getPokemon();
    }, []);

    const filteredPokemon = pokemon.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="pokemonContainer">
      <h2 className="pokemonTitle">Pokémon List</h2>

      <input
        type="text"
        placeholder="Search Pokémon..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="pokemonSearchBar"
        />

      <div className="pokemonMap">
        {filteredPokemon.map((p) => {
            const pokemonId = p.url.split("/").filter(Boolean).pop();
            return(
                <div key={pokemonId} className="pokemonCard">
                    <Link to={`/pokemon/${p.name}`}>
                        <h3 className="pokemonName">{p.name}</h3>
                        <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
                        alt={p.name}
                        className="pokemonSprite"
                        />
                    </Link>
                </div>
            );
        })}
      </div>
    </div>
  );
};

export default Pokemon;