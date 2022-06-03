import React, {useState} from "react";
import {requestAPI} from "./request-api";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

export const Request = () => {
    let [state, setState] = useState<{}|null>(null)
    let [errorMessage, setErrorMessage] = useState<{}|null>(null)
    let [checkBoxState, setCheckBoxState] = useState(true)

    const handleOnclick = () => {
        requestAPI.createSuccess(checkBoxState)
            .then((res) => {
                setErrorMessage(null)
                setState(res.data)
            })
            .catch((error) => {
                setState(null)
                if (error.response) setErrorMessage(error.response.data);
                console.log({...error});
                console.log(error.response ? error.response.data.errorText : error.message);
            })
    }
    const onChangeCheckBox = () => {
        setCheckBoxState(checkBoxState => !checkBoxState)
    }
    return (
        <div>
            <hr/>
            <div>homeworks 13</div>
            <br/>
            <SuperButton onClick={handleOnclick}>Success</SuperButton>

            <input type="checkbox"
                   onChange={onChangeCheckBox}
                   checked={checkBoxState}/>

            {state && <div>{JSON.stringify(state)}</div>}
            {errorMessage && <div>{JSON.stringify(errorMessage)}</div>}

        </div>


    )
}