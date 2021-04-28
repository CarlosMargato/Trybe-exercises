import React from 'react';

export default class Pokemon extends React.Component {
  render() {
    const { pokemonInfo } = this.props
    return (
      <section>
      <h2>Nome: { pokemonInfo.name }</h2>
      <h4>Tipo: { pokemonInfo.type }</h4>
      <p>Peso: { pokemonInfo.averageWeight.value + 
          pokemonInfo.averageWeight.measurementUnit }</p>
      <img src={ pokemonInfo.image } alt= { pokemonInfo.name }/>
      </section>
    );
  }
}
