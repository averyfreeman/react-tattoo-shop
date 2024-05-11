import React from "react";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

/**
 *  20210618 - Component currently static but review count real ATTOB
 *  TODO: find a source API and connect for real-time updates
 *
 *  20240427 - Google Maps includes REVIEWS API for
 *
 */

const property = {
  reviewCount: 21,
  rating: 5,
};

const StarRatings = ({ bgColor, fontSize, ...rest }) => (
  <Box
    // maxW="sm"
    bgColor={bgColor}
    borderRadius="lg"
    borderWidth="1px"
    minh="5vw"
    minW="98vw"
    overflow="hidden"
    p="5"
    w={["sm", "md", "lg", "2x"]}
    {...rest}
  >
    <Text fontSize={fontSize}>Customer Reviews:</Text>

    <Flex alignItems="center" direction="column" justifyContent="center">
      <Flex alignItems="center" direction="row" m={2} justifyContent="center">
        {Array(5)
          .fill("")
          .map((_, i) => (
            <Box px={0} py={0} mx={0.5} key={`Box-${i}`}>
              <FaStar
                // icon={faStar}
                key={`FaStar-${i}`}
                color={i < property.rating ? "gold" : "#4A5568"}
              />
            </Box>
          ))}
      </Flex>
      <Box as="span" fontSize="md">
        {property.reviewCount} reviews
      </Box>
    </Flex>
  </Box>
);

export default StarRatings;
