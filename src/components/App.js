import React, {Component} from 'react';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props){
    super(props)
    this.state = {count: 0}
  }
  
  plusButton = () => {
    const currentCount = this.state.count
    this.setState({count: currentCount + 1})
  }
  minusButton = () => {
    const currentCount = this.state.count
    this.setState({count: currentCount - 1})
  }
  

  render(){
    console.log(this.state)
    return (
      <React.Fragment>
        <div>counter: {this.state.count}</div>
        <button onClick={this.plusButton}>+1</button>
        <button onClick={this.minusButton}>-1</button>
      </React.Fragment>
    )
  }


}

export default App;
