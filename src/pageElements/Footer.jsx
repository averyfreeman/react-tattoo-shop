import React, { Fragment } from "react";
import { Box, Button, Flex, Link, Text } from "@chakra-ui/react";

const copyString = `\u00A9 ${new Date().getFullYear()}`;

const Footer = (props) => {
  return (
    <Fragment>
      <Flex d="row" alignItems="center" justifyContent={"center"}>
        <Button w="95vw" h="2.6em" pos="absolute" bottom="0" left="0">
          <Text
            as="h1"
            id="footer"
            fontSize={{ base: "1xl", sm: "2xl", md: "3xl" }}
            my={5}
          >
            <Box direction="row" spacing="24px">
              <Link to="https://develmonk.com">
                {copyString} by Avery Freeman
              </Link>
            </Box>
          </Text>
        </Button>
      </Flex>
    </Fragment>
  );
};

export default Footer;
