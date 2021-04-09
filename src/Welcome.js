import React from "react";

class Welcome extends React.Component {
    render() {
        return (
            <div>A warm Welcome to you {this.props.user}</div>
        )
    }
}

const withUser = (WrappedComponent) => {
    return class extends React.Component {
        render() {
            if (this.props.user) {
                return (
                    <WrappedComponent {...this.props} />
                )
            }
            return <div>Welcome you are a Guest Please register</div>
        }
    }
}

const withLoader = (WrappedComponent) => {
    return class extends WrappedComponent {
        render() {
            const { isLoaded } = this.props;
            if (!isLoaded) {
                return <div>Still Loading......</div>;
            }
            return super.render();
        }
    }
}

export default withLoader(withUser(Welcome));