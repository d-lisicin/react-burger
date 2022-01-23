import React from 'react'
import data from '../../../utils/data'
import BurgerIngredientsContentItem from "./burger-ingredients-content-item/burger-ingredients-content-item";
import styles from './burger-ingredients-content.module.css'

const bun = data.filter(el => el.type === 'bun')
const sauce = data.filter(el => el.type === 'sauce')
const main = data.filter(el => el.type === 'main')

const BurgerIngredientsContent = () => {
    return (
        <div className={`${styles.scroll} mt-10`}>
            <h3 className='text text_type_main-medium'>Булки</h3>
            <ul className={`${styles.list} mb-10 ml-4 mr-2`}>
                {bun.map(item => {
                    return <BurgerIngredientsContentItem key={item._id} img={item.image} name={item.name} price={item.price} />
                })}
            </ul>

            <h3 className='text text_type_main-medium'>Соусы</h3>
            <ul className={`${styles.list} mb-10 ml-4 mr-2`}>
                {sauce.map(item => {
                    return <BurgerIngredientsContentItem key={item._id} img={item.image} name={item.name} price={item.price} />
                })}
            </ul>
            <h3 className='text text_type_main-medium'>Начинки</h3>
            <ul className={`${styles.list} mb-10 ml-4 mr-2`}>
                {main.map(item => {
                    return <BurgerIngredientsContentItem key={item._id} img={item.image} name={item.name} price={item.price} />
                })}
            </ul>
        </div>
    );
}

export default BurgerIngredientsContent
