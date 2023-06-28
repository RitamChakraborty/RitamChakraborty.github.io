import React from "react";
import "./index.scss";

export default function Eduction() {
    return (
        <section className="Eduction">
            <h1>Eduction</h1>
            <div className="educations">
                <article className="card">
                    <h2>Techno India University</h2>
                    <div className="content">
                        <p>B. Tech in Computer Science Engineering</p>
                        <p>2016 to 2020</p>
                        <p>8.46 CGPA</p>
                    </div>
                </article>
                <article className="card">
                    <h2>Midnapore Collegiate School</h2>
                    <div className="content">
                        <p>5th to 12th Standard</p>
                        <p>2008 to 2016</p>
                        <p>85% in 10th and 72.8% in 12th</p>
                    </div>
                </article>
                <article className="card">
                    <h2>Saraswati Sishu Mandir</h2>
                    <div className="content">
                        <p>Nursery to 4th Standard</p>
                        <p>2002 to 2008</p>
                    </div>
                </article>
            </div>
        </section>
    );
}