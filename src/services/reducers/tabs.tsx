import Actions from '../actions'

export const activeTabReducer = (
    state = 'bun',
    action: {
        type: String
        payload: String
    }) => {
    switch (action.type) {
        case Actions.ACTIVE_TAB: {
            return action.payload
        }
        default:
            return state
    }
};
