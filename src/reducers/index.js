//ここではアプリケーション内のReducerを全て総括するファイルです

import { combineReducers } from 'redux';
import events from './events';
import { reducer as form } from 'redux-form'

export default combineReducers({ events, form })