import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <AppBar
                title="Colorblind"
                iconElementLeft={<div></div>}
            />
        );
    }
}

export default Header;
