import React from 'react'
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import AppHeaderLink from './app-header-link/app-header-link'
import styles from './app-header.module.css';

export function AppHeader() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.leftColumn}>
                    <AppHeaderLink className={`${styles.link} ${styles.active} ml-5 mr-5`} link='/' iconName='BurgerIcon' iconType='secondary' text='Конструктор' />
                    <AppHeaderLink className={`${styles.link} ml-5 mr-5`} link='/' iconName='ListIcon' iconType='primary' text='Лента заказов' />
                </div>
                <span className={styles.logo}>
                    <Logo />
                </span>
                <AppHeaderLink className={ `${styles.link} ${styles.rightColumn}`} link='/' iconName='ProfileIcon' iconType='primary' text='Личный кабинет' />
            </nav>
        </header>
    );
}

export default AppHeader;
