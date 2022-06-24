import * as Actions from '../../../store/actions'
import { authReducer, initialState } from './auth'
import { IFormDataUser } from '../../../utils/type'

describe('Тестируем редьюсер auth', () => {
    const userInfo: IFormDataUser = {
        success: true,
        user: {
            email: 'user@test.ru',
            name: 'user',
            password: '1234567'
        }
    }

    it('Дефолтное состояние', () => {
        /* @ts-ignore-next-line */
        expect(authReducer(undefined, {})).toEqual(initialState)
    })

    it('Проверяем запрос на регистрацию юзера REGISTER_REQUEST', () => {
        expect(
            authReducer(initialState, {
                type: Actions.REGISTER_REQUEST
            }))
            .toEqual({
                ...initialState,
                loading: true
            })
    })

    it('Проверяем успешную регистрацию юзера REGISTER_SUCCESS', () => {
        expect(
            authReducer({
            ...initialState,
                loading: true
            }, {
                type: Actions.REGISTER_SUCCESS,
                payload: userInfo
            }))
            .toEqual({
                ...initialState,
                loading: false,
                user: userInfo
            })
    })

    it('Проверяем наличие ошибки при регистрации REGISTER_ERROR', () => {
        expect(
            authReducer({
                ...initialState,
                loading: true
            }, {
                type: Actions.REGISTER_ERROR
            }))
            .toEqual({
                ...initialState,
                loading: false
            })
    })

    it('Проверяем запрос на авторизацию LOGIN_REQUEST', () => {
        expect(
            authReducer({
                ...initialState,
                loading: false
            }, {
                type: Actions.LOGIN_REQUEST
            }))
            .toEqual({
                ...initialState,
                loading: true
            })
    })

    it('Проверяем успешность авторизации LOGIN_SUCCESS', () => {
        expect(
            authReducer({
                ...initialState,
                loading: true
            }, {
                type: Actions.LOGIN_SUCCESS,
                payload: userInfo
            }))
            .toEqual({
                ...initialState,
                loading: false,
                user: userInfo
            })
    })

    it('Проверяем запрос на авторизацию с ошибкой LOGIN_ERROR', () => {
        expect(
            authReducer({
                ...initialState,
                loading: true
            }, {
                type: Actions.LOGIN_ERROR
            }))
            .toEqual({
                ...initialState,
                loading: false
            })
    })

    it('Проверяем запрос на авторизацию с токеном CHECK_REQUEST', () => {
        expect(
            authReducer({
                ...initialState,
                loading: false
            }, {
                type: Actions.CHECK_REQUEST
            }))
            .toEqual({
                ...initialState,
                loading: true
            })
    })

    it('Проверяем авторизацию с токеном CHECK_SUCCESS', () => {
        expect(
            authReducer({
                ...initialState,
                loading: true
            }, {
                type: Actions.CHECK_SUCCESS,
                payload: userInfo
            }))
            .toEqual({
                ...initialState,
                loading: false,
                user: userInfo
            })
    })

    it('Проверяем запрос на авторизацию с токеном с ошибкой CHECK_ERROR', () => {
        expect(
            authReducer({
                ...initialState,
                loading: true
            }, {
                type: Actions.CHECK_ERROR
            }))
            .toEqual({
                ...initialState,
                loading: false
            })
    })

    it('Проверяем запрос на редактирование профиля EDIT_REQUEST', () => {
        expect(
            authReducer({
                ...initialState,
                loading: false
            }, {
                type: Actions.EDIT_REQUEST
            }))
            .toEqual({
                ...initialState,
                loading: true
            })
    })

    it('Проверяем сохранение новых данных профиля EDIT_SUCCESS', () => {
        expect(
            authReducer({
                ...initialState,
                loading: true,
                profileUpdate: false
            }, {
                type: Actions.EDIT_SUCCESS,
                payload: userInfo
            }))
            .toEqual({
                ...initialState,
                loading: false,
                profileUpdate: true,
                user: userInfo
            })
    })

    it('Проверяем запрос на редактирование профиля с ошибкой EDIT_ERROR', () => {
        expect(
            authReducer({
                ...initialState,
                loading: true
            }, {
                type: Actions.EDIT_ERROR
            }))
            .toEqual({
                ...initialState,
                loading: false
            })
    })

    it('Проверяем запрос на обновление токена UPDATE_TOKEN_REQUEST', () => {
        expect(
            authReducer({
                ...initialState,
                loading: false
            }, {
                type: Actions.UPDATE_TOKEN_REQUEST
            }))
            .toEqual({
                ...initialState,
                loading: true
            })
    })

    it('Проверяем, что токен успешно обновлен UPDATE_TOKEN_SUCCESS', () => {
        expect(
            authReducer({
                ...initialState,
                loading: true
            }, {
                type: Actions.UPDATE_TOKEN_SUCCESS
            }))
            .toEqual({
                ...initialState,
                loading: false
            })
    })

    it('Проверяем, что токен обновлен с ошибкой UPDATE_TOKEN_ERROR', () => {
        expect(
            authReducer({
                ...initialState,
                loading: true
            }, {
                type: Actions.UPDATE_TOKEN_ERROR
            }))
            .toEqual({
                ...initialState,
                loading: false
            })
    })

    it('Проверяем запрос на востановление пароля FORGOT_REQUEST', () => {
        expect(
            authReducer({
                ...initialState,
                loading: false
            }, {
                type: Actions.FORGOT_REQUEST
            }))
            .toEqual({
                ...initialState,
                loading: true
            })
    })

    it('Проверяем, что пароль успешно востановлен FORGOT_SUCCESS', () => {
        expect(
            authReducer({
                ...initialState,
                loading: true,
                isForgotSend: false
            }, {
                type: Actions.FORGOT_SUCCESS,
                payload: true
            }))
            .toEqual({
                ...initialState,
                loading: false,
                isForgotSend: true
            })
    })

    it('Проверяем, что пароль востановлен c ошибкой FORGOT_ERROR', () => {
        expect(
            authReducer({
                ...initialState,
                loading: true,
                isForgotSend: false
            }, {
                type: Actions.FORGOT_ERROR,
                payload: false
            }))
            .toEqual({
                ...initialState,
                loading: false,
                isForgotSend: false
            })
    })

    it('Проверяем запрос на сброс пароля RESET_PASSWORD_REQUEST', () => {
        expect(
            authReducer({
                ...initialState,
                loading: false,
            }, {
                type: Actions.RESET_PASSWORD_REQUEST
            }))
            .toEqual({
                ...initialState,
                loading: true
            })
    })

    it('Проверяем, что пароль был успешно сброшен RESET_PASSWORD_SUCCESS', () => {
        const msg: string = 'Пароль успешно сброшен'

        expect(
            authReducer({
                ...initialState,
                loading: true,
            }, {
                type: Actions.RESET_PASSWORD_SUCCESS,
                payload: msg
            }))
            .toEqual({
                ...initialState,
                loading: false,
                ressetMessage: msg
            })
    })

    it('Проверяем, что пароль был сброшен с ошибкой RESET_PASSWORD_ERROR', () => {
        const msg: string = 'Произошла ошибка при сбросе пароля'

        expect(
            authReducer({
                ...initialState,
                loading: true,
            }, {
                type: Actions.RESET_PASSWORD_ERROR,
                payload: msg
            }))
            .toEqual({
                ...initialState,
                loading: false,
                ressetMessage: msg
            })
    })

    it('Проверяем запрос на разлогин LOGOUT_REQUEST', () => {
        expect(
            authReducer({
                ...initialState,
                loading: false,
            }, {
                type: Actions.LOGOUT_REQUEST
            }))
            .toEqual({
                ...initialState,
                loading: true
            })
    })

    it('Проверяем успешность разлогина LOGOUT_SUCCESS', () => {
        expect(
            authReducer({
                ...initialState,
                loading: true,
            }, {
                type: Actions.LOGOUT_SUCCESS
            }))
            .toEqual({
                ...initialState,
                loading: false,
                user: {
                    success: false,
                    user: {
                        name: '',
                        email: '',
                        password: ''
                    }
                }
            })
    })

    it('Проверяем разлогин с ошибкой LOGOUT_ERROR', () => {
        expect(
            authReducer({
                ...initialState,
                loading: true,
            }, {
                type: Actions.LOGOUT_ERROR
            }))
            .toEqual({
                ...initialState,
                loading: false
            })
    })
})
