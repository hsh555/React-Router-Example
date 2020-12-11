import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './style.scss';

class NotFound extends Component {

    handleOnClick = () => {
        const { history } = this.props;
        history.push('/');
    }

    render() {
        const { location } = this.props;
        const { pathname } = location;
        return (
            <div className='not-found-wrapper'>
                <h1>404 Error</h1>
                <p className="zoom-area"><b>Note:</b> We can not found page <b>{pathname}</b> </p>
                <section className="error-container">
                    <span>4</span>
                    <span><span class="screen-reader-text">0</span></span>
                    <span>4</span>
                </section>
                <div className="link-container">
                    <button className="more-link" onClick={this.handleOnClick}>go to home page</button>
                </div>
            </div>
        );
    }
}

export default withRouter(NotFound);