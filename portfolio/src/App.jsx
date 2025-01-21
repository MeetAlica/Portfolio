import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Work />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
