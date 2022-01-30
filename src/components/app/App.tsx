import React from 'react'
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from "../burger-constructor/burger-constructor"
import data from '../../utils/data'
import styles from './App.module.css'

function App() {
    return (
        <div className="App">
            <AppHeader />
            <main className={`${styles.main} mt-10`}>
                <BurgerIngredients data={data} />
                <BurgerConstructor data={data} />
            </main>
        </div>
    );
}

export default App;
