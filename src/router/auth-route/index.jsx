import React, {Component} from 'react';
// auth route
import NotAuthenticated from '../not-authenticated';

class AuthRoute extends Component {
    render() {
        const { isAuthenticated, children } = this.props;
        if (isAuthenticated) {
            console.log('hi')
            return children;
        }
        return <NotAuthenticated/>
    }
}

export default AuthRoute;