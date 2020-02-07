import React, {Component} from 'react';
import Card from './card';
import AddCustomer from './AddCustomer';

class App extends Component{
  state = {
    cards : [
      {'name':'Mmaduabuchi', 'expiry': '01/01/2025', 'bank': 'Nwere People', 'id':1},
      {'name':'Chris', 'expiry': '01/02/2025', 'bank': 'Ekelem Unu', 'id':2},
      {'name':'Mbachi', 'expiry': '01/03/2025', 'bank': 'Ndi Ara', 'id':3},
    ]
  }
  addCard = (cerd) =>{
    cerd.id = Math.random() * 10;
    let cerds = [...this.state.cards, cerd]
    this.setState({
      cards: cerds
    })
  }
render(){
  return (
    <div className="App">
      <h1>I'm Reacting People</h1>
      <p>Welcome to my reactions :)</p>
      <Card cards ={this.state.cards}/>
      <AddCustomer addCusCard = {this.addCard}/>
    </div>
  );
}
}
export default App;
