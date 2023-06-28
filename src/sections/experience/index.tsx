import React from "react";
import "./index.scss";

export default function Experience() {
    return (
        <section id="Experience">
            <h1>Experience</h1>
            <div className="experiences">
                <article className="experience">
                    <h3>August, 2023</h3>
                    <h2><b>Software Engineer</b> at Cresen Solutions</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates saepe fugiat ipsum. Expedita commodi maxime facere blanditiis, error est iure?</p>
                </article>
                <article className="experience">
                    <h3>October, 2021</h3>
                    <h2><b>Jr. Product Specialist</b> at Cognizant</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates saepe fugiat ipsum. Expedita commodi maxime facere blanditiis, error est iure?</p>
                </article>
                <article className="experience">
                    <h3>October, 2020</h3>
                    <h2><b>Programmer Analyst</b> at Cognizant</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates saepe fugiat ipsum. Expedita commodi maxime facere blanditiis, error est iure?</p>
                </article>
            </div>
        </section>
    );
}