import React from 'react'
import './Button.css'

function Button(props) {
    return (
        <button className={props.outline ? 'btn outline' : 'btn primary'}>
            {props.children}
        </button>
    )
}

export default Button
