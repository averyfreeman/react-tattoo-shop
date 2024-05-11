import React, { Fragment, useRef } from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerFooter,
  Flex,
  Heading,
  Square,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { FaHamburger } from "react-icons/fa";
import { ImFire } from "react-icons/im";
import { TbHomeHeart } from "react-icons/tb";
import { BiMapPin } from "react-icons/bi";
import { LiaFacebookMessenger } from "react-icons/lia";
import { CiFacebook } from "react-icons/ci";
import { TfiInstagram } from "react-icons/tfi";
import { PiTiktokLogoLight } from "react-icons/pi";
import ExternalNavButton from "../components/ExternalNavButton";
import NavButton from "../components/NavButton";
/**
 * TODO: complete dark mode switcher, maybe DrawerButtons
 * import DrawerButtons from "../pageComponents/DrawerButtons";
 * import ColorModeSwitcher from "../components/ColorModeSwitcher";
 **/

const MenuDrawer = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  /* eslint-disable no-unused-vars */
  const btnRef = useRef();
  const menuButtonColor = "#696969";
  const menuButtonOutline = "#161616";
  const bgColor = useColorModeValue("gray.200", "gray.800");

  const menuOpenIcon = (
    <Square
      bgColor={menuButtonColor}
      border={`3px solid ${menuButtonOutline}`}
      borderLeftRadius="lg"
      borderRadius="lg"
      m="0"
      opacity={0.7}
      p="0"
      height="52px"
      width="52px"
      _hover={{
        opacity: 1,
        transition: "opacity 0.3s ease-out, transform 0.3s ease-in-out",
      }}
      // sx={{
      //   transition: "opacity 0.3s ease-in,  transform 0.3s ease-in-out",
      //   transform: "rotate(0deg)",
      // }}
    >
      <FaHamburger size="2.6em" color={menuButtonOutline} />
    </Square>
  );

  const menuCloseIcon = (
    <Square
      bgColor={menuButtonColor}
      border={`3px solid ${menuButtonOutline}`}
      borderRadius="lg"
      m="0"
      opacity={0.7}
      p="0"
      height="52px"
      width="52px"
      _hover={{
        opacity: 1,
      }}
      // sx={{
      //   transition: "transform 0.3s ease-out",
      //   transform: "rotate(-180deg)",
      //   opacity: 1,
      // }}
    >
      <FaHamburger size="2.6em" color={menuButtonOutline} />
    </Square>
  );

  return (
    <Fragment>
      <Button
        position="fixed"
        right="-6"
        top="12"
        theme="default"
        ref={btnRef}
        onClick={onOpen}
        p="6"
        m="0"
        zIndex="2"
      >
        {isOpen ? menuCloseIcon : menuOpenIcon}
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        width={{ base: "8rem !important" }}
      >
        <DrawerOverlay height="100vh" width="100vw" />
        <DrawerContent
          bgColor={bgColor}
          height="100vh"
          m={0}
          p={0}
          width={{ base: "8rem !important" }}
        >
          <DrawerHeader>
            <Box color="red.600" px={6} py={0}>
              <ImFire />
            </Box>
            <Flex direction="column">
              <Flex direction="row">
                <Heading
                  fontSize={{ base: "1.4rem", sm: "1.7rem" }}
                  color="red.600"
                  align="center"
                  // boxShadow="1px 2px 5px #333"
                  m={0}
                  px={1}
                  py={0}
                >
                  Feast
                </Heading>
                {/* </Flex>
              <Flex direction="row"> */}
                <Heading
                  fontSize={{ base: "1.4rem", sm: "1.7rem" }}
                  color="red.400"
                  align="center"
                  // boxShadow="1px 2px 5px #333"
                  m={0}
                  px={1}
                  py={0}
                >
                  Or
                </Heading>
              </Flex>
              <Heading
                fontSize={{ base: "1.4rem", sm: "1.7rem" }}
                color="red.200"
                align="center"
                // boxShadow="1px 2px 5px #333"
                m={0}
                px={0}
                py={0}
              >
                Famine
              </Heading>
            </Flex>
            <DrawerCloseButton mt={0} zIndex="2" />
          </DrawerHeader>

          <Flex
            direction="column"
            spacing={["1", "2", "3", "4"]}
            align="center"
            justify="top"
          >
            {/* <ColorModeSwitcher size="3em" /> */}
            <NavButton
              fontSize="lg"
              icon={<TbHomeHeart size="3em" />}
              label="Home"
              ml={{ base: 0, md: 2 }}
              onClick={onClose}
              to="/home"
              width={{ base: "5rem", lg: "10rem" }}
            />
            Home
            <ExternalNavButton
              fontSize="lg"
              rel="noopener noreferrer"
              target="_blank"
              url="https://www.instagram.com/feastorfaminetattoo/"
              content={<TfiInstagram size="2em" />}
              label="Instagram"
              ml={0}
              onClick={onClose}
              width={{ base: "5rem", lg: "12rem" }}
            />
            InstaGram
            <ExternalNavButton
              fontSize="lg"
              rel="noopener noreferrer"
              target="_blank"
              url="https://www.tiktok.com/discover/feast-or-famine-tattoo"
              content={<PiTiktokLogoLight size="2.6em" />}
              label="TikTok"
              ml={0}
              onClick={onClose}
              width={{ base: "5rem", lg: "12rem" }}
            />
            TiKToK
            <ExternalNavButton
              fontSize="lg"
              rel="noopener noreferrer"
              target="_blank"
              url="https://www.facebook.com/ronniegtattoos/"
              content={<CiFacebook size="2.6em" />}
              label="Facebook"
              ml={0}
              onClick={onClose}
              width={{ base: "5rem", lg: "12rem" }}
            />
            Facebook
          </Flex>

          <Box
            sx={{
              display: "none",
            }}
          ></Box>
        </DrawerContent>
      </Drawer>
    </Fragment>
  );
};

export default MenuDrawer;
