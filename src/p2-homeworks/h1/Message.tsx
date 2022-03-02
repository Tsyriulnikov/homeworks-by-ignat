import React from 'react'
import classNames from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}
{/*type classNames = {
    message: string
}
*/}


    function Message(props: MessagePropsType) {
    return (
        <div className={classNames.message}>
            <img src={props.avatar}/>

            <div className="parent">{props.name}</div>
            <div>{props.message}</div>
            <div>{props.time}</div>

        </div>
    )
}

export default Message
