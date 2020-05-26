import React from 'react';
import './Button.css'

const Button = (props) => {
    if (props.NotClick) {
        return (
            <button
                className="CustomButtonNotClickable" type="button" style={{ left: props.left, right: props.right, top: props.top, backgroundColor: props.BG, width: props.width, maxWidth: props.maxWidth ,userSelect: "text"}}
            >{props.value} {props.children}</button>
        )
    }
    else {
        return (
            <button
                className="CustomButton" type="button" style={{ left: props.left, right: props.right, top: props.top, backgroundColor: props.BG, width: props.width, maxWidth: props.maxWidth }}
                onClick={(e) => props.Clicked(e, props.value)}
            >{props.value} {props.children}</button>
        )
    }
}

export default Button;