import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import ModalOverlay from '../modal-overlay/modal-overlay'
import styles from './modal.module.css'

const Modal = (
    props: {
        title: string | React.ReactChild | React.ReactFragment | React.ReactPortal,
        onClick: () => void,
        children: React.ReactChild | React.ReactFragment | React.ReactPortal
    } ) => {

    const modalRoot = document.getElementById('modal') as HTMLElement

    const keyPress = (e: { key: string }) => {
        if (e.key === 'Escape') {
            return props.onClick()
        }
    }

    useEffect(() => {
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
                    data-test="modal-close"
                    onClick={props.onClick}
                >
                    <CloseIcon type="primary" />
                </button>
                { props.children }
            </div>
            <ModalOverlay onClick={props.onClick} />
        </>,
        modalRoot
    )
}

export default Modal
