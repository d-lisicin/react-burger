import * as Actions from '../actions'
import { TWsActions } from '../actions/ws'
import { TWsState } from '../../utils/type'

const initialState: TWsState = {
    wsConnected: false,
    error: null,
    messages: []
}

export const websocketsReducer = (
    state: TWsState = initialState,
    action: TWsActions
): TWsState => {
    switch (action.type) {
        case Actions.WS_CONNECTION_REQUEST:
            return {
                ...state,
                wsConnected: false,
                error: null
            }
        case Actions.WS_CONNECTION_SUCCESS:
            return {
                ...state,
                wsConnected: true
            }
        case Actions.WS_CONNECTION_ERROR:
            return {
                ...state,
                wsConnected: false,
                error: action.payload
            }
        case Actions.WS_CONNECTION_CLOSED:
            return {
                ...state,
                wsConnected: false,
                messages: []
            }
        case Actions.WS_GET_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        default:
            return state
    }
}
