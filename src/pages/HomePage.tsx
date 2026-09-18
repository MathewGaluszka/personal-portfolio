import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
} from "../components";
import FadeIn from "../components/FadeIn";

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) {
      const timer = window.setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 80);
      return () => window.clearTimeout(timer);
    }

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.hash]);

  return (
    <FadeIn transitionDuration={700}>
      <Main />
      <Expertise />
      <Timeline />
      <Project />
      <Contact />
    </FadeIn>
  );
}

export default HomePage;
