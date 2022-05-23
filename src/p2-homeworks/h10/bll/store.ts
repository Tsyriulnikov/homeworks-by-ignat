import {loadingReducer} from './loadingReducer'
import {combineReducers, compose, createStore} from "redux";
import {themeReducer} from "../../h12/bll/themeReducer";

const reducers = combineReducers({
    loading: loadingReducer,
    theme: themeReducer,
})
//Для DEVTools  Redux
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//

const store = createStore(reducers, composeEnhancers())

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
