import React from 'react'
import img from '../../images/preloader.svg'
import styles from './preloader.module.css'

function Preloader() {
    return (
        <div className={styles.wrap}>
            <img className={styles.preloader} src={img} alt='' />
            <div className='text text_type_main-default'>Загружаем</div>
        </div>
    )
}

export default Preloader
