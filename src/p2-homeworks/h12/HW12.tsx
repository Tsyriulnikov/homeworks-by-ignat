import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC, ThemeType} from "./bll/themeReducer";

const themes = ['dark','red', 'some','orange','blue'];

function HW12() {
    // const theme = 'some'; // useSelector
    const theme = useSelector<AppStoreType, string>(state => state.theme.theme)


    const dispatch = useDispatch()
    // useDispatch, onChangeCallback
    const onChangeOption = (selectTheme:string) => {
        dispatch(changeThemeC(selectTheme))
    }
    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <div>
                <SuperRadio
                    name={'radio'}
                    options={themes}
                    value={theme}
                    onChangeOption={onChangeOption}
                />
            </div>
            <hr/>
        </div>
    );
}

export default HW12;
