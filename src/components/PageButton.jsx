import React from "react";
import {
  Button,
  Container,
  Square,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const PageButton = ({ colorScheme, icon, label, to, ...rest }) => {
  const lightBgColor = useColorModeValue("gray.600", "gray.400");
  return (
    <Button
      textDecoration="none"
      colorScheme={colorScheme}
      h="3.5rem"
      w="13rem"
      fontSize="lg"
      justifyContent="left"
      {...rest}
    >
      <Square w={10} h={10} bg={lightBgColor} mr={0} borderRadius="lg">
        {icon}
      </Square>
      <Container>
        <Text align="center">{label}</Text>
      </Container>
    </Button>
  );
};

export default PageButton;
