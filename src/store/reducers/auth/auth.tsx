import * as Actions from '../../actions'
import { TAuthReducerState } from '../../../utils/type'
import { TAuthActionTypes } from '../../actions/auth'

export const initialState: TAuthReducerState = {
    loading: false,
    user: {
        success: false,
        user: {
            name: '',
            email: '',
            password: ''
        }
    },
    error: null,
    profileUpdate: false,
    isForgotSend: false,
    ressetMessage: ''
}

export const authReducer = (
    state = initialState,
    action: TAuthActionTypes
): TAuthReducerState => {
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
                user: action.payload
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
                loading: false
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
                user: {
                    success: false,
                    user: {
                        name: '',
                        email: '',
                        password: ''
                    }
                }
            }
        case Actions.LOGOUT_ERROR:
            return {
                ...state,
                loading: false
            }
        default: {
            return state
        }
    }
}
