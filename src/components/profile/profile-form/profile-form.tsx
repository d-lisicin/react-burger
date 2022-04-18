import React, {useEffect, useRef, useState} from 'react'
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './profile-form.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { editProfile } from '../../../services/actions/auth'
import {IProfile, IProfileUser} from '../../../utils/types'

export const ProfileForm = () => {
    const dispatch = useDispatch()
    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const { user } = useSelector((state: IProfileUser) => state.profile.user)
    const profile = useSelector((state: IProfile) => state.profile)
    const [ form, setForm ] = useState({ email: user?.email, name: user?.name, password: '' })
    const [ disabled, setDisabled ] = useState({ email: true, name: true, password: true })
    const [ showButtons, setShowButtons ] = useState(false)

    const onChangeForm = (e: { target: { name: string, value: string } }) => {
        const { name, value } = e.target

        setForm({ ...form, [name]: value })
        setShowButtons(true)
    }

    const onIconClick = (e: string) => {
        switch (e) {
            case ('name'): {
               return setDisabled( { ...disabled, [e]: !disabled.name })
            }
            case ('email'): {
                return setDisabled( { ...disabled, [e]: !disabled.email })
            }

            case ('password'): {
                return setDisabled( { ...disabled, [e]: !disabled.password })
            }

            default: {
                break
            }
        }
    }

    const saveProfile = () => {
        dispatch(editProfile(form))
        setDisabled({ ...disabled, email: true, name: true, password: true })
        setShowButtons(false)
    }

    const cancelEditProfile = () => {
        setForm({ ...form, email: user.email, name: user.name, password: '' })
        setDisabled({ ...disabled, email: true, name: true, password: true })
        setShowButtons(false)
    }

    useEffect(() => {
        if (nameRef.current && emailRef.current && passwordRef.current) {
            if (!disabled.name) {
                nameRef.current.focus()
            } else if (!disabled.email) {
                emailRef.current.focus()
            } else if (!disabled.password) {
                passwordRef.current.focus()
            }
        }
    }, [disabled])

    return (
        <form  className={styles.wrap}>
            <div className={'mb-6'}>
                <Input
                    ref={nameRef}
                    disabled={disabled.name}
                    type={'text'}
                    placeholder={'Имя'}
                    onChange={ onChangeForm }
                    value={form.name}
                    icon={ disabled.name ? 'EditIcon': 'CloseIcon' }
                    onIconClick={ () => onIconClick('name') }
                    onBlur={ () => onIconClick('name') }
                    name={'name'}
                />
            </div>
            <div className={'mb-6'}>
                <Input
                    ref={emailRef}
                    disabled={disabled.email}
                    type={'text'}
                    placeholder={'Логин'}
                    onChange={ onChangeForm }
                    value={form.email}
                    icon={ disabled.email ? 'EditIcon': 'CloseIcon' }
                    onIconClick={ () => onIconClick('email') }
                    onBlur={ () => onIconClick('email') }
                    name={'email'}
                />
            </div>
            <div className={'mb-3'}>
                <Input
                    ref={passwordRef}
                    disabled={disabled.password}
                    type='password'
                    placeholder={'Пароль'}
                    onChange={ onChangeForm }
                    value={form.password}
                    icon={disabled.password ? 'EditIcon': 'CloseIcon'}
                    onIconClick={ () => onIconClick('password') }
                    onBlur={ () => onIconClick('password') }
                    name={'password'}
                />
            </div>
            { profile.profileUpdate && !showButtons &&
                <div className='text text_type_main-small text_color_inactive'>Данные обновлены</div>
            }
            { showButtons &&
                <div className='mt-6'>
                    <Button
                        type="primary"
                        size="medium"
                        onClick={ saveProfile }
                    >
                        Сохранить
                    </Button>
                    <Button
                        type="secondary"
                        size="large"
                        onClick={ cancelEditProfile }
                    >
                        Отмена
                    </Button>
                </div>
            }
        </form>
    )
}
