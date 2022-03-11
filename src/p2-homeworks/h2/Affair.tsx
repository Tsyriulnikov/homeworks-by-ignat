import React from 'react'
import {AffairType} from "./HW2";
import classNames from './Affairs.module.css'

type AffairPropsType = {
     key:number
    affair: AffairType  // need to fix any
    deleteAffairCallback: (_id:number)=>void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix

    return (
        <div className={classNames.affair}>

            <span/> {props.key} {props.affair.name} {props.affair.priority}

            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
