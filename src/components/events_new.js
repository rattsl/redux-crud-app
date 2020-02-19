import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
//import { postEvent } from '../actions';


class EventsNew extends Component {
  render() {
    return (
      <React.Fragment>
        <div>foo</div>
      </React.Fragment>
    )
  }
}

// const mapDispatchToProps = ({postEvent})

//stateとactionをコンポーネントに関連付ける実装
export default connect(null, null)(EventsNew)
