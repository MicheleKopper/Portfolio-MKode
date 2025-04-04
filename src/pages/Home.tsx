import { About } from "../components/Home/About";
import { Banner } from "../components/Home/Banner";
import { Experience } from "../components/Home/Experience";
import { Icons } from "../components/Home/Icons";
import { Navbar } from "../components/Home/Navbar";
import { Projects } from "../components/Home/Projects";
import { Training } from "../components/Home/Training";

export function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Icons />
      <Projects />
      <Experience />
      <Training />
    </>
  );
}
