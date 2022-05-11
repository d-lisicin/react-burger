import React, { useRef , useEffect } from 'react'
import BurgerIngredientItem from './burger-ingredient-item/burger-ingredient-item'
import styles from './burger-ingredient.module.css'
import Actions from '../../../services/actions'
import { useDispatch } from 'react-redux'

const BurgerIngredient = () => {
    const dispatch = useDispatch()
    const scrollRef = useRef<HTMLDivElement>(null)
    const categories = [
        { type: 'bun', name: 'Булки' },
        { type: 'sauce', name: 'Соусы' },
        { type: 'main', name: 'Начинки' }
    ]

    useEffect(() => {
        scrollRef.current?.addEventListener('scroll', function () {
            if (scrollRef.current) {
                const currentChildren: any = scrollRef.current?.children
                const scrollCurrent = scrollRef.current?.scrollTop
                const bun = currentChildren?.bun.offsetTop - currentChildren?.bun.offsetTop
                const souce = currentChildren?.sauce.offsetTop - currentChildren?.bun.offsetTop
                const main = currentChildren?.main.offsetTop - currentChildren?.bun.offsetTop

                if (scrollCurrent > bun && scrollCurrent < souce) {
                    dispatch({ type: Actions.ACTIVE_TAB, payload: 'bun' })
                } else if (scrollCurrent > souce && scrollCurrent < main) {
                    dispatch({ type: Actions.ACTIVE_TAB, payload: 'sauce' })
                } else if (scrollCurrent > main) {
                    dispatch({ type: Actions.ACTIVE_TAB, payload: 'main' })
                }
            }
        })
    }, [dispatch])

    return (
        <div
            className={`${styles.scroll} mt-10`}
            ref={scrollRef}
        >
            {categories.map((item:{
                type: string
                name: string
            }, index) => {
                return (
                    <BurgerIngredientItem
                        key={index}
                        type={item.type}
                        name={item.name}
                    />
                )
            })}
        </div>
    );
}

export default BurgerIngredient
