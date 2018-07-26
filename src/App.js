import React, { Component } from 'react';
import './assets/css/main.css';
import Header from './Header';
import Menu from './Menu';
import Banner from './Banner';
import Wall from './Wall';
import Footer from './Footer';

class App extends Component {
    render() {
        return (
            <div id="wrapper">

                <Header />
                <Menu />
                <Banner />

                <div id="main">
                    <Wall />
                </div>

                <Footer/>
                
            </div>
        );
    }
}

export default App;