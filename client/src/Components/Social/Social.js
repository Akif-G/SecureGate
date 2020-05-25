import React, { Fragment } from 'react';
import './Social.css'
//import github from './github.png'
const Social = (props) => {
    var mode="ModeWhite"
    if(props.mode=="black"){
        var mode="ModeBlack"
    }
    return (
        <Fragment>
            <a style={{ right: "3em" }} href="https://github.com/Akif-G/SecureTificate" className="InteractiveButton" id="Github"></a>
            <div style={{ right: "8em" }} onClick={props.ChangeMode} className="InteractiveButton" id={mode} ></div>
        </Fragment>
    )
}

export default Social;