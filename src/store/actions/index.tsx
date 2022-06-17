// Регистрация
export const REGISTER_REQUEST: 'auth/REGISTER_REQUEST' = 'auth/REGISTER_REQUEST'
export const REGISTER_SUCCESS: 'auth/REGISTER_SUCCESS' = 'auth/REGISTER_SUCCESS'
export const REGISTER_ERROR: 'auth/REGISTER_ERROR' = 'auth/REGISTER_ERROR'

// Авторизация
export const LOGIN_REQUEST: 'auth/LOGIN_REQUEST' = 'auth/LOGIN_REQUEST'
export const LOGIN_SUCCESS: 'auth/LOGIN_SUCCESS' = 'auth/LOGIN_SUCCESS'
export const LOGIN_ERROR: 'auth/LOGIN_ERROR' = 'auth/LOGIN_ERROR'

// Проверка пользователя
export const CHECK_REQUEST: 'auth/CHECK_REQUEST' = 'auth/CHECK_REQUEST'
export const CHECK_SUCCESS: 'auth/CHECK_SUCCESS' = 'auth/CHECK_SUCCESS'
export const CHECK_ERROR: 'auth/CHECK_ERROR' = 'auth/CHECK_ERROR'

// Редактирование профиля
export const EDIT_REQUEST: 'auth/EDIT_REQUEST' = 'auth/EDIT_REQUEST'
export const EDIT_SUCCESS: 'auth/EDIT_SUCCESS' = 'auth/EDIT_SUCCESS'
export const EDIT_ERROR: 'auth/EDIT_ERROR' = 'auth/EDIT_ERROR'

// Обновление токена
export const UPDATE_TOKEN_REQUEST: 'auth/UPDATE_TOKEN_REQUEST' = 'auth/UPDATE_TOKEN_REQUEST'
export const UPDATE_TOKEN_SUCCESS: 'auth/UPDATE_TOKEN_SUCCESS' = 'auth/UPDATE_TOKEN_SUCCESS'
export const UPDATE_TOKEN_ERROR: 'auth/UPDATE_TOKEN_ERROR' = 'auth/UPDATE_TOKEN_ERROR'

// Востановление пароля
export const FORGOT_REQUEST: 'auth/FORGOT_REQUEST' = 'auth/FORGOT_REQUEST'
export const FORGOT_SUCCESS: 'auth/FORGOT_SUCCESS' = 'auth/FORGOT_SUCCESS'
export const FORGOT_ERROR: 'auth/FORGOT_ERROR' = 'auth/FORGOT_ERROR'

// Сброс пароля
export const RESET_PASSWORD_REQUEST: 'auth/RESET_PASSWORD_REQUEST' = 'auth/RESET_PASSWORD_REQUEST'
export const RESET_PASSWORD_SUCCESS: 'auth/RESET_PASSWORD_SUCCESS' = 'auth/RESET_PASSWORD_SUCCESS'
export const RESET_PASSWORD_ERROR: 'auth/RESET_PASSWORD_ERROR' = 'auth/RESET_PASSWORD_ERROR'

// Выход из системы
export const LOGOUT_REQUEST: 'auth/LOGOUT_REQUEST' = 'auth/LOGOUT_REQUEST'
export const LOGOUT_SUCCESS: 'auth/LOGOUT_SUCCESS' = 'auth/LOGOUT_SUCCESS'
export const LOGOUT_ERROR: 'auth/LOGOUT_ERROR' = 'auth/LOGOUT_ERROR'

// post запрос заказа
export const POST_ORDER_REQUEST: 'order/POST_ORDER_REQUEST' = 'order/POST_ORDER_REQUEST'
export const POST_ORDER_SUCCESS: 'order/POST_ORDER_SUCCESS' = 'order/POST_ORDER_SUCCESS'
export const POST_ORDER_ERROR: 'order/POST_ORDER_ERROR' = 'order/POST_ORDER_ERROR'
export const DELETE_ORDER_NUMBER: 'order/DELETE_ORDER_NUMBER' = 'order/DELETE_ORDER_NUMBER'

// Получаем ингредиенты
export const GET_INGREDIENTS_REQUEST: 'ingredients/GET_INGREDIENTS_REQUEST' = 'ingredients/GET_INGREDIENTS_REQUEST'
export const GET_INGREDIENTS_SUCCESS: 'ingredients/GET_INGREDIENTS_SUCCESS' = 'ingredients/GET_INGREDIENTS_SUCCESS'
export const GET_INGREDIENTS_ERROR: 'ingredients/GET_INGREDIENTS_ERROR' = 'ingredients/GET_INGREDIENTS_ERROR'

// Активный таб
export const ACTIVE_TAB: 'tabs/ACTIVE_TAB' = 'tabs/ACTIVE_TAB'

// Изменения в конструкотре
export const ADD_INGREDIENT: 'ingredients-constructor/ADD_INGREDIENT' = 'ingredients-constructor/ADD_INGREDIENT'
export const ADD_BUN: 'ingredients-constructor/ADD_BUN' = 'ingredients-constructor/ADD_BUN'
export const REMOVE_INGREDIENT: 'ingredients-constructor/REMOVE_INGREDIENT' = 'ingredients-constructor/REMOVE_INGREDIENT'
export const CHANGE_INGREDIENT_POSITION: 'ingredients-constructor/CHANGE_INGREDIENT_POSITION' = 'ingredients-constructor/CHANGE_INGREDIENT_POSITION'
export const CLEAR_INGREDIENT_POSITION: 'ingredients-constructor/CLEAR_INGREDIENT_POSITION' = 'ingredients-constructor/CLEAR_INGREDIENT_POSITION'

// просмотр подробностей
export const SET_INGREDIENT_VIEW: 'ingredient-view/SET_INGREDIENT_VIEW' = 'ingredient-view/SET_INGREDIENT_VIEW'
export const DELETE_INGREDIENT_VIEW: 'ingredient-view/DELETE_INGREDIENT_VIEW' = 'ingredient-view/DELETE_INGREDIENT_VIEW'

// просмотр подробностей заказа
export const SET_ORDER_VIEW: 'order-view/SET_ORDER_VIEW' = 'order-view/SET_ORDER_VIEW'
export const DELETE_ORDER_VIEW: 'order-view/DELETE_ORDER_VIEW' = 'order-view/DELETE_ORDER_VIEW'

// Обработка ws
export const WS_CONNECTION_REQUEST: 'ws/WS_CONNECTION_REQUEST' = 'ws/WS_CONNECTION_REQUEST'
export const WS_CONNECTION_SUCCESS: 'ws/WS_CONNECTION_SUCCESS' = 'ws/WS_CONNECTION_SUCCESS'
export const WS_CONNECTION_ERROR: 'ws/WS_CONNECTION_ERROR' = 'ws/WS_CONNECTION_ERROR'
export const WS_CONNECTION_CLOSED: 'ws/WS_CONNECTION_CLOSED' = 'ws/WS_CONNECTION_CLOSED'
export const WS_GET_MESSAGE: 'ws/WS_GET_MESSAGE' = 'ws/WS_GET_MESSAGE'
export const WS_SEND_MESSAGE: 'ws/WS_SEND_MESSAGE' = 'ws/WS_SEND_MESSAGE'
