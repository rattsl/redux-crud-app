import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
//import { postEvent } from '../actions';
import { Field, reduxForm } from 'redux-form';


class EventsNew extends Component {
renderField(field){
  const { input, type, meta: { touched, error } } = field

  return (<div></div>)
}

  render() {
    return (
      <form>
          <div>
            <Field label="Title" name="title" type="text" component={this.renderField} />
          </div>
          <div>
            <Field label="Body" name="body" type="text" component={this.renderField} />
          </div>
          <div>
            <input type="submit" value="Submit" disabled={false}/>
            <Link to="/">Cancel</Link>
          </div>
      </form>
    )
  }
}


const validate = values => {
  const errors = {}
  return errors
}
// const mapDispatchToProps = ({postEvent})

//stateとactionをコンポーネントに関連付ける実装
export default connect(null, null)(
  reduxForm({ validate, form: 'eventNewForm'})(EventsNew)
  )
