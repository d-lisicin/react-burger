import { applyMiddleware, createStore } from 'redux'
import { rootReducer } from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import { socketMiddleware } from './middleware/socketMiddleware'
import thunk from 'redux-thunk'
import * as Actions from './actions'

const wsUrl = 'wss://norma.nomoreparties.space/orders'

const wsActions = {
    onInit: Actions.WS_CONNECTION_REQUEST,
    onOpen: Actions.WS_CONNECTION_SUCCESS,
    onClose: Actions.WS_CONNECTION_CLOSED,
    onError: Actions.WS_CONNECTION_ERROR,
    wsSendMessage: Actions.WS_SEND_MESSAGE,
    onMessage: Actions.WS_GET_MESSAGE
}

export const store = createStore(
        rootReducer,
        composeWithDevTools(
            applyMiddleware(thunk, socketMiddleware(wsUrl, wsActions))
        )
    )
