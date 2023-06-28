import React from "react";
import "./index.css";

export default function Landing() {
    return (
        <section id="Landing">
            <div className="description">
                <h1>Easier Deployment</h1>
                <p>
                    Develop web apps of all kinds, from large scale enterprise to
                    static websites for individuals. Fill out the form to try a demo
                    of our platform.
                </p>
                <button className="outline-btn">Read More</button>
            </div>
            <div className="card form">
                <h2>Request a Demo</h2>
                <form action="/sign-up" method="post">
                    <div className="form-control">
                        <label for="name">Name</label>
                        <input type="text" name="name" placeholder="Name" maxlength="50" required />
                    </div>
                    <div className="form-control">
                        <label for="company-name">Company Name</label>
                        <input type="text" name="company-name" placeholder="Company Name" maxLength="50" required />
                    </div>
                    <div className="form-control">
                        <label for="">Email</label>
                        <input type="email" name="email" placeholder="Email" required />
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        </section>
    );
}