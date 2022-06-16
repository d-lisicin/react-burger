import React, { useState } from 'react'
import { Link, Redirect, useLocation } from 'react-router-dom'
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './register.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../store/actions/auth'
import Preloader from '../../components/preloader/preloader'
import { ILocation, IProfile } from '../../utils/type'

export const RegisterPage = () => {
    const dispatch = useDispatch()
    const location = useLocation<ILocation>()
    const profile = useSelector((state: IProfile) => state.profile)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const postReg = (e: { preventDefault: () => void }) => {
        e.preventDefault()

        dispatch(registerUser({ email, password, name }))
    }

    if (!!profile.user) {
        return <Redirect to={ location.state?.from || '/' } />
    }

    if (profile.loading) {
        return <Preloader />
    }

    return (
        <div className={styles.formWrap}>
            <form
                className={styles.form}
                onSubmit={ postReg }
            >
                <div className={`${styles.title} text text_type_main-medium mb-6`}>Регистрация</div>
                <div className={`${styles.inputWrap} mb-6`}>
                    <Input
                        type="text"
                        placeholder="Имя"
                        onChange={e => setName(e.target.value)}
                        value={name}
                    />
                </div>
                <div className={`${styles.inputWrap} mb-6`}>
                    <Input
                        type="text"
                        placeholder="email"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div className={`${styles.inputWrap} mb-6`}>
                    <PasswordInput
                        name={'password'}
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                    />
                </div>
                <Button
                    type='primary'
                    size='medium'
                >
                    Зарегистрироваться
                </Button>
                <div className={'text text_type_main-default text_color_inactive mt-20'}>
                    Уже зарегистрированы?
                    <Link to="/login" className={`${styles.link} ml-2`}>Войти</Link>
                </div>
            </form>
        </div>
    )
}
