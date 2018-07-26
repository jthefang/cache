import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header id="header" className="alt">
                <a href="index.html" className="logo"><strong>Cache</strong> <span>by James Fang</span></a>
                <nav>
                    <a href="#menu">Menu</a>
                </nav>
            </header>
        );
    }
}

export default Header;