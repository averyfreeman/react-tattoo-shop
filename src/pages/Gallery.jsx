import React from "react";
import { Box, Container, Image, Stack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import ImageExpanderModal from "../components/ImageExpanderModal";
import PageButton from "../components/PageButton";
import PageChangeAnimator from "../components/PageChangeAnimator";
import OfferAlertModal from "../pageComponents/OfferAlertModal";
import ExternalLinkButtons from "../pageComponents/ExternalLinkButtons";
import InfoTable from "../pageComponents/InfoTable";
import BackdropSpacing from "../pageElements/BackdropSpacing";
import DarkDivider from "../pageElements/DarkDivider";
import Footer from "../pageElements/Footer";
import Header from "../pageElements/Header";
import LightDivider from "../pageElements/LightDivider";
import Paper from "../pageElements/Paper";
import Paragraph from "../pageElements/Paragraph";
import RequestArrow from "../pageElements/RequestArrow";
import SecondaryHeader from "../pageElements/SecondaryHeader";
import SimpleSlider from "../components/SimpleSlider";

import CheckMark from "../assets/CheckMark";
const colorProfile = "blue";

const Qualifications = (props) => {
  const { offerModalDisplayed, setOfferModalDisplayed } = props;
  /* eslint-disable no-unused-vars */
  // const location = useLocation();
  return (
    <PageChangeAnimator>
      <BackdropSpacing>
        <OfferAlertModal
          offerModalDisplayed={offerModalDisplayed}
          setOfferModalDisplayed={setOfferModalDisplayed}
        />

        <Paper className="spectral">
          <Header>Feast Or Famine Gallery</Header>
          <Box
            label="spacer"
            height={{ base: "1rem", md: "3rem" }}
            minW="100%"
            opacity="0"
          />

          <SimpleSlider />

          <Box label="spacer" height="2rem" minW="100%" opacity="0" />
          {/* <RequestArrow className="carter-one" m={5} p={3}>
            If you have any questions, please visit{" "}
            <Box as="span" color="#1d6eb9">
              <Link to="/contact">my contact page</Link>
            </Box>{" "}
            or use the Quote Request Button
          </RequestArrow> */}
        </Paper>
        <Footer />
      </BackdropSpacing>
    </PageChangeAnimator>
  );
};

export default Qualifications;
