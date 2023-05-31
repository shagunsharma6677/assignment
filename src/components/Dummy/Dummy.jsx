import React,{useRef,useEffect,useLayoutEffect} from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import img from "../../../public/batminton.png";
import car1 from "../../../public/car1.jpeg";
import car2 from "../../../public/car2.jpeg";
import car3 from "../../../public/car3.jpeg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Dummy = () => {
  const component = useRef();
  const slider = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth
        }
      });
    }, component);
    return () => ctx.revert();
  });
  return (
    <div className="carousel" ref={component}>
      <div ref={slider}  className="carousel-wrapper">
        <section className="main-carousel panel">
          <div className="grid-1">
            <div className="card glow">
              <Image src={img} />
            </div>
          </div>
          <div className="grid-2">
            <Card p={"4"}>
              <Heading mb={4} size="2xl">
                {" "}
                Empowering Badminton Excellence
              </Heading>
              <Text>
                With 40 full-time students residing and training in Kanha, they
                will receive top-notch coaching from the Pullela Gopichand
                Badminton Academy. Our international-quality facility boasts 14
                courts, a 100-person viewing gallery, and the capacity to host
                tournaments at all levels. Join us as we nurture the talent of
                aspiring badminton players.
              </Text>
            </Card>
          </div>
          <div className="grid-3">
            <div className="pic-1">
              <Image src={car2} />
            </div>
            <div className="pic-2">
              <Image src={car1} />
            </div>
            <div className="pic-3">
              <Image src={car3} />
            </div>
          </div>
        </section>

        <section className="main-carousel panel">
          <div className="grid-1">
            <div className="card glow">
              <Image src={img} />
            </div>
          </div>
          <div className="grid-2">
            <Card p={"4"}>
              <Heading mb={4} size="2xl">
                {" "}
                Empowering Badminton Excellence
              </Heading>
              <Text>
                With 40 full-time students residing and training in Kanha, they
                will receive top-notch coaching from the Pullela Gopichand
                Badminton Academy. Our international-quality facility boasts 14
                courts, a 100-person viewing gallery, and the capacity to host
                tournaments at all levels. Join us as we nurture the talent of
                aspiring badminton players.
              </Text>
            </Card>
          </div>
          <div className="grid-3">
            <div className="pic-1">
              <Image src={car2} />
            </div>
            <div className="pic-2">
              <Image src={car1} />
            </div>
            <div className="pic-3">
              <Image src={car3} />
            </div>
          </div>
        </section>

        <section className="main-carousel panel">
          <div className="grid-1">
            <div className="card glow">
              <Image src={img} />
            </div>
          </div>
          <div className="grid-2">
            <Card p={"4"}>
              <Heading mb={4} size="2xl">
                {" "}
                Empowering Badminton Excellence
              </Heading>
              <Text>
                With 40 full-time students residing and training in Kanha, they
                will receive top-notch coaching from the Pullela Gopichand
                Badminton Academy. Our international-quality facility boasts 14
                courts, a 100-person viewing gallery, and the capacity to host
                tournaments at all levels. Join us as we nurture the talent of
                aspiring badminton players.
              </Text>
            </Card>
          </div>
          <div className="grid-3">
            <div className="pic-1">
              <Image src={car2} />
            </div>
            <div className="pic-2">
              <Image src={car1} />
            </div>
            <div className="pic-3">
              <Image src={car3} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dummy;
