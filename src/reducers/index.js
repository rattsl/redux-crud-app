//ここではアプリケーション内のReducerを全て総括するファイルです

import { combineReducers } from 'redux';
import count from './counter.js';

export default combineReducers({ count })