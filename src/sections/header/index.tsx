import React from "react";
import Nav from "../../components/nav";
import "./index.scss";

export default function Header() {
    return (
        <>
            <div className="header-background">
                <div className="spacing"></div>
                <svg width="100%" height="100%" viewBox="0 0 1440 690" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="gradient" x1="50%" y1="100%" x2="50%" y2="0%"><stop offset="5%" className="stop-1"></stop><stop offset="95%" stop-color="#7bdcb5"></stop></linearGradient></defs><path d="M 0,700 C 0,700 0,350 0,350 C 106.75598086124404,321.311004784689 213.51196172248808,292.62200956937795 300,304 C 386.4880382775119,315.37799043062205 452.7081339712918,366.82296650717706 539,353 C 625.2918660287082,339.17703349282294 731.6555023923447,260.0861244019139 825,268 C 918.3444976076553,275.9138755980861 998.66985645933,370.83253588516743 1099,399 C 1199.33014354067,427.16746411483257 1319.665071770335,388.5837320574163 1440,350 C 1440,350 1440,700 1440,700 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" className="wave" transform="rotate(-180 720 350)"></path></svg>
            </div>
            <header>
                <h1>Ritam.</h1>
                <Nav />
            </header>
        </>
    );
}