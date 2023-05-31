"use client";
import { Heading } from "@chakra-ui/react";
import React from "react";

const Banner = () => {
  return (
    <>
      <div className="text-center px-28 Banner py-28">
        <Heading className="" fontSize={"4xl"}>
          BEGIN YOUR TRANSFORMATION TODAY
        </Heading>
        <p className="max-w-5xl m-auto text-lg">
          "Whether you are in sports or any other field, excellence is what you
          must always strive for. Heartfulness teaches you that in how they
          transformed this place which was as barren as it can get."
        </p>
      </div>
    </>
  );
};

export default Banner;
