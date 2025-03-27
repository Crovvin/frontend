import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

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
    <div className="grid grid-cols-4 gap-4">
      <h2 className="text-2xl font-bold mb-4">Pokémon List</h2>

      <input
        type="text"
        placeholder="Search Pokémon..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded-lg mb-4 w-full"
        />

      <div className="grid grid-cols-4 gap-4">
        {filteredPokemon.map((p) => {
            const pokemonId = p.url.split("/").filter(Boolean).pop();
            return(
                <div key={pokemonId} className="p-4 border rounded-lg">
                    <Link to={`/pokemon/${p.name}`}>
                        <h3 className="text-lg font-bold capitalize">{p.name}</h3>
                        <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
                        alt={p.name}
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