import {UserType} from "../HW8";
import {isNumber} from "util";

type ActionType = {
    type: string
    payload: string
}
export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            let stateCurrent = [...state]
            switch (action.payload) {
                case 'up': {
                    return stateCurrent.sort((a, b) => a.name > b.name ? 1 : -1)
                }
                case 'down': {
                    return stateCurrent.sort((a, b) => a.name < b.name ? 1 : -1)
                }
            }
        }
        case 'check': {
            let stateCurrent = [...state]
            return stateCurrent.filter(el => el.age >= parseInt(action.payload))
        }
        default:
            return state
    }
}

