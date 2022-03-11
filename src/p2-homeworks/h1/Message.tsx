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
        <div className={classNames.message}>
            <img className={classNames.avatar} src={props.avatar} alt={'avatar'}/>
            <div className={classNames.angle}/>
                <div className={classNames.content}>
                    <div className={classNames.name}>{props.name}</div>
                    <div className={classNames.text}>{props.message}</div>
                    <div className={classNames.time}>{props.time}</div>
                </div>

        </div>
    )
}

export default Message
