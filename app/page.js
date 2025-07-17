import About from "@/Component/About";
import Contact from "@/Component/Contact";
import Header from "@/Component/Header";
import Projects from "@/Component/Projects";
import Testimonails from "@/Component/Testimonails";
export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <About />
      <Projects />
      <Testimonails />
      <Contact />
    </div>
  );
}
