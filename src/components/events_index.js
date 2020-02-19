import React, {Component} from 'react';
import _ from 'lodash';
import { connect } from 'react-redux'
import { readEvents } from '../actions'
import { Link } from 'react-router-dom';


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
      <React.Fragment>
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
        <Link to="/events/new">New</Link>
      </React.Fragment>
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