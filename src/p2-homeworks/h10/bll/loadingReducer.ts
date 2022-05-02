export type LoadingType = {
    isLoading: boolean
}

const initState = {
    isLoading: false
}


export const loadingReducer = (state: LoadingType = initState, action: LoadingActionType): LoadingType => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {...state,isLoading:action.payload.isLoading}
        }
        default:
            return {...state}
    }
}

type LoadingActionType = ReturnType<typeof loadingAC>
export const loadingAC = (isLoading: boolean) => {
    return {
        type:"LOADING",
        payload:{
            isLoading,
        },
    }as const
}