import {connect} from "react-redux";
import {Dispatch} from "redux";
import SetCounter from "./SetCounter";
import {RootReducerType} from "../redux/redux-store";
import {
    setCounterValueDisplayAC,
    setCountNumberAC, setErrorWithInvalidDateAC,
    setMaxCountValueAC,
    setStartCountValueAC, setValidDateAC
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
    setCounterValueDisplay: () => void
    setErrorWithInvalidDate: () => void
    setValidDate: () => void
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
        setCounterValueDisplay: () => {
            dispatch(setCounterValueDisplayAC())
        },
        setErrorWithInvalidDate: () => {
            dispatch(setErrorWithInvalidDateAC())
        },
        setValidDate: () => {
            dispatch(setValidDateAC())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SetCounter)