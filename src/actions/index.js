//actionCreaterを生成
import axios from 'axios'

export const READ_EVENTS = "READ_EVENTS" 
export const CREATE_EVENT = "CREATE_EVENT" 

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTORING = '?token=token123'

//戻り値がpromiseなのでasync,awaitを使う
export const readEvents = () => async dispatch => {
        const response = await axios.get(`${ROOT_URL}/events${QUERYSTORING}`)
        dispatch({type: READ_EVENTS,response})
}

export const postEvent = values => async dispatch => {
        const response = await axios.post(`${ROOT_URL}/events${QUERYSTORING}`, values)
        dispatch({type: CREATE_EVENT,response})
}


