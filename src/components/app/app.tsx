import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import { getIngredients } from '../../services/actions/ingredients'
import styles from './app.module.css'
import { IIngredient } from '../../utils/types'

function App() {
    const dispatch = useDispatch()
    const ingredients = useSelector((state: IIngredient) => state.ingredients)

    useEffect(() => {
        dispatch(getIngredients())
    }, [dispatch])

    return (
        <div className="App">
            <AppHeader />
            {ingredients.length &&
                <DndProvider backend={HTML5Backend}>
                    <main className={`${styles.main} mt-10`}>
                        <BurgerIngredients />
                        <BurgerConstructor />
                    </main>
                </DndProvider>
            }
        </div>
    )
}

export default App
