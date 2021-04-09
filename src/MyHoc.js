import React from 'react';
var newData = {
    data: 'This is some data from HOC'
}

var MyHoc = ComposedComponent => class extends React.Component {
    componentDidMount() {
        this.setState({ data: newData.data })
    }
    render() {
        return <ComposedComponent {...this.props} {...this.state} />
    }
}

class MyComponent extends React.Component {
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        return (
            <table border="1">
                <tr><td>{this.props.data}</td></tr>
            </table>
        );
    }
}

export default MyHoc(MyComponent);

