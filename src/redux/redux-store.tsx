import {combineReducers, createStore, Store} from "redux";
import counterReducer, {CounterReducersType} from "./counter-reducer";
import {loadState, saveState} from "./localstorage";

export type RootReducerType = ReturnType<typeof rootReducer>
type ActionsType = CounterReducersType

let rootReducer = combineReducers({
    counter: counterReducer
})

const store: Store<RootReducerType, ActionsType> = createStore(rootReducer, loadState());

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    });
});

export default store