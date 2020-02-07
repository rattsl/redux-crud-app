//ここではアプリケーション内のReducerを全て総括するファイルです

import { combineReducers } from 'redux';
import count from './count'

export default combineReducers({ count })