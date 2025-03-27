import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import "../styles/Details.css"

function Details(){
    const { name } = useParams();
    const [pokemon, setPokemon] = useState(null);
  
    useEffect(() => {
      async function getInfo(){
        try {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
          setPokemon(response.data);
        } catch (error) {
          console.error("Error getting Pokémon information:", error);
        }
      };
  
      getInfo();
    }, [name]);
  
    async function favorite(){
      const token = localStorage.getItem("token");
      const username = localStorage.getItem("username");
  
      try {
        const response = await axios.post(
          `http://localhost:4000/api/user/${username}/favorites/${name}`,
          { pokemonName: name },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        alert(`${name} added to favorites!`);
      } catch (error) {
        alert("Failed to add pokemon to favorites");
      }
    };
  
    if (!pokemon) return <p>Loading...</p>;
  
    return (
      <div className="detailsContainer">
        <h1>{pokemon.name}</h1>
        <img 
            src={pokemon.sprites.front_default} 
            alt={pokemon.name} 
            />
        <div className="detailsSection">
            <h2 className="detailsTypes">Types</h2>
            <ul>
                {pokemon.types.map((type, index) => (
                <li key={index}>{type.type.name}</li>))}
            </ul>
        </div>
        <div className="detailsSection">
            <h2 className="detailsTypes">Abilities</h2>
            <ul>
                {pokemon.abilities.map((ability, index) => (
                <li key={index}>{ability.ability.name}</li>
                ))}
            </ul>
        </div>
        <div className="statsSection">
            <h3 className="">Base Stats</h3>
            <ul className="detailsTypes">
            {pokemon.stats.map((stat) => (
                <li key={stat.stat.name} className="">
                <span className="">{stat.stat.name}:</span> {stat.base_stat}
                </li>
            ))}
            </ul>
        </div>
            <button className="favoriteButton" onClick={favorite}>Add to Favorites</button>
      </div>
    );
};

export default Details;