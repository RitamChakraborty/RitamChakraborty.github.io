import Experience from "./sections/experience";
import Education from "./sections/education";
import Footer from "./sections/footer";
import Header from "./sections/header";
import Landing from "./sections/landing";
import Project from "./sections/project";
import Skill from "./sections/skill";

export default function App() {
    return (
        <main>
            <Header />
            <Landing />
            <Experience />
            <Education />
            <Skill />
            <Project />
            <Footer />
        </main>
    );
}