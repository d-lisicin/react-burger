import { combineReducers } from 'redux'
import { ingredientsReducer } from './ingredients/ingredients'
import { activeTabReducer } from './tabs/tabs'
import { ingredientsConstructorReducer } from './ingredients-constructor/ingredients-constructor'
import { ingredientViewReducer } from './ingredient-view/ingredient-view'
import { orderViewReducer } from './order-view/order-view'
import { orderReducer } from './order/order'
import { authReducer } from './auth/auth'
import { websocketsReducer } from './ws/ws'

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    newBurger: ingredientsConstructorReducer,
    ingredientView: ingredientViewReducer,
    orderView: orderViewReducer,
    order: orderReducer,
    activeTab: activeTabReducer,
    profile: authReducer,
    ws: websocketsReducer
})
