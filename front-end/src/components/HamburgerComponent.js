import React, { Component } from 'react';

class Hamburger extends Component {
    componentDidMount() {
        const menuBtn = document.querySelector('.menu-btn');
        let menuOpen = false;
        menuBtn.addEventListener('click', () => {
            if (!menuOpen) {
                menuBtn.classList.add('open');
                menuOpen = true;
            } else {
                menuBtn.classList.remove('open');
                menuOpen = false;
            }
        });
    }

    render() {
        return (
            <div className="menu-btn">
                <div className="menu-btn__burger"></div>
            </div>
        )
    }
}

export default Hamburger;