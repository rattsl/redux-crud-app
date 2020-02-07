import React, {Component} from 'react';

//connectメソッドをreact-reduxライブラリから参照
import { connect } from 'react-redux'

//actionsからincrement,decrementを参照
import { increment, decrement } from '../actions'


class App extends Component {
  render() {
    const props = this.props
    return (
      <React.Fragment>
        <div>value: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    )
  }
}

//stateの状態から必要なコンポーネントを取り出して、コンポーネント内のpropsにマッピングする
const mapStateToProps = state => ({
  value: state.count.value
})

//incrementとdecrementを該当のアクションをdispatchに渡して実行することで状態遷移を行う。
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})


//stateとactionをコンポーネントに関連付ける実装
export default connect(mapStateToProps, mapDispatchToProps)(App)
