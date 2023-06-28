import React from "react";
import "./index.css";

export default function Numbers() {
    return (
        <section id="Numbers">
            <aside>
                <p>
                    Welcome to the best platform for building applications of all types with modern architecture and scaling
                </p>
            </aside>
            <div>
                <article>
                    <span className="material-icons">
                        storage
                    </span>
                    <h1>10,349,405</h1>
                    <p>Deployments</p>
                </article>
                <article>
                    <span className="material-icons">
                        cloud_upload
                    </span>
                    <h1>987 TB</h1>
                    <p>Deployments</p>
                </article>
                <article>
                    <span className="material-icons">
                        share
                    </span>
                    <h1>2,343,265</h1>
                    <p>Deployments</p>
                </article>
            </div>
        </section>
    );
}