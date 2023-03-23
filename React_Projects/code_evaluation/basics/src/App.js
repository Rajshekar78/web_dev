import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css';
// import { Greet } from './components/greet'
import Greet from './components/5greet'
// import Welcome from './components/6welcome'
// import { Component } from 'react'
// import Hello from './components/8hello'

// function App() {
//   return (
//     <div className="App">
//       <Greet />
        
//     </div>
//   );
// } 

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Greet name = "Raj" copy ="one">
          <p>nice to meet you</p>
        </Greet>
        <Greet name ="shekar" copy = "two"/>
        <Greet name ="reddy" copy = "three"/>

      </div>
    )
  
}
}

export default App;
