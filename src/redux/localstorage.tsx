import {RootReducerType} from "./redux-store";


export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('counter');
        if (serializedState) {
            return JSON.parse(serializedState)
        }
        return undefined
        ;
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state: RootReducerType) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('counter', serializedState);
    } catch {
    }
};