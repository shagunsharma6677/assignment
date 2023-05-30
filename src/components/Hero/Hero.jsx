import React from "react";
import img from "../../../public/5494.jpg";
import Header from "../Header/Header";
import { Button, Heading } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";

const Hero = () => {
  return (
    <>
      <section class="text-gray-600 hero body-font">
        <div className="bg-img">
          <Header />
          <div class="container flex flex-wrap mt-16 mx-auto items-center">
            <div class="md:w-1/2   md:pr-12 md:py-8 mb-10 md:mb-0 pb-10">
              <Button className="btn" colorScheme="red" borderRadius={"3xl"}>
                Start Your healthy Lifestyle
              </Button>
              <Heading fontSize={"5xl"} lineHeight={"52px"} color={"black"}>
                BEGIN YOUR TRANSFORMATION TODAY
              </Heading>
              <p class="leading-5  max-w-sm m-4 ml-0 text-base">
                Locavore cardigan small batch roof party blue bottle blog
                meggings sartorial jean shorts kickstarter migas sriracha
                church-key synth succulents. Actually taiyaki neutra, distillery
                gastropub pok pok ugh.
              </p>
              <Button
                border={"1px solid grey"}
                color={"grey"}
                colorScheme={"transparent"}
                borderRadius={"3xl"}
                className="btn"
                _hover={{
                  bg: "white",
                }}
              >
                Show More
                <ArrowRightIcon marginLeft={"3"} />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
