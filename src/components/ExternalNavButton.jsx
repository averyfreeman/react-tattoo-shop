import React, { Fragment } from "react";
import {
  Box,
  Button,
  Circle,
  Heading,
  HStack,
  Square,
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
    bg="green.200"
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
      <LoadingAnim stroke="green" strokeWidth="2px" fill="lightgreen" />
    </Box>
    <Text>This window will remain open</Text>
  </Box>
);

const ExternalNavButton = (props) => {
  const {
    className,
    fontSize,
    label,
    ml,
    to,
    width,
    buttonColor,
    content,
    rel,
    target,
    textColor,
    url,
  } = props;
  const bgColor = useColorModeValue("gray.400", "gray.800");
  // const bgColor = useColorModeValue("gray.300", "gray.600");
  const circleBgColor = useColorModeValue("gray.500", "black");
  // const textColor = useColorModeValue("black", "gray.200");

  const toast = useToast();

  return (
    <Box>
      <Square
        flex="1"
        direction="row"
        alignItems="center"
        justify="center"
        to={to}
        bgColor={bgColor}
        borderTop="3px solid #666"
        borderRight="3px solid #333"
        borderBottom="3px solid #333"
        borderLeft="3px solid #666"
        boxShadow="2px 2px 4px #333"
        color={textColor}
        height="3.5rem"
        width={width}
        opacity="0.9"
        _hover={{
          opacity: 1,
          transform: "scale(1.001)",
        }}
        sx={{
          transition: "all 0.2s ease",
        }}
      >
        <Circle bg={circleBgColor} height="3.1rem" width="3.1rem">
          <Button
            // borderTop={effects.bordertop}
            // borderRight={effects.borderright}
            // borderBottom={effects.borderbottom}
            // borderLeft={effects.borderleft}
            // borderRadius={effects.borderradius}
            // boxShadow={effects.boxshadow}
            // size="lg"
            // variant="solid"
            // align="center"
            // color={textColor}
            // // px={10}
            // p={3}
            // bg={buttonColor}
            // m={2}
            // height="6rem"
            // opacity="0.9"
            // wordBreak="break-word"
            // _hover={effects.hover}
            // sx={effects.anim}
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
            <HStack spacing="1rem" alignContent="center">
              {content}
            </HStack>
          </Button>
        </Circle>

        <Text
          className={className}
          fontSize={fontSize}
          ml={ml}
          display={{ base: "none", lg: "block" }}
        >
          {label}
        </Text>
      </Square>
    </Box>
  );
};

export default ExternalNavButton;
