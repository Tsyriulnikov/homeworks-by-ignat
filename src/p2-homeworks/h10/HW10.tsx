import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {loadingAC, LoadingType} from "./bll/loadingReducer";
import {AppStoreType} from "./bll/store";
import style from "./HW10.module.css"

function HW10() {
    const dispatch = useDispatch()

     const loading = useSelector<AppStoreType, LoadingType>(state => state.loading)

      const handlerSetTimeOut = () => {
        dispatch(loadingAC(false))
    };

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(handlerSetTimeOut, 2000);

    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading.isLoading
                ? (
                    <div className={style.loader}></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
