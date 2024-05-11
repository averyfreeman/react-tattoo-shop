import React, { Fragment } from "react";
import {
  Box,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

const HomeCard = ({ title, desc, href, icon, ...rest }) => {
  const bgColor = useColorModeValue("white", "gray.600");
  const topBgColor = useColorModeValue("gray.200", "gray.800");
  return (
    <Fragment>
      <Box
        border="3px solid #333"
        borderRadius="xl"
        boxShadow="xl"
        height={{ base: "10rem", md: "12rem", "2xl": "13rem" }}
        maxW={{ base: "90vw", sm: "80vw", md: "45vw", "2xl": "24vw" }}
        bgColor={bgColor}
        opacity={{ base: 1, md: 0.9 }}
        shadow={2}
        _hover={{
          opacity: 1,
          transform: "scale(1.05)",
        }}
        sx={{
          transition: "all 0.2s ease-in-out",
        }}
      >
        <Container p="0">
          <Container
            bgColor={topBgColor}
            borderTopRadius="lg"
            borderBottom="1px dashed #666"
          >
            <HStack
              alignItems="center"
              direction="row"
              justifyContent="flex-start"
              py="3"
            >
              {icon}
              <Heading
                flex="1"
                fontSize={{
                  base: "2xl",
                  sm: "3xl",
                  lg: "4xl",
                }}
                justifySelf="flex-start"
                letterSpacing="1.2px"
                overflowWrap="break-word"
              >
                {title}
              </Heading>
            </HStack>
          </Container>
          <Container>
            <VStack>
              <Box width="90%">
                <Text
                  fontSize={{
                    base: "lg",
                    md: "2xl",
                  }}
                >
                  {desc}
                </Text>
              </Box>
            </VStack>
          </Container>
        </Container>
      </Box>
    </Fragment>
  );
};
export default HomeCard;
