import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <nav id="menu">
                <ul className="links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="landing.html">Landing</a></li>
                    <li><a href="generic.html">Generic</a></li>
                    <li><a href="elements.html">Elements</a></li>
                </ul>
                <ul className="actions stacked">
                    <li><a href="#" className="button primary fit">Get Started</a></li>
                    <li><a href="#" className="button fit">Log In</a></li>
                </ul>
            </nav>
        );
    }
}

export default Menu;