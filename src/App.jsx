import Hero from "./components/Hero";
import Services from "./components/Services";
import LayoutWrapper from "./components/layout/LayoutWrapper";
import "./reset.css";

function App() {
  return (
    <LayoutWrapper>
      <Hero />
      <Services />
      {/* slider */}
    </LayoutWrapper>
  );
}

export default App;
