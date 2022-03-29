import {combineReducers, createStore, Store} from "redux";
import counterReducer, {CounterReducersType} from "./counter-reducer";
import {ReduxStateType} from "../../../../Social-network/social-network-ts/src/redux/redux-store";

export type RootReducerType = ReturnType<typeof rootReducer>
type ActionsType = CounterReducersType

let rootReducer = combineReducers({
    counter: counterReducer
})


const store: Store<ReduxStateType, ActionsType> = createStore(rootReducer);

export default store