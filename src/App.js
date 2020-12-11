import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// router
import RouteHandler from './router/route-handler';
// layouts
import Header from './components/layouts/header';
import NavBar from './components/common/navbar';
import Content from './components/layouts/content';
// styles
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            activePage: ''
        }
    }
    render() {
        return (
            <div className="App">
                <Router>
                    <Header>
                        <NavBar />
                    </Header>
                    <Content>
                        <RouteHandler setActivePage={this.setActivePage}/>
                    </Content>
                </Router>
            </div>
        );
    }
}

export default App;
