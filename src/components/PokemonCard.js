import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    displayFront: true
  }

  toggleDisplay = () => {
    this.setState({
      displayFront: !this.state.displayFront
    })
  }

  render() {
    const hp = this.props.pokemon.stats.find(stat => stat.name === "hp")
    return (
      <Card>
        
        <div onClick={this.toggleDisplay}>
          <div className="image">
            {this.state.displayFront
            ? <img src={this.props.pokemon.sprites.front} alt="oh no!" />
            : <img src={this.props.pokemon.sprites.back} alt="oh no!" />
  }
          </div>
          <div className="content">
    <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp.value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
