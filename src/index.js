import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { rootReducer } from './store/reducers'
import { logger, scheduler, extractor, resetter } from './middleware'

const store = createStore(
  rootReducer,
  applyMiddleware(
    // resetter, // resets returned value and makes it unavailable for the dispath() user
    // extractor(resetter), // make it safe
    extractor(logger),
    extractor(scheduler, 'clearScheduler'),
    extractor(thunk, 'thunk')
  )
)

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
