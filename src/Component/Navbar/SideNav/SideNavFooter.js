import React from 'react'
import img from "../../../assests/Images/appstore.svg"
import img2 from "../../../assests/Images/playstore.svg"
import './SideNavFooter.css'
// import styled from 'styled-components'

function SideNavFooter() {
    return (
        <div className="footer">
            <h6> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua</h6>
            <div className="store d-flex">
                <img src={img} alt="AppStore"/>
                <img src={img2} alt="PlayStore"/>
            </div>
        </div>
    )
}

export default SideNavFooter


