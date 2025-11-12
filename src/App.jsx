import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificate from "./components/Certificate";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Certificate />
      <Footer />
    </div>
  );
}

export default App;
