import React from "react";
import { Fragment } from "react";
import {
  Box,
  Button,
  Heading,
  HStack,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { BsHandThumbsUp } from "react-icons/bs";
import { FaHeart, FaThumbsUp } from "react-icons/fa";
import PageChangeAnimator from "../components/PageChangeAnimator";
import StarRatings from "../components/StarRatings";
import SimpleSlider from "../components/SimpleSlider";
import LoadExternalSiteButton from "../components/LoadExternalSiteButton";
import OfferAlertModal from "../pageComponents/OfferAlertModal";
import QuoteButton from "../components/QuoteButton";
import HomeCards from "../pageComponents/HomeCards";
import HomeBanner from "../pageElements/HomeBanner";
import Footer from "../pageElements/Footer";
// import RequestArrow from "../pageElements/RequestArrow";
import ErrorBoundary from "../util/ErrorBoundary";
import effects from "../styles/boxstyles";

import { GiFangs } from "react-icons/gi";
import { GiDirectionSigns } from "react-icons/gi";
import { HiBeaker } from "react-icons/hi2";
import { RiBroadcastFill } from "react-icons/ri";

const ExternalSiteContent = (
  <Fragment>
    <FaThumbsUp color="black" size="3em" />
    <Heading
      color="black"
      fontSize="2em"
      // overflowWrap="break-word"
      wordBreak="break-word"
    >
      Rate us at
      <br />
      Google Reviews
    </Heading>
    <FaHeart color="black" size="3em" />
  </Fragment>
);

const Home = (props) => {
  /* eslint-disable no-unused-vars */
  // let location = useLocation();
  // const { offerModalDisplayed, setOfferModalDisplayed } = props;
  const bgColor = useColorModeValue("gray.400", "gray.800");
  const heartIcon = <FaHeart color="black" size="3em" />;

  return (
    <Fragment>
      <PageChangeAnimator key={"/home"}>
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
          // spacing={["1", "3", "5"]}
          alignItems="center"
          justifyContent="center"
        >
          <Box label="spacer" height="4rem" minW="100%" opacity="0" />

          <StarRatings bgColor={bgColor} fontSize="lg" m={0} />

          <Box label="spacer" height="4rem" minW="100%" opacity="0" />

          <LoadExternalSiteButton
            buttonColor="red.300"
            textColor="black"
            textShadow="3px 3px 3px #FFF"
            iconOne={<FaThumbsUp color="black" size="3em" />}
            content={ExternalSiteContent}
            iconTwo={heartIcon}
            rel="noopener noreferrer"
            target="_blank"
            url="https://www.google.com/maps/place/Feast+or+Famine+Tattoo/@47.0467042,-122.8773599,17z/data=!4m8!3m7!1s0x549175f1f69fcfcf:0x939af59e927f7822!8m2!3d47.0467042!4d-122.8773599!9m1!1b1!16s%2Fg%2F11v5bk4n10?hl=en-US&entry=ttu"
          />
          {/* <Box label="spacer" height="3em" minW="100%" opacity="0" /> */}
          {/* <HomeCards /> */}

          {/* <VStack> */}
          {/* <SimpleGrid columns={{ base: 1, md: 2, "2xl": 4 }} spacing={1}> */}

          {/* </SimpleGrid> */}
          {/* </VStack> */}

          {/* <OfferAlertModal
            offerModalDisplayed={offerModalDisplayed}
            setOfferModalDisplayed={setOfferModalDisplayed}
          /> */}

          <Box label="spacer" height="4rem" minW="100%" opacity="0" />

          {/* <Box backgroundColor={bgColor} borderRadius="lg">
            <RequestArrow className="carter-one" m={5} p={3}>
              If you have any questions, please visit{" "}
              <Box as="span" color="#1d6eb9">
                <Link to="/contact">my contact page</Link>
              </Box>{" "}
              or use the Quote Request Button
            </RequestArrow> */}
          {/* <QuoteButton /> */}
          {/* </Box> */}
        </VStack>
        <Footer />
      </PageChangeAnimator>
    </Fragment>
  );
};

export default Home;
