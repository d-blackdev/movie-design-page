import React from 'react'
import {FaHome} from 'react-icons/fa'
import './SideNav.css'

function SideNav(props) {
    return (
        <div>
            <div className="d-flex align-items-center cat-cont  ">
                <span className="side-icon"> {props.icon}</span>
                <h5 className="mt-3 text">{props.title}</h5>
            </div>
        </div>
    )
}

export default SideNav
