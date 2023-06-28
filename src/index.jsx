import Footer from "./sections/footer";
import Header from "./sections/header";
import Hosting from "./sections/hosting";
import Installation from "./sections/installation";
import Landing from "./sections/landing";
import Languages from "./sections/languages";
import Numbers from "./sections/numbers";

export default function App() {
    return (
        <main>
            <Header />
            <Landing />
            <Numbers />
            <Installation />
            <Hosting />
            <Languages />
            <Footer />
        </main>
    );
}