import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import About from "./sections/About/About";
import Contact from "./sections/Contact/Contact";
import Education from "./sections/Education/Education";
import Home from "./sections/Home/Home";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Home />

        <About />

        <Skills />

        <Projects />

        <Education />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
