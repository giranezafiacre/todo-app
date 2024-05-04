import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{

    render(){
        return(
            <header style={headerStyle}>
            <h1>
            Todo List
            </h1>
            <Link style={linkStyle} to='/'>Home</Link>|
            <Link style={linkStyle} to='/'>About</Link>|
            <Link style={linkStyle} to='/'>Todo Dashboard</Link>
            </header>
        );
    }
    
}

const headerStyle={
    background:'rgb(19, 19, 20)',
    color:'white',
    textAlign:'center',
    padding:'10px'
}
const linkStyle = {
    color :'white',
    textDecoration:'none',
    margin:'10px'
}
export default Header;