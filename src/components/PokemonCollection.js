import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {this.props.pokemonList.map(pokemon => < PokemonCard key={pokemon.id} pokemon={pokemon} toggleDisplay={this.props.toggleDisplay} displayFront={this.props.displayFront}/>)}
      </Card.Group>
    )
  }
}

export default PokemonCollection
