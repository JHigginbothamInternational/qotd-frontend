import React from "react"
import Navbar from "../navbar"
import Footer from "../footer"

export default function About(props) {
    return (
        <div className="page-wrapper">
            <Navbar />

            <div className="content-wrapper">
                <h2>About</h2>
                <p>This app is awesome.  When it wakes up in the morning, it pisses excellence.</p>
                <p>If you're not first, you're last.</p>
            </div>

            <Footer />
        </div>
   )
}