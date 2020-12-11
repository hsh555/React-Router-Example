import React, { Component } from 'react';

class Login extends Component {

    handleOnClick = (e) => {
        this.props.handleAuth();
    }
    render() {
        return (
            <div className="login">
                <p>Login Page</p>
                <button onClick={this.handleOnClick}>{this.props.innerText}</button>
            </div>
        );
    }
}

export default Login;