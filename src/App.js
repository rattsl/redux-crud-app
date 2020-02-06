import React, {Component} from 'react';

class App extends Component {
  render() {
    // const bar = "maxamo!"
    // const dom = <h1>{bar}</h1>

    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={() => {console.log("I am clicked!")}}/>
      </React.Fragment>
    )
  }
}

export default App;
