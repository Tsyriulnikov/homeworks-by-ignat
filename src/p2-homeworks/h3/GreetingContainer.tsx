import React, {useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name:string) =>void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов

    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string|null>(null)

    let disabledAddButton:boolean = true
    if (name !== '')  disabledAddButton = false

    const setNameCallback = (e: string) => {
        setName(e)
        setError(null)
        disabledAddButton=false
    }

    const addUser = () => {
      if(name.trim()!=='') {
          addUserCallback(name)
          alert(`Hello! ${name}`)
          setName('')
      } else {
          setError("Name is required")
          setName('')
      }
    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            disabledAddButton={disabledAddButton}
        />
    )
}

export default GreetingContainer
