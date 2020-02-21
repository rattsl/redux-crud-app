import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { getEvent, deleteEvent, putEvent } from '../actions';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';




class EventsShow extends Component {

  constructor(props){
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.onDeleteClick = this.onDeleteClick.bind(this)
  }

  componentDidMount(){
    const {id} = this.props.match.params
    if(id) this.props.getEvent(id) 
  }

  renderField(field){
    const { input, label, type, meta: { touched, error } } = field

    return (
      <TextField id="standard-basic" label={label} type={type} error={touched && error} helperText={touched && error} {...input}/>
    )
  }

  async onDeleteClick(){
    const {id} = this.props.match.params
    await this.props.deleteEvent(id)
    this.props.history.push("/")

  }

  async onSubmit(values){
    await this.props.putEvent(values)
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
          <Link to="/" onClick={this.onDeleteClick}>
            <Button variant="contained" color="secondary" style={style}>
              Delete
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


const mapStateToProps = (state, ownProps) => {
  const event = state.events[ownProps.match.params.id]
  return { initialValues: event, event }
}
const mapDispatchToProps = ({deleteEvent, getEvent, putEvent})

//stateとactionをコンポーネントに関連付ける実装
export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventShowForm', enableReinitialize: true })(EventsShow)
  )
