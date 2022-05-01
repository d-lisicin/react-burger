import Actions from '../actions'
import { IDragHoverIndex, IIngredientsItem, TActionConstructor } from '../../utils/types'

const initialState = {
    newBurger: []
}

export const ingredientsConstructorReducer = (state: { newBurger: IIngredientsItem[] } = initialState, action: TActionConstructor) => {
    switch (action.type) {
        case Actions.ADD_INGREDIENT:
            return {
                ...state,
                newBurger: [
                    ...state.newBurger,
                    action.payload
                ]
            }

        case Actions.ADD_BUN: {
            const payloadData = action.payload as IIngredientsItem
            const replaceNewBurger = [...state.newBurger]
            const indexItem = state.newBurger.findIndex((e: { type: string }) => e.type === 'bun')

            if (indexItem >= 0) {
                replaceNewBurger.splice(indexItem, 1, payloadData)
            } else {
                replaceNewBurger.push(payloadData)
            }

            return {
                ...state,
                newBurger: replaceNewBurger
            }
        }

        case Actions.REMOVE_INGREDIENT: {
            const payloadData = action.payload as IIngredientsItem
            const replaceNewBurger = [...state.newBurger]
            const ingredientId = payloadData._idNew
            const indexItem = state.newBurger.findIndex((e: { _idNew: string }) => e._idNew === ingredientId)

            if (indexItem >= 0) replaceNewBurger.splice(indexItem, 1)

            return {
                ...state,
                newBurger: replaceNewBurger
            }
        }

        case Actions.CHANGE_INGREDIENT_POSITION: {
            const payloadData = action.payload as IDragHoverIndex
            const replaceNewBurger = [...state.newBurger]
            const dragIndex = payloadData.dragIndex
            const hoverIndex = payloadData.hoverIndex

            const draggedItemIndex = replaceNewBurger.findIndex((ingredient: { _idNew: string }) => ingredient._idNew === dragIndex)
            const hoveredItemIndex = replaceNewBurger.findIndex((ingredient: { _idNew: string }) => ingredient._idNew === hoverIndex)
            const draggedItem = replaceNewBurger[draggedItemIndex]
            replaceNewBurger[draggedItemIndex] = replaceNewBurger[hoveredItemIndex]
            replaceNewBurger[hoveredItemIndex] = draggedItem

            return {
                ...state,
                newBurger: replaceNewBurger
            }
        }

        case Actions.CLEAR_INGREDIENT_POSITION: {
            return {
                ...state,
                newBurger: []
            }
        }
        default:
            return state
    }
}
