import React from 'react'

function AppHeaderLink(props: {
    link: string,
    className: string,
    icon: React.ReactFragment,
    text: string
}) {
    return (
        <a href={props.link} className={props.className}>
            {props.icon}
            <span className="pl-2">{props.text}</span>
        </a>
    )
}

export default AppHeaderLink
