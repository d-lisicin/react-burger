import React, { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-constructor-item.module.css'
import { useDispatch } from '../../../store'
import * as Actions from '../../../store/actions'
import { IHoverIngredient } from '../../../utils/type'

const BurgerConstructorItem = (
    props: {
        item: {
            _idNew: string,
            name: string,
            price: number,
            image: string
        },
        index: number
    }
) => {
    const dispatch = useDispatch()
    const ref = useRef<HTMLLIElement>(null)
    const ingredient = props.item
    const index = props.index

    const [, drop] = useDrop({
        accept: 'constructorItems',
        hover(item: IHoverIngredient, monitor) {
            if (!ref.current) {
                return
            }

            if (item.ingredient._idNew === ingredient._idNew) {
                return
            }

            const dragIndex = item.index
            const hoverIndex = index

            if (dragIndex === hoverIndex) {
                return
            }

            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            const clientOffset = monitor.getClientOffset()

            if (!clientOffset) {
                return
            }

            const hoverClientY = clientOffset.y - hoverBoundingRect.top

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }

            dispatch({
                type: Actions.CHANGE_INGREDIENT_POSITION,
                payload: {
                    dragIndex: item.ingredient._idNew,
                    hoverIndex: ingredient._idNew
                }
            })
        }
    })

    const [{ isDragging  }, drag] = useDrag({
        type: 'constructorItems',
        item: () => ({ ingredient, index }),
        collect: (monitor) => ({
            isDragging: monitor.isDragging() ? 0 : 1
        })
    })

    drag(drop(ref))

    return (
        <li
            ref={ref}
            className={styles.wrap}
            style={{ opacity: isDragging }}

        >
            <span className={styles.icon}>
                <DragIcon type="primary" />
            </span>
            <ConstructorElement
                text={props.item.name}
                price={props.item.price}
                thumbnail={props.item.image}
                handleClose={() => dispatch({ type: Actions.REMOVE_INGREDIENT, payload: props.item })}
            />
        </li>
    )
}

export default BurgerConstructorItem
