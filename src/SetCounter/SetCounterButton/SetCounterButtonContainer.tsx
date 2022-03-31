import { connect } from "react-redux"
import SetCounterButton from "./SetCounterButton";
import {RootReducerType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {setCounterValueDisplayAC} from "../../redux/counter-reducer";

let mapStateToProps = (state: RootReducerType) => {
    return {
        disableSetButton: state.counter.disableSetButton
    }
}

export type mapDispatchToSetCounterButtonType = {
    setCounterValueDisplay: () => void
}

let mapDispatchToProps = (dispatch: Dispatch):mapDispatchToSetCounterButtonType => {
    return {
        setCounterValueDisplay: () => {
            dispatch(setCounterValueDisplayAC())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SetCounterButton)