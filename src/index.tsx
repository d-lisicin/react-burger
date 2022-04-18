import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/app/app'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './services/reducers'
import { BrowserRouter } from 'react-router-dom'

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
)
