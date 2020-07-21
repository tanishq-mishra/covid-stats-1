import React, { Component } from 'react'
import { Link } from "react-router-dom";

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
                menu.addEventListener('click', () => toggleClass(body, 'nav-active'));
                menuItems[0].addEventListener('click', () => toggleClass(body, 'nav-active'));
                menuItems[1].addEventListener('click', () => toggleClass(body, 'nav-active'));
                menuItems[2].addEventListener('click', () => toggleClass(body, 'nav-active'));
            }

            const toggleClass = (element, stringClass) => {
                if (element.classList.contains(stringClass))
                    element.classList.remove(stringClass);
                else
                    element.classList.add(stringClass);
            }

            init();
        });

        app();
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
                            <li className="nav__list-item">
                                <Link to="/home">
                                    Home
                                </Link>
                            </li>
                            <li className="nav__list-item">
                                <Link to="/about">
                                    About
                                </Link>
                            </li>
                            <li className="nav__list-item">
                                <Link to="/projects">
                                    Projects
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        )
    }
}

export default Menu;