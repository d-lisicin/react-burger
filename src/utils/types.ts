export interface IIngredientsItem {
    _id: string,
    calories: number,
    fat: number,
    carbohydrates: number,
    image: string,
    image_large: string,
    image_mobile: string,
    name: string,
    price: number,
    proteins: number,
    type: string,
    __v: number,
    _idNew: string,
}

export interface IIngredient {
    ingredients: IIngredientsItem[]
}

export interface IIngredientArr {
    ingredient: IIngredientsItem
}

export interface IHoverIngredient {
    index: number,
    ingredient: IIngredientsItem
}

export interface IIngredientView {
    ingredientView: {
        ingredientView: IIngredientsItem
    }
}

export interface IOrder {
    order: {
        error: string | null
        number: string
        post: boolean
    }
}

export interface IDragHoverIndex {
    dragIndex: string
    hoverIndex: string
}

export type TActionConstructor = {
    type: 'ingredients-constructor/ADD_INGREDIENT'
    payload: IIngredientsItem
} | {
    type: 'ingredients-constructor/ADD_BUN'
    payload: IIngredientsItem
} | {
    type: 'ingredients-constructor/REMOVE_INGREDIENT'
    payload: IIngredientsItem
} | {
    type: 'ingredients-constructor/CHANGE_INGREDIENT_POSITION'
    payload: IDragHoverIndex
}

export interface IIngredientConstructor {
    newBurger: {
        newBurger: IIngredientsItem[]
    }
}

export interface ITab {
    activeTab: string
}
