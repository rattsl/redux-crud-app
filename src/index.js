import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

//thunkをインポート
import thunk from 'redux-thunk';

//componentsを全てインポート
import EventsIndex from './components/events_index';
import EventsNew from './components/events_new';
import EventsShow from './components/events_show';

//Storeを作成するためのメソッド
import { createStore, applyMiddleware } from 'redux';

//作成したStoreを全コンポーネントに渡す機能をもつProviderをライブラリから参照
import { Provider } from 'react-redux';

//作成したReducerをインポート(ライブラリから参照してないのでハッシュ不要)
import reducer from './reducers'

//routerでラップする
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//redux-devtoolを使う
import { composeWithDevTools } from 'redux-devtools-extension';

//Store作成
const enhancer = process.env.NODE_ENV === "development" ?
composeWithDevTools(applyMiddleware(thunk)): applyMiddleware(thunk)

const store = createStore(reducer, enhancer)

//次にここで作成したストアがどのコンポーネントからも参照できるようにProviderを使う。そしてstore属性に作成したstoreを渡す。
ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <Switch>
            <Route path="/events/new" component={EventsNew} />
            <Route path="/events/:id" component={EventsShow} />
            <Route exact path="/events" component={EventsIndex} />
            <Route exact path="/" component={EventsIndex} />
        </Switch>
    </BrowserRouter>
</Provider>,
document.getElementById('root'));

serviceWorker.unregister();
