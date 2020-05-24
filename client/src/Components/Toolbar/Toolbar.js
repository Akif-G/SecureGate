import React  from 'react';
import './Toolbar.css';
import NavigationItems from './NavigationItems/NavigationItems';


const Toolbar=(props )=>{
    return(
        <header className="Toolbar" >
            <NavigationItems></NavigationItems>
        </header>
    )
};

export default Toolbar;