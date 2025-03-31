import React from 'react';
import './Nav.scss';
import { Link, NavLink } from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return (
            <nav className="topnav">
                <NavLink to="/" activeClassName="active" exact="true">Home</NavLink>
                <NavLink to="/todo" activeClassName="active">ToDo</NavLink>
                <NavLink to="/about" activeClassName="active">About</NavLink>
                <NavLink to="/users" activeClassName="active">User</NavLink>
            </nav>
        );
    }
}

export default Nav;