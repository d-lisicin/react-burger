import type { Middleware } from 'redux'
import { TSocketMiddlewareActions } from '../../utils/type'

export const socketMiddleware = (
    wsUrl: string,
    wsActions: TSocketMiddlewareActions
): Middleware => {
    return ((store) => {
        let socket: WebSocket | undefined

        return next => action => {
            const { dispatch } = store
            const { type, payload } = action
            const { onInit, onOpen, onClose, onError, onMessage, wsSendMessage } = wsActions
            const urlQueryItem = action.urlQuery

            if (type === onInit) {
                socket = new WebSocket(`${wsUrl}${urlQueryItem}`)
            }

            if (socket) {
                socket.onopen = event => {
                    dispatch({
                        type: onOpen,
                        payload: event
                    })
                }

                socket.onerror = event => {
                    dispatch({
                        type: onError,
                        payload: event
                    })
                }

                socket.onmessage = ({ data }) => {
                    dispatch({
                        type: onMessage,
                        payload: JSON.parse(data)
                    })
                }

                socket.onclose = event => {
                    dispatch({
                        type: onClose,
                        payload: event
                    })
                }

                if (type === onclose) {
                    socket.close()
                }

                if (type === wsSendMessage) {
                    socket.send(JSON.stringify(payload))
                }
            }

            next(action)
        }
    }) as Middleware
}
