import React from 'react';
import { increment } from './actions';

class InsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scid: 0,
            scname: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        let nam = e.target.name;
        let val = e.target.value;
        this.setState({ [nam]: val })
    }


    onSubmit(e) {
        e.preventDefault();
        const { increment } = this.props;
        increment(this.state.scid + ';' + this.state.scname);
    }


    render() {

        const { counter } = this.props;
        return (
            <>
                <form onSubmit={this.onSubmit}>
                    SCID:<input onChange={e => this.onChange(e)} type="text" name="scid" /><br />
                    SCNAME:<input onChange={e => this.onChange(e)} type="text" name="scname" /><br />
                    <input type="submit" value="Send" onClick={this.onSubmit} />
                </form>



                {/* <button value="Going And Fetching" onClick={(e) => increment(e.target.value)}>Send</button><button onClick={decrement}>Reset</button> */}
                <span>{counter}</span>
            </>
        );
    }
}

class Sched {
    constructor(id, name) {
        this.id = id;
        this.nam = name;
    }
}


export default InsForm;