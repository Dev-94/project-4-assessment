import React, { Component } from 'react';
import Circles from './components/Circles/Circles';
import CircleSelector from './components/CircleSelector/CircleSelector';
import './App.css';



class App extends Component {
  state = {
    selected: '1',
  }


  changeSelection = (newSelection) => {
    this.setState({
      selected: newSelection
    })

  }



  // handleShowForm = event => {
  //   this.setState({
  //     isShowing: !this.state.isShowing
  //   })
  // }

  render() {
    return (
      <div className="App">

        <CircleSelector
          selected={this.state.selected}
          onClick={this.changeSelection} />
        <Circles
          selected={this.state.selected} />
        />

      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
