import React from 'react'
import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';

declare type TIconTypes = 'secondary' | 'primary' | 'error' | 'success';

function linkIcon(props: { iconName: string, iconType: TIconTypes }) {
    if (props.iconName === 'BurgerIcon') {
        return <BurgerIcon type={props.iconType} />
    } else if (props.iconName === 'ListIcon') {
        return <ListIcon type={props.iconType} />
    } else {
        return <ProfileIcon type={props.iconType} />
    }
}

function AppHeaderLink(props: { link: string, className: string, iconName: string, iconType: TIconTypes, text: string }) {
    return (
        <a href={props.link} className={props.className}>
            {linkIcon(props)}
            <span className="pl-2">{props.text}</span>
        </a>
    );
}

AppHeaderLink.propTypes = {
    link: PropTypes.string.isRequired,
    className: PropTypes.string,
    iconName: PropTypes.string.isRequired,
    iconType: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default AppHeaderLink;
