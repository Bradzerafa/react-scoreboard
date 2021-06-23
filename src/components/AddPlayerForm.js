import React from 'react';

class AddPlayerForm extends React.Component{
    state={
        playerName: ""
    }

 saveInput = (e) => {
    this.setState({playerName: e.target.value})
    }
 

    addNewPlayer = (e) => {
        e.preventDefault();
        if (this.state.playerName != ""){
        this.props.addNewPlayer(this.state.playerName);
        this.setState({playerName: ''});
       } else {
           console.log("Please type a name")
       }
        
       
      }

render() {
    return (
        <form onSubmit={this.addNewPlayer}>
            <input type="text" placeholder="Enter a player's name" value={this.state.playerName} onChange={this.saveInput} />
            <input type="submit" value="Add Player"  />
        </form>
    )
    }
}

export default AddPlayerForm;