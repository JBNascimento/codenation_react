import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Select from './components/Select';



class App extends React.Component {

constructor(){
  super();
  this.state = {
    name : "Jeff"
  }
  console.log("Constructor")
}


componentDidMount(){
  console.log("did mount");
  setTimeout(() => {
    this.setState({
      name : "Javascript"
    })
  }, 3000)
}

componentDidUpdate() {
  console.log("did update");
}



 render(){
  console.log("Render", this.state.name)
  return (
    <div className="App">
      <header className="App-header">

        <Button name="Todos" />
        <Button name="Vivo"/>
        <Button name="Morto" />
        <Button name="Desconhecido" />

        <Select options={[1,2,3,4,5,6,7,8,9]}/>

      </header>
    </div>
  );
 }
}

export default App;
