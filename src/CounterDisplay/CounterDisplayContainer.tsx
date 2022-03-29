import { connect } from "react-redux";
import CounterDisplay from "./CounterDisplay";
import {RootReducerType} from "../redux/redux-store";

let mapStateToProps = (state: RootReducerType) => {
    return {
        countNumber: state.counter.countNumber,
        maxCountValue: state.counter.maxCountValue,
        valueIsEntering: state.counter.valueIsEntering,
        displayIncorrectValue: state.counter.displayIncorrectValue
    }
}

export default connect(mapStateToProps, {})(CounterDisplay)