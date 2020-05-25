import React from 'react';
import './Button.css'

const Button = (props) => {
    return (
        <button
            className="CustomButton" type="button" style={{ left: props.left, right: props.right, top: props.top, backgroundColor: props.BG, width: props.width, maxWidth: props.maxWidth }}
            onClick={(e) => props.Clicked(e, props.value)}
        >{props.value} {props.children}</button>
    )
}

export default Button;