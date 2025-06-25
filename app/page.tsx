import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
// import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Skills from "./pages/Skills";

export default function Portfolio() {
  return (
    <div className="scroll-smooth flex-1 items-center flex-col justify-center text-center w-full h-full overflow-x-hidden">
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      {/* <section id="projects"><Projects /></section> */}
      <section id="resume">
        <Resume />
      </section>
      <section id="contact">
        {" "}
        <Contact />
      </section>
    </div>
  );
}
