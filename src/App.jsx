import { useFetch } from './hooks/useFetch';
import './App.css';

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';

  // Usamos el mismo hook para dos cosas distintas
  const { data: pokemon, loading: loadPk } = useFetch(urlPokemon);
  const { data: rick, loading: loadRick } = useFetch(urlRick);

  return (
    <div className="App">
      <h1>Custom Hooks Practice</h1>

      {/* Sección Pokémon */}
      <section>
        <h2>Personaje Pokemon</h2>
        {loadPk ? <p>Cargando...</p> : (
          <>
            <p>{pokemon?.name.toUpperCase()}</p>
            <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
          </>
        )}
      </section>

      <hr />

      {/* Sección Rick and Morty */}
      <section>
        <h2>Personaje Rick and Morty</h2>
        {loadRick ? <p>Cargando...</p> : (
          <>
            <p>{rick?.name}</p>
            <img src={rick?.image} alt={rick?.name} />
          </>
        )}
      </section>
    </div>
  );
}

export default App;