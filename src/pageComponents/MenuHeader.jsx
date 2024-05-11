import React from "react";
import {
  // stay vertical
  Container,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { TbHomeHeart } from "react-icons/tb";
import { CiFacebook } from "react-icons/ci";
import { TfiInstagram } from "react-icons/tfi";
import { PiTiktokLogoLight } from "react-icons/pi";
import ExternalNavButton from "../components/ExternalNavButton";
import NavButton from "../components/NavButton";
/**
 * TODO: complete dark mode switcher
 *
 * import NavColorSwitchButton from "../components/NavColorSwitchButton";
 **/
const MenuHeader = () => {
  const bgColor = useColorModeValue("gray.700", "gray.600");
  /**
   *  const homeBgColor = useColorModeValue("gray.400", "gray.800");
   *  const circleBgColor = useColorModeValue("gray.500", "black");
   **/
  return (
    <Container bgColor={bgColor} m={0} minW="100vw">
      <HStack
        align="center"
        direction="row"
        height="4rem"
        justify="space-between"
        maxW="95%"
      >
        <NavButton
          fontSize="lg"
          icon={<TbHomeHeart size="3em" />}
          label="Home"
          ml={{ base: 0, md: 2 }}
          to="/home"
          width={{ base: "5rem", lg: "10rem" }}
        />
        <ExternalNavButton
          fontSize="lg"
          rel="noopener noreferrer"
          target="_blank"
          url="https://www.instagram.com/feastorfaminetattoo/"
          content={<TfiInstagram size="2em" />}
          label="InstaGram"
          m={{ base: 0, md: 2 }}
          width={{ base: "5rem", lg: "12rem" }}
        />
        <ExternalNavButton
          fontSize="lg"
          rel="noopener noreferrer"
          target="_blank"
          url="https://www.tiktok.com/discover/feast-or-famine-tattoo"
          content={<PiTiktokLogoLight size="2.6em" />}
          label="TiKToK"
          m={{ base: 0, md: 2 }}
          width={{ base: "5rem", lg: "12rem" }}
        />
        <ExternalNavButton
          fontSize="lg"
          rel="noopener noreferrer"
          target="_blank"
          url="https://www.facebook.com/ronniegtattoos/"
          content={<CiFacebook size="2.6em" />}
          label="Facebook"
          m={{ base: 0, md: 2 }}
          width={{ base: "5rem", lg: "12rem" }}
        />

        {/**
         * <NavColorSwitchButton
         * fontSize="lg"
         * label="Mode"
         * ml={{ base: 0, md: 4 }} />
         **/}
      </HStack>
    </Container>
  );
};

export default MenuHeader;
