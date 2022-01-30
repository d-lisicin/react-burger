import React from 'react'
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from "../burger-constructor/burger-constructor"
import styles from './App.module.css'

function App() {
    const [data, setData] = React.useState([]);

    const url = 'https://norma.nomoreparties.space/api/ingredients';

    React.useEffect(() => {
        const getData = async () => {
            await fetch(url)
                .then(res => {
                    if (res.ok) {
                        return res.json();
                    }
                })
                .then(res => setData(res.data))
                .catch(err => console.log(err))
        };
        getData();
    }, [])

    return (
        <div className="App">
            <AppHeader />
            {
                data.length &&
                <main className={`${styles.main} mt-10`}>
                    <BurgerIngredients data={data}/>
                    <BurgerConstructor data={data}/>
                </main>
            }
            <div id="modal"></div>
        </div>
    );
}

export default App;
