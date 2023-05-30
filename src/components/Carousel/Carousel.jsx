import React from "react";
import car1 from "../../../public/car1.jpeg";
import car2 from "../../../public/car2.jpeg";
import car3 from "../../../public/car3.jpeg";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

const Carousel = () => {
  return (
    <>
      <main className="flex justify-center align-middle carousel">
        <div class="car-card">
          <Card>
            <Heading size="md"> Customer dashboard</Heading>

            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              aliquid, earum ducimus rem aliquam dolore, facere blanditiis
              dolores alias cupiditate quia, et officiis impedit tempore nam
              harum expedita iusto fugiat!
            </Text>
          </Card>
        </div>
        <Box className="car1">
          <Image src={car1} alt="car1" />
        </Box>
        <Box className="car3">
          <Image src={car2} alt="car1" />
        </Box>
        <Box className="car2">
          <Image src={car3} alt="car1" />
        </Box>
      </main>
    </>
  );
};

export default Carousel;
