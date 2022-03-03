import React from 'react'
import classNames from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={classNames.card}>
            {/* <div><img className={classNames.card__img} src={props.avatar}/></div>*/}

            <div className={classNames.card__message}>
                <div className={classNames.name}>{props.name}</div>
                <div className={classNames.message}>{props.message}</div>
                <div className={classNames.time}>{props.time}</div>            </div>
            <div className={classNames.card__corner}> </div>
            <div className={classNames.card__avatar}><img className={classNames.card__img} src={props.avatar}/></div>


        </div>
    )
}

export default Message
