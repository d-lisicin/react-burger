import Actions from '../actions'

const initialState = {
    loading: false,
    user: null,
    error: null,
    profileUpdate: false,
    isForgotSend: false,
    ressetMessage: ''
}

export const authReducer = (state = initialState, action: { type: string, payload: null }) => {
    switch (action.type) {
        case Actions.REGISTER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case Actions.REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: {
                    user: action.payload
                }
            }
        case Actions.REGISTER_ERROR:
            return {
                ...state,
                loading: false
            }
        case Actions.LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case Actions.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload
            }
        case Actions.LOGIN_ERROR:
            return {
                ...state,
                loading: false
            }
        case Actions.CHECK_REQUEST:
            return {
                ...state,
                loading: true
            }
        case Actions.CHECK_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload
            }
        case Actions.CHECK_ERROR:
            return {
                ...state,
                loading: false
            }
        case Actions.EDIT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case Actions.EDIT_SUCCESS:
            return {
                ...state,
                loading: false,
                profileUpdate: true,
                user: action.payload
            }
        case Actions.EDIT_ERROR:
            return {
                ...state,
                loading: false
            }
        case Actions.UPDATE_TOKEN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case Actions.UPDATE_TOKEN_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload
            }
        case Actions.UPDATE_TOKEN_ERROR:
            return {
                ...state,
                loading: false
            }
        case Actions.FORGOT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case Actions.FORGOT_SUCCESS:
            return {
                ...state,
                loading: false,
                isForgotSend: action.payload
            }
        case Actions.FORGOT_ERROR:
            return {
                ...state,
                loading: false,
                isForgotSend: action.payload
            }
        case Actions.RESET_PASSWORD_REQUEST:
            return {
                ...state,
                loading: true
            }
        case Actions.RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                ressetMessage: action.payload
            }
        case Actions.RESET_PASSWORD_ERROR:
            return {
                ...state,
                loading: false,
                ressetMessage: action.payload
            }
        case Actions.LOGOUT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case Actions.LOGOUT_SUCCESS:
            return {
                ...state,
                loading: false,
                user: null
            }
        case Actions.LOGOUT_ERROR:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}
