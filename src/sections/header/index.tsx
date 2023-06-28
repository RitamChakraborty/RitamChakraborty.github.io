import React from "react";
import Nav from "../../components/nav";
import "./index.css";

export default function Header() {
    return (
        <>
            <div className="header-background">
                <div className="spacing"></div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path d="M0,192L60,213.3C120,235,240,277,360,261.3C480,245,600,171,720,154.7C840,139,960,181,1080,186.7C1200,192,1320,160,1380,144L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
            </div>
            <header>
                <h1>Zeroku.</h1>
                <Nav />
            </header>
        </>
    );
}