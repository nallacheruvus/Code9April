import React from 'react';

class ThirdComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uname: '',
            pass: ''
        }
        this.onC = this.onC.bind(this);
        this.onS = this.onS.bind(this);
    }

    onC(e) {
        let n = e.target.name;
        let v = e.target.value;
        this.setState({ [n]: v });
    }

    onS(e) {
        e.preventDefault();
        alert(this.state.uname + ' ' + this.state.pass)
    }

    render() {
        return (
            <>
                <form onSubmit={this.onS}>
                    <table>
                        <tr><td>Username</td><td><input onChange={this.onC} type="text" name="uname" /></td></tr>
                        <tr><td>Password</td><td><input onChange={this.onC} type="password" name="pass" /></td></tr>
                        <tr><td><input type="submit" value="Login" /></td><td><input type="reset" value="cancel" /></td></tr>
                    </table>
                </form>
            </>
        );
    }
}

export default ThirdComp;