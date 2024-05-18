
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";
import { animateWithGsap } from "../utils/animations";

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  useGSAP(() => {
    // gsap.to("#title", {
    //   opacity: 1,
    //   y: 0,
    //   scrollTrigger: {
    //     trigger: "#title",
    //     start: "top 80%",
    //     toggleActions: "play none none none",
    //   }
    // });
    animateWithGsap('#title', { y:0, opacity:1})
    animateWithGsap('.link', { y:0, opacity:1,  duration: 1, stagger: 0.25,})
    // gsap.to(".link", {
    //   opacity: 1,
    //   y: 0,
    //   duration: 1,
    //   stagger: 0.25,
    //   scrollTrigger: {
    //     trigger: "#hightligts",
    //     start: "top 80%",
    //     toggleActions: "play none none none",
    //   }
    // });
  }, []);

  return (
    <section id="hightligts" className="w-screen overflow-hidden h-full common-padding bg-zine">
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">Get the highlights.</h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link">
              Watch the event
              <img src={rightImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>
        <VideoCarousel/>
      </div>
    </section>
  );
};

export default Highlights;
