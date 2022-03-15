const Actions = {
    // get запрос
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

    // просмотр подробностей
    SET_INGREDIENT_VIEW: 'ingredient-view/SET_INGREDIENT_VIEW',
    DELETE_INGREDIENT_VIEW: 'ingredient-view/DELETE_INGREDIENT_VIEW',

    // post запрос
    POST_ORDER_REQUEST: 'order/POST_ORDER_REQUEST',
    POST_ORDER_SUCCESS: 'order/POST_ORDER_SUCCESS',
    POST_ORDER_ERROR: 'order/POST_ORDER_ERROR',
    DELETE_ORDER_NUMBER: 'order/DELETE_ORDER_NUMBER'
}

export default Actions
