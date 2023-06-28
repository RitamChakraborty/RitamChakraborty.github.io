import React from "react";
import "./index.scss";

export default function Eduction() {
    return (
        <section id="Education">
            <h1>Eduction</h1>
            <div className="educations">
                <article className="card">
                    <h2>Techno India University</h2>
                    <div className="content">
                        <p><b>B. Tech in Computer Science Engineering</b></p>
                        <div className="container">
                            <p>2016 to 2020</p>
                            <p><i>8.46 CGPA</i></p>
                        </div>
                    </div>
                </article>
                <article className="card">
                    <h2>Midnapore Collegiate School</h2>
                    <div className="content">
                        <p><b>5th to 12th Standard</b></p>
                        <div className="container">
                            <p>2008 to 2016</p>
                            <p><i>85% in 10th and 72.8% in 12th</i></p>
                        </div>
                    </div>
                </article>
                <article className="card">
                    <h2>Saraswati Sishu Mandir</h2>
                    <div className="content">
                        <p><b>Nursery to 4th Standard</b></p>
                        <p>2002 to 2008</p>
                    </div>
                </article>
            </div>
        </section>
    );
}