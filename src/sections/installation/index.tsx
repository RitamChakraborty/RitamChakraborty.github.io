import React from "react";
import "./index.css";

export default function Installation() {
    return (
        <section id="Installation">
            <div className="carbon card">
                <h3>
                    <code>
                        npm install -g Zeroku-cli
                    </code>
                </h3>
                <h3>
                    <span className="material-icons">
                        content_copy
                    </span>
                </h3>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Easy to use, cross platform CLI</p>
                </div>
                <div className="card">
                    <p>Deploy in seconds</p>
                </div>
            </div>
        </section>
    );
}