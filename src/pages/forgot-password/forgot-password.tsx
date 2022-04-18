import React, { useState } from 'react'
import { Link, Redirect, useLocation } from 'react-router-dom'
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './forgot-password.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { forgotPassword } from '../../services/actions/auth'
import Preloader from '../../components/preloader/preloader'
import { ILocation, IProfile } from '../../utils/types'

export const ForgotPasswordPage = () => {
    const dispatch = useDispatch()
    const location = useLocation<ILocation>()
    const profile = useSelector((state: IProfile) => state.profile)
    const [email, setEmail] = useState('')
    const [notValidMessage, setnotValidMessage] = useState('')

    const postForgotPassword = (e: { preventDefault: () => void }) => {
        e.preventDefault()

        if (email !== '') {
            dispatch(forgotPassword({ email }))
            setEmail('')
            setnotValidMessage('')
        } else {
            setnotValidMessage( 'E-mail не может быть пустым')
        }
    }

    if (!!profile.user) {
        return <Redirect to={ location.state?.from || '/' } />
    }

    if (profile.loading) {
        return <Preloader />
    }

    return (
        <div className={styles.formWrap}>
            <form className={styles.form}>
                <div className={`${styles.title} text text_type_main-medium mb-6`}>Восстановление пароля</div>
                <div className={`${styles.inputWrap} mb-6`}>
                    <Input
                        type="text"
                        placeholder="Укажите e-mail"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <Button
                    type='primary'
                    size='medium'
                    onClick={postForgotPassword}
                >
                    Восстановить
                </Button>

                <div className='text text_type_main-default text_color_inactive mt-5'>
                    { profile.forgotMessage ? profile.forgotMessage : notValidMessage }
                </div>

                <div className={'text text_type_main-default text_color_inactive mt-20'}>
                    Вспомнили пароль?
                    <Link to="/login" className={`${styles.link} ml-2`}>Войти</Link>
                </div>
            </form>
        </div>
    )
}
