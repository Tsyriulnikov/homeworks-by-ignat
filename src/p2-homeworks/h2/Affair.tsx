import React from 'react'
import {AffairType} from "./HW2";
import classNames from './Affairs.module.css'

type AffairPropsType = {
    key: number
    affair: AffairType  // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
                    <tr key={props.affair._id}>
                    <td>{props.affair.name}</td>
                     <td>[{props.affair.priority}]</td>
                   <td>
                       <button className={classNames.button7} onClick={deleteCallback}>X</button>
                   </td>
                </tr>

)
}

export default Affair
