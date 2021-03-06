import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './ReactotronConfig'
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import reducer from '../src/reducers/index'
import { Provider } from 'react-redux';

const store = createStore(reducer,
  // window.__REDUX_DEVTOOLS_EXTENSION &&
  // window.__REDUX_DEVTOOLS_EXTENSION__()
  applyMiddleware(thunk)

)

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
