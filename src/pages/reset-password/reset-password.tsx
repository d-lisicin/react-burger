import React, {useState} from 'react'
import { Link, Redirect, useLocation } from 'react-router-dom'
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './reset-password.module.css'
import { resetPassword } from '../../services/actions/auth'
import { useDispatch, useSelector } from 'react-redux'
import Preloader from '../../components/preloader/preloader'
import { ILocation, IProfile } from '../../utils/types'

export const ResetPasswordPage = () => {
    const dispatch = useDispatch()
    const location = useLocation<ILocation>()
    const profile = useSelector((state: IProfile) => state.profile)
    const [password, setPassword] = useState('')
    const [mailCode, setMailCode] = useState('')

    const postResetPassword = (e: { preventDefault: () => void }) => {
        e.preventDefault()

        dispatch(resetPassword({ password, mailCode }))
    }

    if (!profile.isForgotSend) {
        return <Redirect to={ location.state?.from || '/forgot-password' } />
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
                onSubmit={ postResetPassword }
            >
                <div className={`${styles.title} text text_type_main-medium mb-6`}>Восстановление пароля</div>
                <div className={`${styles.inputWrap} mb-6`}>
                    <Input
                        type="password"
                        placeholder="Введите новый пароль"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        name="password"
                        icon="ShowIcon"
                    />
                </div>
                <div className={`${styles.inputWrap} mb-6`}>
                    <Input
                        type="text"
                        placeholder="Введите код из письма"
                        onChange={e => setMailCode(e.target.value)}
                        value={mailCode}
                    />
                </div>
                <Button
                    type='primary'
                    size='medium'
                >
                    Сохранить
                </Button>

                <div className='text text_type_main-default text_color_inactive mt-5'>{ profile.ressetMessage }</div>

                <div className={'text text_type_main-default text_color_inactive mt-20'}>
                    Вспомнили пароль?
                    <Link to="/login" className={`${styles.link} ml-2`}>Войти</Link>
                </div>
            </form>
        </div>
    )
}
