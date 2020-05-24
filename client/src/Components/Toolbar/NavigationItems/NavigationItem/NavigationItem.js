import React from 'react';
import './NavigationItem.css'
import { NavLink } from 'react-router-dom'

const navigationItem = (props) => {
    return (
        <div className="NavigationItem" >
            <NavLink activeClassName="active" activeStyle={props.styles} to={props.link} exact>{props.children} </NavLink>
        </div>
    )
};

export default navigationItem;
