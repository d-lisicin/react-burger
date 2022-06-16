import React  from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import styles from '../../components/app/app.module.css'
import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients'
import BurgerConstructor from '../../components/burger-constructor/burger-constructor'
import { useSelector } from 'react-redux'
import { IIngredientEl } from '../../utils/type'

export const HomePage = () => {
    const ingredients = useSelector((state: IIngredientEl) => state.ingredients.items)

    return (
        <>
            {ingredients.length &&
                <DndProvider backend={HTML5Backend}>
                    <main className={`${styles.main} mt-10`}>
                        <BurgerIngredients />
                        <BurgerConstructor />
                    </main>
                </DndProvider>
            }
        </>
    )
}
