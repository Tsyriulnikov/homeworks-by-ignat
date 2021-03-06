import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import classNames from './Affairs.module.css'

type AffairsPropsType = {
    data: AffairType[]
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {


    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />))


    const setAll = () => {
        props.setFilter('all')
    }
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div>
            <table className={classNames.table_Hw2}>
                <tbody>
                {mappedAffairs}
                </tbody>
            </table>
            <button className={classNames.button7} onClick={setAll}>All</button>
            <button className={classNames.button7} onClick={setHigh}>High</button>
            <button className={classNames.button7} onClick={setMiddle}>Middle</button>
            <button className={classNames.button7} onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
