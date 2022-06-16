import React  from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styles from './profile-nav.module.css'
import { ILocation } from '../../../utils/type'
import { logOut } from '../../../store/actions/auth'
import { useDispatch } from 'react-redux'

export const ProfileNav = () => {
    const location = useLocation<ILocation>()
    const dispatch = useDispatch()

    const toggleClassName = (e: string) => {
        return location.pathname === e ? 'text text_type_main-medium' : 'text text_type_main-medium text_color_inactive'
    }

    const logout = () => {
        dispatch(logOut())
    }

    return (
        <div className={ `${styles.wrap} ml-5 mr-15 mt-25` }>
            <NavLink
                to="/profile"
                className={styles.link}
                activeClassName={styles.linkActive}
                exact
            >
                <span className={ toggleClassName('/profile') }>Профиль</span>
            </NavLink>
            <NavLink
                to="/profile/orders"
                className={styles.link}
                activeClassName={styles.linkActive}
                exact
            >
                <span className={ toggleClassName('/profile/orders') }>История заказов</span>
            </NavLink>
            <NavLink
                to="#"
                className={styles.link}
                activeClassName={styles.linkActive}
                exact
                onClick={logout}
            >
                <span className={ toggleClassName('#') }>Выход</span>
            </NavLink>

            <div className={ `${styles.textInfo} text text_type_main-small text_color_inactive mt-20` }>
                В этом разделе вы можете<br/> изменить свои персональные данные
            </div>
        </div>
    )
}
