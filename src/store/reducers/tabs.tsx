import * as Actions from '../actions'
import { TActiveTabActionTypes } from '../actions/tabs'

export const activeTabReducer = (
    state = 'bun',
    action: TActiveTabActionTypes
) => {
    switch (action.type) {
        case Actions.ACTIVE_TAB: {
            return action.payload
        }
        default: {
            return state
        }
    }
}
