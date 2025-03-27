import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/favorites.css"

function Favorites(){
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    async function getFavorites(){
      const token = localStorage.getItem("token");
      const username = localStorage.getItem("username");
      const res = await axios.get(`http://localhost:4000/api/user/${username}/favorites`, {
        headers: { Authorization: token },
      });
      console.log("API Response:", res.data)
      setFavorites(res.data || []);
    };
    getFavorites();
  }, []);

  async function removeFromFavorites(pokemonName, pokemon_id){
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    try {
      // Send a request to the backend to remove the pokemon
      const res = await axios.delete(`http://localhost:4000/api/user/${username}/favorites/${pokemonName}`, {
        headers: { Authorization: token },
        data: { pokemon_id }, // Sending the name of the pokemon to be removed
      });
      // Update the favorites list in the frontend
      setFavorites(favorites.filter((pokemon) => pokemon.name !== pokemonName));
      console.log("Removed pokemon from favorites:", res.data);
    } catch (error) {
      console.error("Error removing pokemon from favorites:", error.message);
    }
  }

  return (
    <div className="favoritesContainer">
      <h2>My Favorite Pokémon</h2>
      {favorites.length === 0 ? (
        <p className="empty">No favorites found</p>
      ) : (
        <ul className= "favorites">
          {favorites.map((pokemon, index) => (
            <li key={pokemon._id}>
                <img src={pokemon.image} alt={pokemon.name} />
                {pokemon.name} - {pokemon.type.join(", ")}
                <button onClick={() => removeFromFavorites(pokemon.name, pokemon._id)}>Remove from Favorites</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites