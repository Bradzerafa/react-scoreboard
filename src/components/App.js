import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';



class App extends React.Component{
  state = {
    players:[
      {
    name: "Brad",
    score: 0,
    id: 1
  },
  {
    name: "Bread",
    score: 0,
    id: 2
  },
  {
    name: "Brod",
    score: 0,
    id: 3
  },
  {
    name: "Brid",
    score: 0,
    id: 4
  }
    ]
  }

  prevPlayerId = 4;


  handleRemovePlayer = (id) => {
   this.setState ( prevState => {
     return {
      players: prevState.players.filter(p => p.id !== id)
     }
   });
  }


 handleScoreChange = (index, delta) => {
   if (delta == -1 && this.state.players[index].score == 0) {
    console.log("You can not go below 0")
   } else {
    this.setState( prevState => ({
      score:  prevState.players[index].score += delta
    }))
   }
  }

  
 addNewPlayer = (e) => {
   this.setState( prevState => {
     return {
      players: [
        ...prevState.players,
        {
          name: e, 
          score: 0,
          id: this.prevPlayerId += 1
        }
      ]
     }  
    })
 }


  render() {
    return (
    <div className="scoreboard">
      <Header title="Scoreboard"   players={this.state.players} />

      {/* Player List */}
    
    {this.state.players.map( (player , index) => 
      <Player key={player.id} name={player.name} id={player.id} removePlayer={this.handleRemovePlayer} handleScore={this.handleScoreChange} index={index} score={player.score} /> 
    )}

      <AddPlayerForm addNewPlayer={this.addNewPlayer}/>
    </div>
  );
  }

}

export default App;
