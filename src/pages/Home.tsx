import { About } from "../components/About";
import { Banner } from "../components/Banner";
import { Experience } from "../components/Experience";
import { Navbar } from "../components/Navbar";
import { Projects } from "../components/Projects";
import { Training } from "../components/Training";

export function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Projects />
      <Experience />
      <Training />
    </>
  );
}
