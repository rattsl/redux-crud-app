import React, {Component} from 'react';
import _ from 'lodash';

//connectメソッドをreact-reduxライブラリから参照
import { connect } from 'react-redux'

//actionsからincrement,decrementを参照
import { readEvents } from '../actions'


class EventsIndex extends Component {
  componentDidMount(){
    this.props.readEvents()
  }

  renderEvents(){
    return _.map(this.props.events, event => (
      <tr　key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }

  render() {
    return (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
              </tr>
            </thead>
            <tbody>
              {this.renderEvents()}
            </tbody>
          </table>
    )
  }
}

//stateの状態から必要なコンポーネントを取り出して、コンポーネント内のpropsにマッピングする
const mapStateToProps = state => ({
  events: state.events
})

const mapDispatchToProps = ({readEvents})

//stateとactionをコンポーネントに関連付ける実装
export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
