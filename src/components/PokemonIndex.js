import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemonList: [],
    searchTerm: ""
  }

  updateSearchTerm = event =>{
    this.setState({
      searchTerm: event.target.value
    })
  }

  filterPokemon = () => {
    return this.state.pokemonList.filter(pokemon => 
      pokemon.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }

  handleSubmit = (e, newPokemon) => {
    e.preventDefault()

    const bodyObj = {
      name: newPokemon.name,
      stats: [{value: newPokemon.hp,
                name: "hp"}],
      sprites: { front: newPokemon.frontUrl,
                 back: newPokemon.backUrl}
    }

    
    fetch('http://localhost:3000/pokemon/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify(bodyObj)
    })
    .then(resp => resp.json())
    .then(pokemon => this.setState({
      pokemonList: [...this.state.pokemonList, pokemon]
    }))
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(pokemons => {this.setState({
      pokemonList: pokemons
    })})
  }

  render() {
    const filteredPokemonList = this.filterPokemon()
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleSubmit={this.handleSubmit}/>
        <br />
        <Search onChange={() => console.log('🤔')} updateSearchTerm={this.updateSearchTerm}/>
        <br />
        <PokemonCollection pokemonList={filteredPokemonList} toggleDisplay={this.toggleDisplay} displayFront={this.state.displayFront}/>
      </Container>
    )
  }
}

export default PokemonPage
