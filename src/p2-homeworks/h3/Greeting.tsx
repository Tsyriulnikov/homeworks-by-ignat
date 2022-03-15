import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: string) => void
    addUser: () => void
    error: string | null
    totalUsers: number
    disabledAddButton:boolean
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers,disabledAddButton
    } // деструктуризация пропсов
) => {

    const inputClass = error ? s.error : ""

    const onChangeInputName = (e: ChangeEvent<HTMLInputElement>) => setNameCallback(e.currentTarget.value)

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") addUser()
    }

    return (
        <div>
            <input value={name}
                   onChange={onChangeInputName}
                   onKeyPress={onKeyPressHandler}
                   className={inputClass}/>
            <button onClick={addUser}
            disabled={disabledAddButton}
            className={s.button7}
            >Add</button>
            <span className={s.totalUsersSpan}>  User count: {totalUsers}</span>
            {error && <div className={s.error_message}>{error}</div>}
        </div>
    )
}
export default Greeting
