import React from 'react'
import BurgerIngredientsContentItem from "./burger-ingredients-content-item/burger-ingredients-content-item"
import { TIngredientsItem } from '../../../utils/types'
import styles from './burger-ingredients-content.module.css'

const BurgerIngredientsContent = (
    props: {
        data: TIngredientsItem[]
        setIngredient: React.Dispatch<React.SetStateAction<null>>
        onClick: () => void
    }) => {

    const categories = [
        { type: 'bun', name: 'Булки' },
        { type: 'sauce', name: 'Соусы' },
        { type: 'main', name: 'Начинки' }
    ]

    const elementClick = (item: React.SetStateAction<null>) => {
        props.setIngredient(item)
        props.onClick()
    }

    return (
        <div className={`${styles.scroll} mt-10`}>
            {categories.map((item:{
                type: string
                name: string
            }, index) => {
                return (
                    <BurgerIngredientsContentItem
                        key={index}
                        type={item.type}
                        name={item.name}
                        data={props.data}
                        onClick={elementClick}
                    />
                )
            })}
        </div>
    );
}

export default BurgerIngredientsContent
