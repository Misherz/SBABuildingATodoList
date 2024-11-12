import React from "react";
import { useState } from "react";
import { getData } from "../data.mjs";


export default function AddButton() {
    const [formData, setFormData] = useState('');
    const [pokemon, setPokemons] = useState([]);

    getData()

    function handleChange(e) {
        setFormData(e.target.value);
    }

    function addPokemon(e) {
        try {
            e.preventDefault();
            if (formData.trim()) {
                const pokemonName = `${formData}`;
                setPokemons(prevPokemon => [
                    { id: Date.now(), name: pokemonName }
                ]);
                setFormData("");
            }
        } catch (err) {
            console.error(err)
        }

    }

    function editButton(id) {

        const editPokemon = pokemon.find(poke => poke.id === id);

        editPokemon ? (setFormData(editPokemon.name), setPokemons(pokemon.filter(poke => poke.id !== id))): console.error(err)
    }

    function deleteButton(id) {
        setPokemons(pokemon.filter(poke => poke.id !== id));
    }

    return (
        <div>
            <form>
                <input
                    onChange={handleChange}
                    placeholder="Add Pokemon to Captured List"
                    value={formData}
                />
                <button onClick={addPokemon}>
                    <span>Add</span>
                </button>
            </form>

            <div>
                <ul>
                    {pokemon.map((poke) => (
                        <p key={poke.id}>
                            <input type="checkbox" /> {poke.name}
                            <button onClick={() => editButton(poke.id)}>Edit</button>
                            <button onClick={() => deleteButton(poke.id)}>Delete</button>
                        </p>
                    ))}
                </ul>
            </div>
        </div>
    );
}