import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
// path pages
import pathPages from '../../../path-pages';
// styles
import './style.scss';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: '/'
        }
    }
    handleOnClick = (path) => {
        this.setState({
            activePage: path
        });
    }

    componentDidMount() {
        const { location } = this.props;
        const { pathname } = location;
        this.setState({
            activePage: pathname
        });
    }

    render() {
        return (
            <div className="navbar">
                {pathPages.map((item, index) => {
                    if (item.path === this.state.activePage) {
                        return <Link to={item.path} key={index} onClick={() => this.handleOnClick(item.path)} className='active'>{item.name}</Link>
                    }
                    return <Link to={item.path} key={index} onClick={() => this.handleOnClick(item.path)}>{item.name}</Link>
                })}
            </div>
        );
    }
}

export default withRouter(NavBar);