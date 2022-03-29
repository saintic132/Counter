import {connect} from "react-redux";
import {Dispatch} from "redux";
import SetCounter from "./SetCounter";
import {RootReducerType} from "../redux/redux-store";
import {
    setCounterValueDisplayAC,
    setCountNumberAC, setDisableIncreaseButtonAC, setDisableResetButtonAC,
    setDisableSetButtonAC, setDisplayEnterValueAC, setDisplayIncorrectValueAC,
    setMaxCountValueAC,
    setStartCountValueAC
} from "../redux/counter-reducer";

let mapStateToProps = (state: RootReducerType) => {
    return {
        maxCountValueForSet: state.counter.maxCountValueForSet,
        startCountValueForSet: state.counter.startCountValueForSet,
        disableSetButton: state.counter.disableSetButton,
    }
}


export type mapDispatchToPropsType = {
    setMaxCountValue: (number: number) => void
    setCountNumber: (number: number) => void
    setStartCountValue: (number: number) => void
    setDisableSetButton: (status: boolean) => void
    setDisplayIncorrectValue: (status: boolean) => void
    setDisplayEnterValue: (status: boolean) => void
    setDisableResetButton: (status: boolean) => void
    setDisableIncreaseButton: (status: boolean) => void
    setCounterValueDisplay: () => void
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        setMaxCountValue: (number: number) => {
            dispatch(setMaxCountValueAC(number))
        },
        setStartCountValue: (number: number) => {
            dispatch(setStartCountValueAC(number))
        },
        setCountNumber: (number: number) => {
            dispatch(setCountNumberAC(number))
        },
        setDisableSetButton: (status: boolean) => {
            dispatch(setDisableSetButtonAC(status))
        },
        setDisplayIncorrectValue: (status: boolean) => {
            dispatch(setDisplayIncorrectValueAC(status))
        },
        setDisplayEnterValue: (status: boolean) => {
            dispatch(setDisplayEnterValueAC(status))
        },
        setDisableResetButton:(status: boolean) => {
            dispatch(setDisableResetButtonAC(status))
        },
        setDisableIncreaseButton: (status: boolean) => {
            dispatch(setDisableIncreaseButtonAC(status))
        },
        setCounterValueDisplay: () => {
            dispatch(setCounterValueDisplayAC())
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SetCounter)