//ここではアプリケーション内のReducerを全て総括するファイルです

import { combineReducers } from 'redux';
import events from './events';

export default combineReducers({ events })