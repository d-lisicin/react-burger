import { combineReducers } from 'redux'
import { ingredientsReducer } from './ingredients'
import { activeTabReducer } from './tabs'
import { ingredientsConstructorReducer } from './ingredients-constructor'
import { ingredientViewReducer } from './ingredient-view'
import { orderViewReducer } from './order-view'
import { orderReducer } from './order'
import { authReducer } from './auth'
import { websocketsReducer } from './ws'

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
