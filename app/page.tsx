import { Hero } from "./components/hero/hero";
import { ContainerParallax } from "./components/hero/image-container-parallax";
import { OurServices } from "./components/hero/our-services";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <OurServices />
      <ContainerParallax />
      <div></div>
    </main>
  );
}
