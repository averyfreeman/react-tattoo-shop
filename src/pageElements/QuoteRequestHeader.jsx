import React, { Fragment } from "react";
import { Box, Flex, Image, Heading } from "@chakra-ui/react";
import BrainstormIcon2 from "../assets/vectors/BrainstormIcon2";

const QuoteRequestHeader = () => (
  <Fragment>
    <Flex
      align="center"
      direction="column"
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box
        //vert

        backgroundColor="#aeaeae"
        borderRadius="8em"
        boxShadow="3px 3px 6px #000"
      >
        <BrainstormIcon2 height={56} width={56} m={0} />
        {/* <Image
          aria-label="salty bitch logo"
          boxSize="12em"
          src="/transparently-salty-bitch.png"
        /> */}
      </Box>
    </Flex>
  </Fragment>
);

export default QuoteRequestHeader;
