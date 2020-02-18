//actionCreaterを生成
import axios from 'axios'

export const READ_EVENTS = "READ_EVENTS" 
const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTORING = '?token=token123'

//戻り値がpromiseなのでasync,awaitを使う
export const readEvents = () => async dispatch => {
        const response = await axios.get(`${ROOT_URL}/events${QUERYSTORING}`)
        console.log(response)
        dispatch({type: READ_EVENTS,response})
}


