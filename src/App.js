import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import { Footer } from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import { Projects } from "./components/Projects";

function App() {
  return (
    <div className="md:container text-white font-poppins tracking-widest">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
