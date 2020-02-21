import React, {Component} from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { readEvents } from '../actions';
import { Link } from 'react-router-dom';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';



class EventsIndex extends Component {
  componentDidMount(){
    this.props.readEvents()
  }

  renderEvents(){
    return _.map(this.props.events, event => (
      <TableRow　key={event.id}>
        <TableCell>{event.id}</TableCell>
        <TableCell>
          <Link to={`/events/${event.id}`}>
          {event.title}
          </Link>
        </TableCell>
        <TableCell>{event.body}</TableCell>
      </TableRow>
    ))
  }

  render() {

    const style = {
      margin: 12
    }

    return (
      <React.Fragment>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Body</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {this.renderEvents()}
            </TableBody>
          </Table>
        </TableContainer>
        <Link to="/events/new">
          <Button variant="contained" size="medium" color="primary" style={style}>
            New
          </Button>
        </Link>
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
