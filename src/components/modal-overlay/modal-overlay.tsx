import React from 'react';
import styles from './modal-overlay.module.css';

const ModalOverlay = (props: { onClick: any } ) => {
    return (
        <div className={styles.overlay} onClick={props.onClick}/>
    )
}


export default ModalOverlay;
