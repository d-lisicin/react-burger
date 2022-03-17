import React from 'react'
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import AppHeaderLink from './app-header-link/app-header-link'
import styles from './app-header.module.css'

function AppHeader() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.leftColumn}>
                    <AppHeaderLink
                        link='/'
                        className={`${styles.link} ${styles.active} text text_type_main-default ml-5 mr-7`}
                        icon={<BurgerIcon type='primary' />}
                        text='Конструктор'
                    />
                    <AppHeaderLink
                        link='/'
                        className={`${styles.link} text text_type_main-default ml-5 mr-5`}
                        icon={<ListIcon type='secondary' />}
                        text='Лента заказов'
                    />
                </div>
                <span className={styles.logo}>
                    <Logo />
                </span>
                <AppHeaderLink
                    link='/'
                    className={`${styles.link} ${styles.rightColumn} text text_type_main-default mr-5`}
                    icon={<ProfileIcon type='secondary' />}
                    text='Личный кабинет'
                />
            </nav>
        </header>
    )
}

export default AppHeader
