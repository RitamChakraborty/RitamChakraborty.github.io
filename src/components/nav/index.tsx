import React from "react";
import "./index.css";

export default function Nav() {
    return (
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/features">Features</a></li>
                <li><a href="/docs">Docs</a></li>
            </ul>
        </nav>
    );
}   