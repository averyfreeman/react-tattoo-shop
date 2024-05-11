import React, { Fragment } from "react";
import {
  // stay vertical
  Box,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
  useColorModeValue,
  useToast,
  Wrap,
} from "@chakra-ui/react";
import { PiPersonSimpleRunBold } from "react-icons/pi";
import { MapCanvas } from "../pageComponents/MapCanvas";
import PageChangeAnimator from "../components/PageChangeAnimator";
import LoadExternalSite from "../components/LoadExternalSiteButton";
import effects from "../styles/boxstyles";
import OfferAlertModal from "../pageComponents/OfferAlertModal";
import BackdropSpacing from "../pageElements/BackdropSpacing";
import DarkDivider from "../pageElements/DarkDivider";
import Footer from "../pageElements/Footer";
import HomeBanner from "../pageElements/HomeBanner";

const content = {
  title: "Feast Or Famine Tattoo",
  addressOne: "1803 State Ave NE",
  addressTwo: "Olympia, WA 98506",
  telNum: "tel: (360) 324-7661",
};

const externalSiteContent = (
  <>
    <HStack p={0} spacing="1rem" alignContent="center">
      <PiPersonSimpleRunBold size="3em" />
      <Text p={0} color="white" fontSize="1.6em" mr="2em">
        Visit Google Maps
        <br />
        (external site)
      </Text>
    </HStack>
  </>
);

const Directions = (props) => {
  // const { offerModalDisplayed, setOfferModalDisplayed } = props;
  /* eslint-disable no-unused-vars */
  // let location = useLocation();
  const bgColor = useColorModeValue("gray.400", "gray.800");

  return (
    <Fragment>
      <PageChangeAnimator key={"/directions"}>
        <BackdropSpacing>
          {/* <OfferAlertModal
            offerModalDisplayed={offerModalDisplayed}
            setOfferModalDisplayed={setOfferModalDisplayed}
          /> */}

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
          {/* <Box
          label="spacer"
          height={{ base: "1rem", md: "3rem" }}
          minW="100%"
          opacity="0"
        /> */}
          <Box bgColor="white" opacity="0.9" p={30} borderRadius="15px" m={0}>
            <Heading m={0} fontSize={["5xl", "7xl"]} color="black">
              We are located at
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
            opacity="0.8"
            wordBreak="break word"
            _hover={effects.hover}
            sx={effects.anim}
          >
            <MapCanvas content={content} />
          </Wrap>

          <Box label="spacer" height="4rem" minW="100%" opacity="0" />

          <LoadExternalSite
            buttonColor="green.500"
            textColor="white"
            textShadow="3px 3px 3px #000"
            content={externalSiteContent}
            // effects={effects}
            rel="noopener noreferrer"
            target="_blank"
            url="https://www.google.com/maps/place/Feast+or+Famine+Tattoo/@47.0467042,-122.8799348,17z/data=!3m1!4b1!4m6!3m5!1s0x549175f1f69fcfcf:0x939af59e927f7822!8m2!3d47.0467042!4d-122.8773599!16s%2Fg%2F11v5bk4n10?entry=ttu"
          />

          {/* <VisitGoogleMaps /> */}
          <Box label="spacer" height="4rem" minW="100%" opacity="0" />
          {/* <RequestArrow className="carter-one" m={5} p={3}>
            If you have any questions, please visit{" "}
            <Box as="span" color="#1d6eb9">
              <Link to="/contact">our contact page</Link>
            </Box>{" "}
            or use the Quote Request Button
          </RequestArrow> */}
          <DarkDivider flex="1" direction="row" align="flex-end" />
          <Footer />
        </BackdropSpacing>
      </PageChangeAnimator>
    </Fragment>
  );
};

export default Directions;
