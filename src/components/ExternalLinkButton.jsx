import React, { Fragment } from "react";
import {
  Button,
  Container,
  Header,
  Square,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
const ExternalLinkButton = (props) => {
  const lightBgColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Fragment>
      {/* <Square w={10} h={10} bg={lightBgColor} mr={0} borderRadius="lg"> */}
      <Button
        as="a"
        // to={props.href} // to?
        href={props.href}
        target={props.target}
        rel={props.rel}
        textDecoration="none"
        colorScheme={props.colorScheme}
        h="4rem"
        // w="14rem"
        w={["sm", "md", "lg", "2x"]}
        maxW="90vw"
        fontSize={["sm", "md", "lg", "2x"]}
        {...props}
      >
        {/* <Flex
          alignItems="center"
          direction="column"
          justifyContent="center"
          m={0}
          p={0}
        >
          {props.iconOne}
          <Flex
            alignItems="center"
            direction="row"
            justifyContent="center"
            m={0}
            p={0}
          > */}
        {props.content}
        {/* </Flex> */}
        {props.icon2}
        {/* </Flex> */}
      </Button>
      {/* </Square> */}
    </Fragment>
  );
};

export default ExternalLinkButton;
