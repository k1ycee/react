import React, {Component} from 'react';
import Card from './card';

class App extends Component{
render(){
  return (
    <div className="App">
      <h1>I'm Reacting People</h1>
      <p>Welcome to my reactions :)</p>
      <Card />
    </div>
  );
}
}
export default App;
