import Hero from "./sections/Hero.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import Navbar from "./components/NavBar.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import Experience from "./sections/Experience.jsx";

const App = () => {
    return (
        <>
            <Navbar/>
            <Hero/>
            <ShowcaseSection/>
            <FeatureCards/>
            <Experience/>
        </>
    )
}
export default App


