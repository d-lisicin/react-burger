import React from 'react'
import styles from './order-details.module.css'
import img from '../../images/done.png'

function OrderDetails(props: { orderValue: number | null }) {
    return (
        <div className={`${styles.wrap} mt-30 mb-30`}>
            <p className={`${styles.number} text text_type_digits-large mb-8`}>{props.orderValue}</p>
            <p className='text text_type_main-medium mb-15'>идентификатор заказа</p>
            <img className='mb-15' src={img} alt='done' />
            <p className='cook text text_type_main-default mb-2'>Ваш заказ начали готовить</p>
            <p className='expect text text_type_main-default text_color_inactive'>Дождитесь готовности на орбитальной станции</p>
        </div>
    );
}

export default OrderDetails;
