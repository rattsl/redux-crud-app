import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

//App.jsをcomponentsディレクトリに格納
import App from './components/App';

//Storeを作成するためのメソッド
import { createStore } from 'redux';

//作成したStoreを全コンポーネントに渡す機能をもつProviderをライブラリから参照
import { Provider } from 'react-redux';

//作成したReducerをインポート(ライブラリから参照してないのでハッシュ不要)
import reducer from './reducers'


//Store作成
const store = createStore(reducer)

//次にここで作成したストアがどのコンポーネントからも参照できるようにProviderを使う。そしてstore属性に作成したstoreを渡す。
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>,
document.getElementById('root'));

serviceWorker.unregister();
