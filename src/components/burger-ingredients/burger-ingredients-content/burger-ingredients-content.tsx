import React from 'react'
import BurgerIngredientsContentItem from "./burger-ingredients-content-item/burger-ingredients-content-item";
import styles from './burger-ingredients-content.module.css'

const BurgerIngredientsContent = (props: { data: { data: any; }; }) => {
    const categories = [
        { type: 'bun', name: 'Булки' },
        { type: 'sauce', name: 'Соусы' },
        { type: 'main', name: 'Начинки' },
    ]

    return (
        <div className={`${styles.scroll} mt-10`}>
            {categories.map((item:{
                type: string
                name: string
            }, index) => {
                return <BurgerIngredientsContentItem key={index} type={item.type} name={item.name} data={props.data}/>
            })}
        </div>
    );
}

export default BurgerIngredientsContent
