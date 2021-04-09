import React, { Fragment } from 'react';
import Reactotron from 'reactotron-react-js'

class FirstComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            a: 'Feroz shah kotla',
            b: ['Ganesh', 'Fathima', 'Firdous', 'Linus', 'Leela'],
            c: '',
            d: '',
            arr: []
        }
        this.myClick = this.myClick.bind(this);
        this.gClick = this.gClick.bind(this);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos').then(a => a.json()).then(b => this.setState({ arr: b }));
        Reactotron.log(this.state.arr);
    }


    myClick(e) {
        alert('this is an event')
    }

    onC(e) {
        this.setState({ c: e.target.value })

    }

    gClick(e) {
        alert(e.target.value);
    }

    render() {
        return (
            <Fragment>
                {/* <button onClick={this.myClick}>Hai</button>

                <br />
                <input type="text" name="t" onChange={(e) => this.setState({ c: e.target.value })} />
                <select name="tt" onChange={(e) => { this.setState({ d: e.target.value }) }}>
                    <option value="Newton">Newton</option>
                    <option value="Faraday">Faraday</option>
                    <option value="Einstein">Einstein</option>
                    <option value="Raman">Raman</option>
                </select>

                <br />
                {this.state.c}
                <br />
                {this.state.d}
                <br />
                <form>
                    <table>
                        <tr><td>Username</td><td><input type="text" name="uname" /></td></tr>
                        <tr><td>Password</td><td><input type="password" name="uname" /></td></tr>
                        <tr><td><input type="submit" value="Login" /></td><td><input type="reset" value="cancel" /></td></tr>
                    </table></form>
                <br />
                <h1>{this.state.a}</h1>
                <br />
                <ul>
                    {this.state.b.map(d => <li><button value={d} onClick={this.gClick}>{d.toUpperCase()}</button></li>)}
                </ul> */}
                <table>
                    {this.state.arr.filter(p => p.userId === 1).map(a => <tr><td>{a.userId}</td><td>{a.title}</td></tr>)}
                </table>
            </Fragment>
        );
    }
}

export default FirstComp;