export type ThemeType = {theme:string}

const initState={
    theme: 'dark',
};

export const themeReducer = (state:ThemeType = initState, action: ThemeActionType): ThemeType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return {...state,theme:action.payload.theme};
        }
        default: return state;
    }
};


// Action creators

type ThemeActionType = ChangeThemeType


type ChangeThemeType = ReturnType<typeof changeThemeC>
export const changeThemeC = (theme:string) => {
return {
    type: "CHANGE-THEME",
    payload:{theme},
}
};