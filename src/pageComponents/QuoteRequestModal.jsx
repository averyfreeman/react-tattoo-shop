/* eslint-disable no-unused-vars */
import React, { cloneElement, Fragment, useEffect, useState } from "react";
import {
  Flex,
  Heading,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import FadeScaleXWrapper from "../components/FadeScaleXWrapper";
// import Recaptcha from 'react-gcaptcha';

// const SITE_KEY = process.env.REACT_APP_GCAPTCHA_SITE_KEY;

const QuoteRequestModal = ({
  children,
  defaultIsOpen,
  footer,
  header,
  isOpen,
  onClose,
  onOpen,
  preserveScrollBarGap,
  ...rest
}) => {
  const [verified, setVerified] = useState(false);

  /* TODO: gcaptcha anti-robot checker
  useEffect(() => {
    if (verified === false && process.env.NODE_ENV === "development") {
      setVerified(true);
    }
  }, [verified, setVerified]);

  const gCaptchaTheme = useColorModeValue("light", "dark");

  const handleVerification = () => {
    setVerified(!verified);
  };
 */
  const handleVerification = () => {
    setVerified(verified);
  };

  return (
    <Fragment>
      <AnimatePresence key="quote-modal-001" initial={0}>
        <FadeScaleXWrapper
          duration={"5s"}
          // key="modal-animKey-0"
        >
          <Modal
            isOpen={isOpen}
            onClose={onClose}
            preserveScrollBarGap={preserveScrollBarGap}
          >
            <ModalOverlay />

            <ModalContent
              borderRadius="lg"
              minW={{
                base: "100vw",
                sm: "80vw",
                md: "80vw",
                lg: "75vw",
                xl: "60vw",
                "2xl": "55vw",
              }}
              {...rest}
            >
              <ModalCloseButton />
              <ModalHeader align="center">{header}</ModalHeader>
              <Flex
                // vert
                flex={"column"}
                justifyContent="center"
              >
                <Heading
                  // stay vertical
                  fontSize={{ base: "3xl", md: "6xl" }}
                  textShadow="3px 3px 6px black"
                >
                  Let's brainstorm!
                </Heading>
              </Flex>
              {/* {!verified && ( */}
              <ModalBody>
                {/* <Flex
                  alignItems="center"
                  direction="column"
                  justifyContent="center"
                > */}
                {/* TODO: replace react-gcaptcha /*}
                    {/* <Recaptcha
                      sitekey={SITE_KEY}
                      theme={gCaptchaTheme}
                      verifyCallback={handleVerification}
                    /> */}
                {/* </Flex> */}
              </ModalBody>
              {/* )}
              {verified && ( */}
              <ModalBody>{cloneElement(children, { onClose })}</ModalBody>
              {/* )} */}
              <Flex
                // vert
                flex={"column"}
                justifyContent="flex-end"
              >
                <ModalFooter>{footer}</ModalFooter>
                <Image
                  aria-label="salty bitch logo"
                  boxSize="5em"
                  m={5}
                  src="/transparently-salty-bitch.png"
                />
              </Flex>
            </ModalContent>
          </Modal>
        </FadeScaleXWrapper>
      </AnimatePresence>
    </Fragment>
  );
};

export default QuoteRequestModal;
