import HeroSlider from "../components/HeroSlider";
import ReikiMeaning from "../components/sections/ReikiMeaning";
import OriginOfReiki from "../components/sections/OriginOfReiki";
import Benefits from "../components/sections/Benefits";
import AboutJane from "../components/sections/AboutJane";
import Levels from "../components/sections/Levels";
import Blog from "../components/sections/Blog";
import Gallery from "../components/sections/Gallery";
import Newsletter from "../components/sections/Newsletter";
import Testimonial from "../components/sections/Testimonial";

export default function HomePage() {
  return (
    <main>
      <HeroSlider />
      <ReikiMeaning />
      <OriginOfReiki />
      <Benefits />
      <AboutJane />
      <Levels />
      <Blog />
      <Gallery />
      <Newsletter />
      <Testimonial />
    </main>
  );
}
