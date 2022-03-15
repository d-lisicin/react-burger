import React from 'react'
import ReactDOM from 'react-dom'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import ModalOverlay from '../modal-overlay/modal-overlay'
import styles from './modal.module.css'
import Actions from '../../services/actions'
import { useDispatch, useSelector } from 'react-redux'
import { IIngredientView, IOrder } from '../../utils/types'

const Modal = (
    props: {
        title: string | React.ReactChild | React.ReactFragment | React.ReactPortal
        children: React.ReactChild | React.ReactFragment | React.ReactPortal
    } ) => {
    const dispatch = useDispatch()
    const ingredientDetails = useSelector((state: IIngredientView) => state.ingredientView.ingredientView)
    const orderValue = useSelector((state: IOrder) => state.order.number)

    const closeModal = () => {
        document.body.classList.remove('overflow-hidden')

        if (ingredientDetails) {
            dispatch({ type: Actions.DELETE_INGREDIENT_VIEW })
        }

        if (orderValue) {
            dispatch({ type: Actions.DELETE_ORDER_NUMBER })
        }
    }

    const modalRoot = document.getElementById('modal') as HTMLElement

    const keyPress = (e: { key: string }) => {
        if (e.key === 'Escape') {
            return closeModal
        }
    }

    React.useEffect(() => {
        document.addEventListener('keydown', keyPress)
        return () => document.removeEventListener('keydown', keyPress)
    })

    return ReactDOM.createPortal(
        <>
            <div className={styles.modal}>
                { props.title !== '' &&
                    <p className='text text_type_main-large ml-10 mt-15'>{props.title}</p>
                }
                <button
                    className={styles.close}
                    onClick={closeModal}
                >
                    <CloseIcon type="primary" />
                </button>
                {props.children}
            </div>
            <ModalOverlay onClick={closeModal} />
        </>,
        modalRoot
    )
}

export default Modal
