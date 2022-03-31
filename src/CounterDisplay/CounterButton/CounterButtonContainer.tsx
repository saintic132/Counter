import {connect} from "react-redux";
import {RootReducerType} from "../../redux/redux-store";
import {increaseCountNumberAC, resetCountNumberAC} from "../../redux/counter-reducer";
import {Dispatch} from "redux";
import CounterButton from "./CounterButton";


let mapStateToProps = (state: RootReducerType) => {
    return {
        countNumber: state.counter.countNumber,
        maxCountValue: state.counter.maxCountValue,
        disableResetButton: state.counter.disableResetButton,
        disableIncreaseButton: state.counter.disableIncreaseButton
    }
}

export type mapDispatchToPropsType = {
    increaseCountNumber: () => void
    resetCountNumber: () => void
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        increaseCountNumber: () => {
            dispatch(increaseCountNumberAC())
        },
        resetCountNumber: () => {
            dispatch(resetCountNumberAC())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterButton)