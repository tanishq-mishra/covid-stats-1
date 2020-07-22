import React, { Component } from 'react';
import '../PreLoader.css';

class Splash extends Component {

    componentDidMount() {
        window.onload = function () {
            document.querySelector(".loader-div").classList.add('loaded')
            document.querySelector(".loader").classList.add('loader-loaded')
        }
    }

    render() {
        return (
            <div className="loader-div">
                <span className="loader">
                    <span className="loader-inner" />
                </span>
            </div>
        )
    }
}

export default Splash;