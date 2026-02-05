import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HeroSlider from "./components/HeroSlider";
import ReikiMeaning from "./components/sections/ReikiMeaning";
import OriginOfReiki from "./components/sections/OriginOfReiki";
import Benefits from "./components/sections/Benefits";
import AboutJane from "./components/sections/AboutJane";
import Levels from "./components/sections/Levels";
import Newsletter from "./components/sections/Newsletter";
import Testimonial from "./components/sections/Testimonial";

function App() {
  return (
    <div className="min-h-screen min-w-0 overflow-x-hidden bg-page-bg antialiased">
      <Header />
      <main>
        <HeroSlider />
        <ReikiMeaning />
        <OriginOfReiki />
        <Benefits />
        <AboutJane />
        <Levels />
        <Newsletter />
        <Testimonial />
      </main>
      <Footer />
    </div>
  );
}

export default App;
