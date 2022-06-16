import * as Actions from '../actions'
import { TWsGet } from '../../utils/type'

interface IWsConnectionRequest {
    readonly type: typeof Actions.WS_CONNECTION_REQUEST
}

interface IWsConnectionSuccess {
    readonly type: typeof Actions.WS_CONNECTION_SUCCESS
}

interface IWsConnectionError {
    readonly type: typeof Actions.WS_CONNECTION_ERROR
    readonly payload: string
}

interface IWsConnectionClosed {
    readonly type: typeof Actions.WS_CONNECTION_CLOSED
}

interface IWSGetMessage {
    readonly type: typeof Actions.WS_GET_MESSAGE
    readonly payload: { messages: TWsGet }
}

export type TWsActions =
    | IWsConnectionRequest | IWsConnectionSuccess
    | IWsConnectionError | IWsConnectionClosed
    | IWSGetMessage
