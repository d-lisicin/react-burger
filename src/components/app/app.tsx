import { useEffect, useState } from 'react'
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import { IngredientsContext } from '../../services/ingredientsContext'
import styles from './app.module.css'

function App() {
    const [ingredients, setIngredients] = useState([])

    const url = 'https://norma.nomoreparties.space/api/ingredients'

    useEffect(() => {
        const getData = async () => {
            await fetch(url)
                .then(res => {
                    if (res.ok) {
                        return res.json()
                    } else {
                        throw new Error('Something went wrong')
                    }
                })
                .then(res => setIngredients(res.data))
                .catch(err => console.log(err))
        };
        getData()
    }, [])

    return (
        <div className="App">
            <AppHeader />
            {ingredients.length && setIngredients &&
                <IngredientsContext.Provider value={{ ingredients }}>
                    <main className={`${styles.main} mt-10`}>
                        <BurgerIngredients />
                        <BurgerConstructor />
                    </main>
                </IngredientsContext.Provider>
            }
        </div>
    );
}

export default App
