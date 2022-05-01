import React from 'react'
import { ProfileNav } from '../../components/profile/profile-nav/profile-nav'
import styles from './profile.module.css'
import { ProfileForm } from '../../components/profile/profile-form/profile-form'
import Preloader from '../../components/preloader/preloader'
import { useSelector } from 'react-redux'
import { IProfile } from '../../utils/types'

export const ProfilePage = () => {
    const profile = useSelector((state: IProfile) => state.profile)

    if (profile.loading) {
        return <Preloader />
    }

    return (
        <div className={`${styles.wrap} mt-30`}>
            <ProfileNav />
            <ProfileForm />
        </div>
    )
}
