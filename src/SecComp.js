import React, { Fragment } from "react";
import mydata from "./mydata";

class SecComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vv: false,
            ll: []
        }
    }

    componentDidMount() {
        let aa = mydata();
        this.setState({ ll: aa });
    }

    render() {
        return (
            <Fragment>
                <h1>{this.props.h}</h1>
                <br />
                <table border="1">
                    {
                        this.props.arr.map(b => <tr><td>{b}</td></tr>)
                    }
                </table>
                <div>
                    {this.state.vv ? <span>This is true</span> : <span>This is false</span>}
                </div>
                <div>
                    {
                        (function () {
                            console.log('hai')
                        })()
                    }
                </div><br />
                <ul>
                    {
                        this.state.ll.map(a => <li>{a}</li>)
                    }
                </ul><br /><br />
            </Fragment>
        );
    }
}

export default SecComp;