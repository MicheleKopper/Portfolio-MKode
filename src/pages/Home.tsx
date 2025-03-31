import { Banner } from "../components/Banner";
import { Navbar } from "../components/Navbar";
import { Projects } from "../components/Projects";


export function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Projects />
    </>
  );
}
