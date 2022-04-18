import React, { useEffect, useState } from 'react'
import { Link, Redirect, useLocation } from 'react-router-dom'
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { checkUser, loginUser } from '../../services/actions/auth'
import { useDispatch, useSelector } from 'react-redux'
import styles from './login.module.css'
import Preloader from '../../components/preloader/preloader'
import { getTokens } from '../../helpers/auth'
import { ILocation, IProfile } from '../../utils/types'

export const LoginPage = () => {
    const dispatch = useDispatch()
    const location = useLocation<ILocation>()
    const profile = useSelector((state: IProfile) => state.profile)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { accessToken, refreshToken } = getTokens()

    const postLogin = (e: { preventDefault: () => void }) => {
        e.preventDefault()

        dispatch(loginUser({ email, password }))
    }

    useEffect(() => {
        dispatch(checkUser())
    }, [dispatch, accessToken, refreshToken])

    if (!!profile.user) {
        return <Redirect to={ location.state?.from || '/' } />
    }

    if (profile.loading) {
        return <Preloader />
    }

    return (
        <div className={styles.formWrap}>
            <form className={styles.form}>
                <div className={`${styles.title} text text_type_main-medium mb-6`}>Вход</div>
                <div className={`${styles.inputWrap} mb-6`}>
                    <Input
                        value={ email }
                        type="text"
                        placeholder="email"
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className={`${styles.inputWrap} mb-6`}>
                    <PasswordInput
                        value={ password }
                        name={'password'}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <Button
                    type='primary'
                    size='medium'
                    onClick={ postLogin }
                >
                    Войти
                </Button>
                <div className={'text text_type_main-default text_color_inactive mt-20'}>
                    Вы - новый пользователь?
                    <Link to="/register" className={`${styles.link} ml-2`}>Зарегистрироваться</Link>
                </div>
                <div className={'text text_type_main-default text_color_inactive mt-4'}>
                    Забыли пароль?
                    <Link to="/forgot-password" className={`${styles.link} ml-2`}>Восстановить пароль</Link>
                </div>
            </form>
        </div>
    )
}
