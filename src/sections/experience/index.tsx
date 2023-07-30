import React from "react";
import "./index.scss";

export default function Experience() {
    return (
        <section id="Experience">
            <h1>Experience</h1>
            <div className="experiences">
                <article className="experience">
                    <h3>Presently Working</h3>
                    <h2><b>Software Engineer</b> at Cresen Solutions</h2>
                    <p>
                        Developed and maintained features in a Spring Boot,
                        Microservices and Angular application, ensuring reliable
                        and efficient performance.
                        Assisted in front-end styling changes and provided
                        technical support to other teams.
                        Mentored junior developers, helping them to grow in their
                        careers.
                        Participated in technical interviews to assess the skills of
                        potential candidates.
                    </p>
                </article>
                <article className="experience">
                    <h3>October, 2020 - August 2022</h3>
                    <h2><b>Jr. Product Specialist</b> at Cognizant</h2>
                    <p>
                        Worked in multiple client projects simultaneously,
                        involving multi module maven, GWT project with MySQL
                        in enhancements, debugging and database analysis
                        Increased efficiency by 90% by automating the process of
                        finding non-overridden upgrade files.
                    </p>
                </article>
            </div>
        </section>
    );
}