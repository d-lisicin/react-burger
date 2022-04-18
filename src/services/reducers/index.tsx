import { combineReducers } from 'redux'
import { ingredientsReducer } from './ingredients'
import { activeTabReducer } from './tabs'
import { ingredientsConstructorReducer } from './ingredients-constructor'
import { ingredientViewReducer } from './ingredient-view'
import { orderReducer } from './order'
import { authReducer } from './auth'

const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    newBurger: ingredientsConstructorReducer,
    ingredientView: ingredientViewReducer,
    order: orderReducer,
    activeTab: activeTabReducer,
    profile: authReducer
})

export default rootReducer
