import { Button, Heading } from "@chakra-ui/react";
import React from "react";
import img from "../../../public/460x500.png";

const Feature = () => {
  return (
    <div className="feature">
      <section className=" body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-1/2  w-full    mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <div className="feat-img-div"></div>
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <Heading fontSize={"50px"}>
              BE A PART OF WELLNESS COMMITNITY
            </Heading>
            <p style={{ fontSize: "26px" }}>
              The Heartfulness International Sports Center (HISC) was conceived
              in 2020 as an integrated multi-sport facility to promote
              excellence in sports, with the guidance of leading sports icons
              such as Pullela Gopichand, P. V. Sindhu, and with a close
              association of sporting inspirations like that of Havier Zanett,
              Rohit Sharma, R. Ashwin, and Ravi Shashtri.
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
