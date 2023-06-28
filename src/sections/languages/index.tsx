import React from "react";
import "./index.css";

export default function Languages() {
    return (
        <section id="Languages">
            <h2>Supported Languages</h2>
            <div className="platforms">
                <div className="card">
                    <h3>NodeJS</h3>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                </div>
                <div className="card">
                    <h3>Python</h3>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                </div>
                <div className="card">
                    <h3>Java</h3>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
                </div>
                <div className="card">
                    <h3>Ruby</h3>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" />
                </div>
                <div className="card">
                    <h3>PHP</h3>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />
                </div>
            </div>
        </section>
    );
}