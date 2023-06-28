import React from "react";
import "./index.scss";

export default function Landing() {
    return (
        <section id="Landing">
            <div className="description">
                <h3>Hello, 🖐️</h3>
                <h1>I'm Ritam Chakraborty</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laboriosam quasi itaque quod reiciendis a dolore sed magni rem doloribus.
                </p>
                <button className="outline-btn">
                    <a target="_blank" href="/documents/Ritam Chakraborty Resume.pdf">Download Resume</a>
                </button>
            </div>
            <div className="card form">
                <div className="avatar">
                    <img src="/images/avatar.png" alt="avatar" />
                </div>
                <form action="/sign-up" method="post">
                    <div className="form-control">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" placeholder="Name" maxlength="50" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="">Email</label>
                        <input type="email" name="email" placeholder="Email" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="company-name">Message</label>
                        <input type="text" name="message" placeholder="Message" maxLength="200" required />
                    </div>
                    <button type="submit">Let's Talk</button>
                </form>
            </div>
        </section>
    );
}