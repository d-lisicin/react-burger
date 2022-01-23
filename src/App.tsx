import React from 'react';
import './App.css';
import AppHeader from './components/app-header/app-header';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients';
import BurgerConstructor from "./components/burger-constructor/burger-constructor";
import styles from './App.module.css'

function App() {
    return (
        <div className="App">
            <AppHeader />
            <main className={`${styles.main} mt-10`}>
                <BurgerIngredients />
                <BurgerConstructor />
            </main>
        </div>
    );
}

export default App;
