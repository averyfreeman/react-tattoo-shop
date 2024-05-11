import React, { Fragment } from "react";
import { Box, Button, Heading, HStack, Text, useToast } from "@chakra-ui/react";
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

const LoadExternalSite = (props) => {
  const { buttonColor, content, rel, target, textColor, url } = props;
  const toast = useToast();

  return (
    <Fragment>
      <Button
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
        <Box spacing="2rem" width="95vw" bgColor="red" m={10} p={10}>
          {content}
        </Box>
      </Button>
    </Fragment>
  );
};

export default LoadExternalSite;
