import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

//thunkをインポート
import thunk from 'redux-thunk';

//componentsを全てインポート
import EventsIndex from './components/events_index';
import EventsNew from './components/events_new';

//Storeを作成するためのメソッド
import { createStore, applyMiddleware } from 'redux';

//作成したStoreを全コンポーネントに渡す機能をもつProviderをライブラリから参照
import { Provider } from 'react-redux';

//作成したReducerをインポート(ライブラリから参照してないのでハッシュ不要)
import reducer from './reducers'

//routerでラップする
import { BrowserRouter, Route, Switch } from 'react-router-dom';


//Store作成
const store = createStore(reducer, applyMiddleware(thunk))

//次にここで作成したストアがどのコンポーネントからも参照できるようにProviderを使う。そしてstore属性に作成したstoreを渡す。
ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <Switch>
            <Route exact path="/events/new" component={EventsNew} />
            <Route exact path="/" component={EventsIndex} />
        </Switch>
    </BrowserRouter>
</Provider>,
document.getElementById('root'));

serviceWorker.unregister();
