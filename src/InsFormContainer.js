import { increment, decrement, incrementAsync } from "../src/actions/index";
import InsForm from "./Insform";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: (x) => dispatch(incrementAsync(x)),
        decrement: () => dispatch(decrement())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InsForm);
