import React from 'react';
import Pokemon from './Pokemon';


export default class PokemonList extends React.Component {
  render (){
    const { pokemonList } = this.props;
    return (
      <section>
      { pokemonList.map((pokemon) => {
        return <Pokemon key={ pokemon.id } pokemonInfo= { pokemon } />
  }) }
        </section>
    );
  }

}