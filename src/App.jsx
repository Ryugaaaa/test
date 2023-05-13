import Hero from "./components/Hero";
import Services from "./components/Services";
import Slider from "./components/Swiper/Slider";
import LayoutWrapper from "./components/layout/LayoutWrapper";
import "./reset.css";

function App() {
  return (
    <LayoutWrapper>
      <Hero />
      <Services />
      <Slider />
    </LayoutWrapper>
  );
}

export default App;
