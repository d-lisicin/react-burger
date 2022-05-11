import React from 'react'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { NavLink } from 'react-router-dom'
import styles from './not-found-page.module.css'

export const NotFoundPage = () => {
    return (
        <div className={styles.wrap}>
            <h1 className="text text_type_main-large text_color_inactive mb-5">Ошибка 404</h1>
            <p className="text text_type_main-medium text_color_inactive mb-10">Страница не найдена :)</p>
            <NavLink
                to='/'
                exact
            >
                <Button type="primary" size="small">
                    На главную
                </Button>
            </NavLink>
        </div>
    )
}
