import React from 'react'
import BurgerIngredientsTab from './burger-ingredients-tab/burger-ingredients-tab'
import BurgerIngredientsContent from './burger-ingredients-content/burger-ingredients-content'
import Modal from "../modal/modal"
import IngredientDetails from "../ingredient-details/ingredient-details";
import styles from './burger-ingredients.module.css'

const BurgerIngredients = (props: { data: any }) => {
    const [isShowDetails, setIsShowDetails] = React.useState(false);
    const [ingredientDetails, setIngredientDetails] = React.useState(null);

    const openIngredientDetails = () => {
        document.body.classList.add('overflow-hidden');
        setIsShowDetails(true)
    }

    const closeIngredientDetails = () => {
        document.body.classList.remove('overflow-hidden');
        setIsShowDetails(false)
        setIngredientDetails(null)
    }

    return (
        <>
            <section className={`${styles.section} mb-10 mr-10`}>
                <h2 className='text text_type_main-large mb-5'>Соберите бургер</h2>
                <BurgerIngredientsTab />
                <BurgerIngredientsContent
                    data={props.data}
                    setIngredient={setIngredientDetails}
                    onClick={openIngredientDetails}
                />
            </section>
            {isShowDetails &&
                <Modal
                    title='Детали ингредиента'
                    onClick={closeIngredientDetails}
                >
                    <IngredientDetails ingredient={ingredientDetails} />
                </Modal >
            }
        </>
    );
}

export default BurgerIngredients;
