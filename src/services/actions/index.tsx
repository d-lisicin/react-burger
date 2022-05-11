const Actions = {
    // Получаем ингредиенты
    GET_INGREDIENTS_REQUEST: 'ingredients/GET_INGREDIENTS_REQUEST',
    GET_INGREDIENTS_SUCCESS: 'ingredients/GET_INGREDIENTS_SUCCESS',
    GET_INGREDIENTS_ERROR: 'ingredients/GET_INGREDIENTS_ERROR',

    // активный таб
    ACTIVE_TAB: 'tabs/ACTIVE_TAB',

    // изменения в конструкотре
    ADD_INGREDIENT: 'ingredients-constructor/ADD_INGREDIENT',
    ADD_BUN: 'ingredients-constructor/ADD_BUN',
    REMOVE_INGREDIENT: 'ingredients-constructor/REMOVE_INGREDIENT',
    CHANGE_INGREDIENT_POSITION: 'ingredients-constructor/CHANGE_INGREDIENT_POSITION',
    CLEAR_INGREDIENT_POSITION: 'ingredients-constructor/CLEAR_INGREDIENT_POSITION',

    // просмотр подробностей
    SET_INGREDIENT_VIEW: 'ingredient-view/SET_INGREDIENT_VIEW',
    DELETE_INGREDIENT_VIEW: 'ingredient-view/DELETE_INGREDIENT_VIEW',

    // post запрос
    POST_ORDER_REQUEST: 'order/POST_ORDER_REQUEST',
    POST_ORDER_SUCCESS: 'order/POST_ORDER_SUCCESS',
    POST_ORDER_ERROR: 'order/POST_ORDER_ERROR',
    DELETE_ORDER_NUMBER: 'order/DELETE_ORDER_NUMBER',

    // Регистрация
    REGISTER_REQUEST: 'auth/REGISTER_REQUEST',
    REGISTER_SUCCESS: 'auth/REGISTER_SUCCESS',
    REGISTER_ERROR: 'auth/REGISTER_ERROR',

    // Авторизация
    LOGIN_REQUEST: 'auth/LOGIN_REQUEST',
    LOGIN_SUCCESS: 'auth/LOGIN_SUCCESS',
    LOGIN_ERROR: 'auth/LOGIN_ERROR',

    // Проверка пользователя
    CHECK_REQUEST: 'auth/CHECK_REQUEST',
    CHECK_SUCCESS: 'auth/CHECK_SUCCESS',
    CHECK_ERROR: 'auth/CHECK_ERROR',

    // Редактирование профиля
    EDIT_REQUEST: 'auth/EDIT_REQUEST',
    EDIT_SUCCESS: 'auth/EDIT_SUCCESS',
    EDIT_ERROR: 'auth/EDIT_ERROR',

    // Обновление токена
    UPDATE_TOKEN_REQUEST: 'auth/UPDATE_TOKEN_REQUEST',
    UPDATE_TOKEN_SUCCESS: 'auth/UPDATE_TOKEN_SUCCESS',
    UPDATE_TOKEN_ERROR: 'auth/UPDATE_TOKEN_ERROR',

    // Востановление пароля
    FORGOT_REQUEST: 'auth/FORGOT_REQUEST',
    FORGOT_SUCCESS: 'auth/FORGOT_SUCCESS',
    FORGOT_ERROR: 'auth/FORGOT_ERROR',

    // Сброс пароля
    RESET_PASSWORD_REQUEST: 'auth/RESET_PASSWORD_REQUEST',
    RESET_PASSWORD_SUCCESS: 'auth/RESET_PASSWORD_SUCCESS',
    RESET_PASSWORD_ERROR: 'auth/RESET_PASSWORD_ERROR',

    // Выход из системы
    LOGOUT_REQUEST: 'auth/LOGOUT_REQUEST',
    LOGOUT_SUCCESS: 'auth/LOGOUT_SUCCESS',
    LOGOUT_ERROR: 'auth/LOGOUT_ERROR'
}

export default Actions
