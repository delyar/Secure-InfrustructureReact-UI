import React from "react"
import logo from "../images/secure-cloud.png"

export default function Navbar() {
    return (
        <nav>
            <img  className="nav--icon" src={logo} />
            <h3 className="nav--logo_text">Secure Infrustructure</h3>
            <h4 className="nav--title">Intern Project</h4>
        </nav>
    )
}