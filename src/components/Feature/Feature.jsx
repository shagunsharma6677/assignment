import { Button, Heading } from "@chakra-ui/react";
import React from "react";
import img from "../../../public/460x500.png";

const Feature = () => {
  return (
    <div className="feature">
      <section className="text-gray-600  body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full border-2  bg-slate-400 mb-10 lg:mb-0 rounded-lg overflow-hidden">
            {/* <img
              alt="feature"
              className="object-cover object-center h-full w-full"
              src={img}
            /> */}
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <Heading>BE A PART OF WELLNESS COMMITNITY</Heading>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
              accusamus voluptas corporis cumque, placeat obcaecati laboriosam
              rerum culpa error iste tempora. Quia temporibus aliquid
              reiciendis. Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Minima nisi quaerat, quisquam explicabo iste dolorum nihil?
              Perspiciatis est consequuntur quos? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Nihil, nam ipsam. Architecto vero
              facilis porro excepturi inventore unde impedit consequuntur.
            </p>
            <Button
              colorScheme="orange"
              width={"200px"}
              p={"25px"}
              rounded="100px"
              m={"10px"}
            >
              SIGN UP NOW
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;
