import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { postEvent } from '../actions';
import { Field, reduxForm } from 'redux-form';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';




class EventsNew extends Component {

  constructor(props){
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  renderField(field){
    const { input, label, type, meta: { touched, error } } = field

    return (
      <TextField id="standard-basic" label={label} type={type} error={touched && error} helperText={touched && error} {...input}/>
      // <div>
      //   <input {...input} placeholder={label} type={type} />
      //   {touched && error && <span>{error}</span>}
      // </div>
    )
  }

  async onSubmit(values){
    await this.props.postEvent(values)
    this.props.history.push("/")
  }

  render() {

    const {handleSubmit, pristine, submitting, invalid} = this.props
    const style = {
      margin: 12
    }

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
          <div>
            <Field label="Title" name="title" type="text" component={this.renderField} />
          </div>
          <div>
            <Field label="Body" name="body" type="text" component={this.renderField} />
          </div>
          <div>
          <Button variant="contained" color="primary" type="submit" style={style} disabled={pristine || submitting || invalid}>
            Submit
          </Button>
          <Link to="/">
            <Button variant="contained" style={style}>
              Cancel
            </Button>
          </Link>
          </div>
          
      </form>
    )
  }
}


const validate = values => {
  const errors = {}

  if (!values.title) errors.title = "Enter Title, please"
  if (!values.body) errors.body = "Enter Body, please"

  return errors
}
const mapDispatchToProps = ({postEvent})

//stateとactionをコンポーネントに関連付ける実装
export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventNewForm' })(EventsNew)
  )
