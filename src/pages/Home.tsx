import { About } from "../components/Home/About";
import { Banner } from "../components/Home/Banner";
import { Experience } from "../components/Home/Experience";
import { Footer } from "../components/Home/Footer";
import { Icons } from "../components/Home/Icons";
import { Navbar } from "../components/Home/Navbar";
import { Projects } from "../components/Home/Projects";
import { Training } from "../components/Home/Training";

export function Home() {
  return (
    <>
      <Navbar />
      <Banner />

      <div id="about">
        <About />
      </div>

      <div id="icons">
        <Icons />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="experience">
        <Experience />
      </div>

      <div id="training">
        <Training />
      </div>

      <Footer />
    </>
  );
}
