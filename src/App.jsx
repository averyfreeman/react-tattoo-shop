import "./styles/animation.css";
import React, { Fragment, lazy, useEffect, useMemo, useState } from "react";
import ErrorBoundary from "./util/ErrorBoundary";
import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  useToast,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import { FaHeart, FaThumbsUp } from "react-icons/fa";
import { PiPersonSimpleRunBold } from "react-icons/pi";
import LoadExternalSiteButton from "./components/LoadExternalSiteButton";
import MessageButton from "./components/MessageButton";
import PageChangeAnimator from "./components/PageChangeAnimator";
import StarRatings from "./components/StarRatings";
import SimpleSlider from "./components/SimpleSlider";
import HomeCards from "./pageComponents/HomeCards";
import OfferAlertModal from "./pageComponents/OfferAlertModal";
import { MapCanvas } from "./pageComponents/MapCanvas";
import MenuDrawer from "./pageComponents/MenuDrawer";
import MenuHeader from "./pageComponents/MenuHeader";
import Footer from "./pageElements/Footer";
import HomeBanner from "./pageElements/HomeBanner";
import theme from "./styles/extendedTheme";
import effects from "./styles/boxstyles";
// import RequestArrow from "./pageElements/RequestArrow";

const content = {
  title: "Feast Or Famine Tattoo",
  addressOne: "1803 State Ave NE",
  addressTwo: "Olympia, WA 98506",
  telNum: "tel: (360) 324-7661",
};

const WhatTattooShouldIGetQuizImage = (
  <Fragment>
    <Flex direction="row" alignItems="flex-start" p={0}>
      <Image
        // vert
        height="462px"
        w="625px"
        maxH="11em"
        src="/buzzfeed-what-tattoo-should-i-get-quiz.webp"
        objectFit="cover"
      />
    </Flex>
  </Fragment>
);

const ExternalReviewSiteButton = (
  <Fragment>
    <FaThumbsUp color="black" size="1.6em" />
    <Heading
      color="black"
      fontSize={["1.6em", "1.6em"]}
      // overflowWrap="break-word"
      wordBreak="break-word"
    >
      Rate us at
      <br />
      Google Reviews
    </Heading>
    <FaHeart color="black" size="1.6em" />
  </Fragment>
);

const ExternalMapsSiteContent = (
  <>
    <HStack p={0} spacing="1rem" alignContent="center">
      <PiPersonSimpleRunBold size="3em" />
      <Text p={0} color="white" fontSize={["0.8em", "1.6em"]} mr="2em">
        Visit Google Maps
        <br />
        (external site)
      </Text>
    </HStack>
  </>
);

// TODO: Formik goes here
function App() {
  /* eslint-disable no-unused-vars */

  // const { offerModalDisplayed, setOfferModalDisplayed } = props;
  /**
   * Notice both bgColor the same:
   * TODO: Fix dark mode switcher
   * TODO: Add more content and re-instate router
   * TODO: Implement lazy load animation
   * ./styles/AnimateChildren.jsx
   * reference: https://prototypr.io/post/using-framer-motion-to-create-smooth-lazy-load-image-effects
   **/

  const bgColor = useColorModeValue("gray.800", "gray.800");
  const heartIcon = <FaHeart color="black" size="2.6em" />;

  console.log(import.meta.env.NODE_ENV);
  return (
    <Fragment>
      <ChakraProvider theme={theme}>
        <PageChangeAnimator>
          <Box
            display="main"
            p={0}
            backgroundAttachment="fixed"
            backgroundImage="url('/among-trees-background.jpg')"
            backgroundPosition="bottom"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            textAlign="center"
            minH="100vh"
            overflow="hidden"
          >
            <Box display={{ base: "flex", md: "none" }}>
              <MenuDrawer justifySelf="flex-start" />
            </Box>

            <Box
              boxShadow="4px 4px 8px black"
              display={{ base: "none", sm: "block" }}
              left="0"
              position="fixed"
              textAlign="center"
              top="0"
              width="100vw"
              zIndex="2"
            >
              <MenuHeader />
            </Box>
            <HomeBanner
              bgColor={bgColor}
              className="Carter One"
              color="red.600"
              marginTop="20"
              marginBottom="0"
              subColor="red.300"
              parColor="red.100"
              title="Feast or Famine"
              subTitle="Tattoo Olympia "
              paragraph={"Est. 2023"}
            />

            <Box w="100%" align="center">
              <SimpleSlider />
            </Box>

            <VStack
              direction="column"
              spacing={["1", "3", "5"]}
              alignItems="center"
              justifyContent="center"
            >
              {/* <Box label="spacer" height="4rem" minW="100%" opacity="0" /> */}
              <Heading
                m={0}
                p={6}
                size={["2xl", "3xl", "5xl", "8xl"]}
                color="gray.200"
                bgColor={bgColor}
                borderRadius="1em"
                textShadow="3px 3px 6px black"
                shadow="3px 3px 6px black"
              >
                Take a self-assessment quiz below:
              </Heading>
              <LoadExternalSiteButton
                buttonColor="gray.700"
                textColor="black"
                textShadow="3px 3px 3px #FFF"
                content={WhatTattooShouldIGetQuizImage}
                rel="noopener noreferrer"
                target="_blank"
                url="https://www.buzzfeed.com/peggy/what-kind-of-tattoo-should-you-get"
              />
              <StarRatings bgColor={bgColor} fontSize="lg" m={0} />
              {/* <Box label="spacer" height="4rem" minW="100%" opacity="0" /> */}
              <LoadExternalSiteButton
                buttonColor="red.300"
                textColor="black"
                textShadow="3px 3px 3px #FFF"
                content={ExternalReviewSiteButton}
                rel="noopener noreferrer"
                target="_blank"
                url="https://www.google.com/maps/place/Feast+or+Famine+Tattoo/@47.0467042,-122.8773599,17z/data=!4m8!3m7!1s0x549175f1f69fcfcf:0x939af59e927f7822!8m2!3d47.0467042!4d-122.8773599!9m1!1b1!16s%2Fg%2F11v5bk4n10?hl=en-US&entry=ttu"
              />
            </VStack>
            {/* <Box label="spacer" height="4rem" minW="100%" opacity="0" /> */}
            <HomeBanner
              bgColor={bgColor}
              color="red.600"
              marginTop="20"
              marginBottom="0"
              subColor="red.300"
              parColor="red.100"
              title="New Badass Location"
              subTitle="Same "
              paragraph="Badass Tats"
            />

            {/* <Box label="spacer" height="4rem" minW="100%" opacity="0" /> */}

            <Box bgColor="white" opacity="0.9" p={30} borderRadius="15px" m={0}>
              <Heading m={0} fontSize={["5xl", "7xl"]} color="black">
                Address:
              </Heading>
              <Text
                my={3}
                p={2}
                size="2xl"
                fontSize={["3xl", "5xl"]}
                bgColor="black"
                borderRadius="10px"
              >
                {content.addressOne}
                <br />
                {content.addressTwo}
                <br />
                {content.telNum}
              </Text>
              <Heading m={0} fontSize={["5xl", "7xl"]} color="black">
                See map:
              </Heading>
            </Box>

            <Wrap
              p={3}
              // w="90%"
              borderTop="3px solid #666"
              borderRight="3px solid #333"
              borderBottom="3px solid #333"
              borderLeft="3px solid #666"
              borderRadius="10px"
              boxShadow="2px 2px 4px #333"
              size="lg"
              variant="solid"
              align="center"
              color="black"
              // px={10}
              bg="white"
              m={2}
              opacity="1"
              wordBreak="break word"
              _hover={effects.hover}
              sx={effects.anim}
            >
              <MapCanvas content={content} />
            </Wrap>

            <LoadExternalSiteButton
              buttonColor="green.500"
              textColor="white"
              textShadow="3px 3px 3px #000"
              content={ExternalMapsSiteContent}
              // effects={effects}
              rel="noopener noreferrer"
              target="_blank"
              url="https://www.google.com/maps/place/Feast+or+Famine+Tattoo/@47.0467042,-122.8799348,17z/data=!3m1!4b1!4m6!3m5!1s0x549175f1f69fcfcf:0x939af59e927f7822!8m2!3d47.0467042!4d-122.8773599!16s%2Fg%2F11v5bk4n10?entry=ttu"
            />
            {/* <Box label="spacer" height="4rem" minW="100%" opacity="0" /> */}

            <MessageButton height={18} width={18} />
            <Footer />
          </Box>
        </PageChangeAnimator>
      </ChakraProvider>
    </Fragment>
  );
}

export default App;
