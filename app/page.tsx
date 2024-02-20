import { AboutUs } from "./components/about-us";
import { Hero } from "./components/hero/hero";
import { ContainerParallax } from "./components/image-container-parallax";
import { OurServices } from "./components/our-services";
import { Testimonials } from "./components/testimonials";
import { Contact } from "./components/ui/contact";

import { TracingBeam } from "./components/ui/tracing-beam";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <TracingBeam>
        <AboutUs />
      </TracingBeam>
      <OurServices />
      <Testimonials />
      <Contact />
    </main>
  );
}
