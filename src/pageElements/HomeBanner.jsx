import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const HomeBanner = ({
  bgColor,
  className,
  color,
  subColor,
  parColor,
  title,
  subTitle,
  paragraph,
  ...props
}) => {
  return (
    <Box
      mb="0"
      px="5"
      py="5"
      minh="5vw"
      minW="95vw"
      bgColor={bgColor}
      borderWidth="3px"
      borderRadius="lg"
      textShadow="5px 5px 8px black"
      overflow="hidden"
      opacity="0.9"
    >
      <Box m="0">
        <Heading
          m="0"
          mb="0"
          as="h1"
          size="xl"
          fontSize={{ base: "6xl", sm: "7xl", md: "8xl", xl: "9xl" }}
          color={color}
          fontWeight={700}
          className={className}
          {...props}
        >
          {title}
          <Text
            fontSize={{ base: "4xl", sm: "5xl", md: "6xl", xl: "7xl" }}
            color={subColor}
          >
            {subTitle}
            <Text
              fontSize={{ base: "4xl", sm: "5xl", md: "6xl", xl: "7xl" }}
              color={parColor}
              as="i"
            >
              {paragraph}
            </Text>
          </Text>
        </Heading>
      </Box>
    </Box>
  );
};

export default HomeBanner;
