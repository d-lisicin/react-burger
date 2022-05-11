import React from 'react'
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './app-header.module.css'
import { NavLink, useLocation } from 'react-router-dom'

function AppHeader() {
    const location = useLocation()

    const activeIcon = (url: string) => {
        return location.pathname === url ? 'primary' : 'secondary'
    }

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.leftColumn}>
                    <NavLink
                        to='/'
                        className={`${styles.link} text text_type_main-default ml-5 mr-7`}
                        activeClassName={styles.linkActive}
                        exact
                    >
                        <BurgerIcon type={activeIcon('/')} />
                        <span className="pl-2">Конструктор</span>
                    </NavLink>

                    <NavLink
                        to='/list'
                        className={`${styles.link} text text_type_main-default ml-5 mr-5`}
                        activeClassName={styles.linkActive}
                        exact
                    >
                        <ListIcon type={activeIcon('/list')} />
                        <span className="pl-2">Лента заказов</span>
                    </NavLink>
                </div>
                <NavLink
                    to='/'
                    className={styles.logo}
                >
                    <Logo />
                </NavLink>
                <NavLink
                    to='/profile'
                    className={`${styles.link} ${styles.rightColumn} text text_type_main-default mr-5`}
                    activeClassName={styles.linkActive}
                    exact
                >
                    <ProfileIcon type={activeIcon('/profile')} />
                    <span className="pl-2">Личный кабинет</span>
                </NavLink>
            </nav>
        </header>
    )
}

export default AppHeader
