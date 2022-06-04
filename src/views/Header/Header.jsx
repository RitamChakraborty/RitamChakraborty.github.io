import "./Header.scss";
import tom from "../../assets/images/Portfolio.webp";
import resume from "../../assets/documents/Ritam\ Chakraborty\ Resume.pdf";

export default function Header() {
    return (
        <div class="page1">
            <img class="face" src={tom} alt="me!" />
            <header>
                <div class="intro">
                    <p class="bonjour">YO,</p>
                    <p class="name">I'm Ritam</p>
                    <p class="name">Chakraborty</p>
                </div>
                <nav>
                    <div class="btns">
                        <a href={resume} target="_blank">
                            <button class="btn">Resume</button>
                        </a>
                        <button class="btn">Contact</button>
                    </div>
                    <div class="socials">
                        <a href="#github" target="_blank" rel="noopener noreferrer"><i class="fab fa-github-square"></i></a>
                        <a href="#stackoverflow" target="_blank" rel="noopener noreferrer"> <i
                            class="fab fa-hackerrank"></i></a>
                        <a href="#linkedin" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                    </div>
                </nav>
            </header>
        </div>
    );
}