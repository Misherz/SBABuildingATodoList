import { useState } from "react";
import { getData } from "../data.mjs";

export default function AddButton() {
    const [formData, setFormData] = useState('');
    const [pokemon, setPokemons] = useState([]);

    getData()

    function handleChange(e) {
        const newValue = e.target.value;
        setFormData(newValue);
    }

    function addPokemon(e) {
        e.preventDefault();
        if (formData.trim()) {
            setPokemons(prevPokemon => {
                return [...prevPokemon, formData];
            });
            setFormData("");
        }
    }


    return (
        <div>
            <form>
                <input onChange={handleChange} placeholder="Add Pokemon to Captured List" value={formData} />
                <button onClick={addPokemon}>
                    <span>Add</span>
                </button>
            </form>
            <div>
                <ul>
                    {pokemon.map((pokemonName, i) => (
                        <li key={i}>{pokemonName}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}