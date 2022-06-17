import { applyMiddleware, createStore } from 'redux'
import {
    TypedUseSelectorHook,
    useDispatch as dispatchHook,
    useSelector as selectorHook
} from 'react-redux'
import { rootReducer } from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import { socketMiddleware } from './middleware/socketMiddleware'
import thunk from 'redux-thunk'
import * as Actions from './actions'
import { TRootState, TAppThunk, TAppDispatch } from '../utils/type'

const wsUrl = 'wss://norma.nomoreparties.space/orders'

const wsActions = {
    onInit: Actions.WS_CONNECTION_REQUEST,
    onOpen: Actions.WS_CONNECTION_SUCCESS,
    onClose: Actions.WS_CONNECTION_CLOSED,
    onError: Actions.WS_CONNECTION_ERROR,
    wsSendMessage: Actions.WS_SEND_MESSAGE,
    onMessage: Actions.WS_GET_MESSAGE
}

export const useDispatch = () => dispatchHook<TAppDispatch | TAppThunk>()
export const useSelector: TypedUseSelectorHook<TRootState> = selectorHook

export const store = createStore(
        rootReducer,
        composeWithDevTools(
            applyMiddleware(thunk, socketMiddleware(wsUrl, wsActions))
        )
    )
