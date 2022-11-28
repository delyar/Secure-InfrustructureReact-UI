import React from "react"
import logo from "../images/secure-cloud.png"

export default function Navbar() {
    return (
        <nav>
            <img  className="nav--icon" alt="decorative image" src={logo} />
            <h3 className="nav--logo_text">Secure Infrustructure</h3>
            <h4 className="nav--title">version 1.0.0</h4>
        </nav>
    )
}