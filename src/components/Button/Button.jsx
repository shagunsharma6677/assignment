import { Button, ButtonProps, Flex } from "@chakra-ui/react";

export  function BtnComp(props) {
  return (
    <Flex h="100vh" justifyContent="center" alignItems="center">
      <Button
        {...props}
        /* flex={1} */
        px={4}
        fontSize={"sm"}
        rounded={"full"}
        bg={"red.400"}
        color={"white"}
        boxShadow={
          "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
        }
        _hover={{
          bg: "blue.500",
        }}
        _focus={{
          bg: "blue.500",
        }}
      >
        Sign Up
      </Button>
    </Flex>
  );
}
