import React, { Fragment } from "react";
import {
  Box,
  Button,
  Heading,
  HStack,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { RiReactjsFill } from "react-icons/ri";
import LoadingAnim from "./LoadingAnim";
import effects from "../styles/boxstyles";

const toastRender = (
  <Box
    align="center"
    borderTop={effects.bordertop}
    borderRight={effects.borderright}
    borderBottom={effects.borderbottom}
    borderLeft={effects.borderleft}
    borderRadius={effects.borderradius}
    boxShadow={effects.boxshadow}
    color="black"
    p={10}
    bg="blue.300"
    ml={0}
    height="12rem"
    width="24rem"
    opacity="1"
    _hover={effects.hover}
    sx={effects.anim}
  >
    <HStack spacing="24px">
      <RiReactjsFill size="3em" />
      <Heading fontSize="2em" as="span">
        Loading external site
      </Heading>
      <RiReactjsFill size="3em" />
    </HStack>
    <Box>
      <LoadingAnim stroke="blue" strokeWidth="2px" fill="lightblue" />
    </Box>
    <Text>This window will remain open</Text>
  </Box>
);

const LoadExternalSite = (props) => {
  const bgColor = useColorModeValue("gray.300", "gray.600");
  const { buttonColor, content, rel, target, textColor, textShadow, url } =
    props;
  const toast = useToast();

  return (
    <Fragment>
      <Button
        align="center"
        borderTop={effects.bordertop}
        borderRight={effects.borderright}
        borderBottom={effects.borderbottom}
        borderLeft={effects.borderleft}
        borderRadius={effects.borderradius}
        boxShadow={effects.boxshadow}
        color={textColor}
        bg={buttonColor}
        h="12em"
        m={0}
        minh="5vw"
        minW="98vw"
        // maxW="2em"
        opacity="0.7"
        p="2em"
        // size={["sm", "md", "lg"]}
        textShadow={textShadow}
        variant="solid"
        // overflowWrap="anywhere"
        // wordBreak="break-word"
        // wordWrap="break-word"
        _hover={effects.hover}
        sx={{ wordBreak: "break-all" }}
        onClick={() =>
          toast({
            position: "top",
            timeout: setTimeout(() => {
              window.open(url, target, rel);
            }, 1500),
            render: () => toastRender,
          })
        }
      >
        <HStack spacing="1rem" alignContent="center" flexWrap="wrap">
          {content}
        </HStack>
      </Button>
    </Fragment>
  );
};

export default LoadExternalSite;
