import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { rootReducer } from './store/reducers'
import { logger, scheduler } from './middleware'

const store = createStore(rootReducer, applyMiddleware(logger, scheduler))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
