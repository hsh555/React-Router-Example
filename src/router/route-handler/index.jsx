import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthRoute from '../auth-route';
// routes
import pathRoutes from '../../routes';

class RouteHandler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: true
        }
    }
    handleAuth = () => {
        this.setState(prevState => {
            return {
                isAuthenticated: !prevState.isAuthenticated
            }
        });
    }

    render() {
        return (
            <Switch>
                {pathRoutes.map((route, index) => {
                    if (route.needAuthenticate) {
                        return (
                            <Route path={route.path} exact key={index}>
                                <AuthRoute isAuthenticated={this.state.isAuthenticated}>
                                    <route.component />
                                </AuthRoute>
                            </Route>
                        );
                    } else {
                        if (route.name === 'login') {
                            return (
                                <Route path={route.path} exact key={index}>
                                    <route.component handleAuth={this.handleAuth} innerText={this.state.isAuthenticated ? 'logout' : 'login'} />
                                </Route>
                            );
                        }
                        return (
                            <Route path={route.path} exact key={index}>
                                <route.component />
                            </Route>
                        );
                    }
                })}
            </Switch>
        );
    }
}

export default RouteHandler;