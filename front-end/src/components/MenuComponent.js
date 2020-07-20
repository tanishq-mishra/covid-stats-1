import React, { Component } from 'react'
import { Col, Row, Container } from "reactstrap";

class Menu extends Component {

    componentDidMount() {
        const app = (() => {
            let body;
            let menu;
            let menuItems;

            const init = () => {
                body = document.querySelector('body');
                menu = document.querySelector('.menu-icon');
                menuItems = document.querySelectorAll('.nav__list-item');

                applyListeners();
            }

            const applyListeners = () => {
                menu.addEventListener('click', () => { console.log('running'); return toggleClass(body, 'nav-active') });
            }

            const toggleClass = (element, stringClass) => {
                if (element.classList.contains(stringClass))
                    element.classList.remove(stringClass);
                else
                    element.classList.add(stringClass);
            }

            init();
        })();
    }


    render() {
        return (
            <div>
                <div className="menu-icon">
                    <span className="menu-icon__line menu-icon__line-left"></span>
                    <span className="menu-icon__line"></span>
                    <span className="menu-icon__line menu-icon__line-right"></span>
                </div>

                <div className="nav">
                    <div className="nav__content">
                        <ul className="nav__list">
                            <li className="nav__list-item">Home</li>
                            <li className="nav__list-item">About</li>
                            <li className="nav__list-item">Projects</li>
                            <li className="nav__list-item">Contact</li>
                        </ul>
                    </div>
                </div>
            </div>

        )
    }
}

export default Menu;