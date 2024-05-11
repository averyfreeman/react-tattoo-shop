import React from "react";
import { Box, Image, Stack, useColorModeValue } from "@chakra-ui/react";

import PageChangeAnimator from "../components/PageChangeAnimator";
import OfferAlertModal from "../pageComponents/OfferAlertModal";
import HomeBanner from "../pageElements/HomeBanner";
import QuoteRequestModal from "../pageComponents/QuoteRequestModal";
import QuoteRequestHeader from "../pageElements/QuoteRequestHeader";
import QuoteRequestForm from "../pageComponents/QuoteRequestForm";
import QuoteButton from "../components/QuoteButton";
import BackdropSpacing from "../pageElements/BackdropSpacing";
import DarkDivider from "../pageElements/DarkDivider";
import Footer from "../pageElements/Footer";
import Header from "../pageElements/Header";
import LightDivider from "../pageElements/LightDivider";
import Paper from "../pageElements/Paper";
import RequestArrow from "../pageElements/RequestArrow";
import SecondaryHeader from "../pageElements/SecondaryHeader";

const colorProfile = "blue";

const About = (props) => {
  const { offerModalDisplayed, setOfferModalDisplayed } = props;
  const bgColor = useColorModeValue("gray.400", "gray.800");
  /* eslint-disable no-unused-vars */
  // const location = useLocation();
  return (
    <PageChangeAnimator>
      {/* <BackdropSpacing> */}
      <OfferAlertModal
        offerModalDisplayed={offerModalDisplayed}
        setOfferModalDisplayed={setOfferModalDisplayed}
      />

      <HomeBanner
        bgColor={bgColor}
        className="Carter One"
        color="red.600"
        marginTop="20"
        marginBottom="0"
        subColor="red.300"
        parColor="red.100"
        title="Feast or Famine"
        subTitle="Tattoo "
        paragraph="Contact Info"
      />
      <Stack align="center" direction="column" flex={1} justify="center">
        <LightDivider />
        <DarkDivider />
        <Image
          borderRadius="15px"
          boxShadow="3px 3px 6px #333"
          height="60%"
          width="60%"
          src="/rotary-cell-phone.png"
        />
        <Box
          label="spacer"
          height={{ base: "1rem", md: "3rem" }}
          minW="100%"
          opacity="0"
        />

        {/* <SecondaryHeader>Contact Info</SecondaryHeader> */}
        <LightDivider />
        <Box
          label="spacer"
          height={{ base: "0.4rem", md: "1.2rem" }}
          minW="100%"
          opacity="0"
        />

        <QuoteButton height={20} width={20} />

        <Stack direction={{ base: "row", sm: "column" }} align="center">
          {/* <ContactTable colorProfile={colorProfile} /> */}
        </Stack>
        <Box
          label="spacer"
          height={{ base: "0.4rem", md: "1.2rem" }}
          minW="100%"
          opacity="0"
        />
        <DarkDivider />
      </Stack>
      <Box label="spacer" height="4rem" minW="100%" opacity="0" />

      {/* <RequestArrow className="carter-one" m={5} p={3}>
            ...or use the Quote Request Button
          </RequestArrow> */}
      <Footer />
      {/* </BackdropSpacing> */}
    </PageChangeAnimator>
  );
};

export default About;
