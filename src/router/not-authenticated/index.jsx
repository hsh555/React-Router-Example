import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class NotAuthenticated extends Component {
    render() {
        const { redirect } = this.props;
        if (redirect) {
            return <Redirect to="/login" />
        }
        return (
            <div>
                <p><span style={{ color: 'red' }}>Error</span> : You Are Not Authenticated</p>
                <p>please go to login page</p>
            </div>
        );
    }
}

export default NotAuthenticated;