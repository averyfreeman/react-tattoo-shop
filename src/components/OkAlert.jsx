import React, { Fragment } from "react";
import { Alert, AlertDescription, Box, CloseButton } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import FadeScaleYWrapper from "./FadeScaleYWrapper";

const OkAlert = (props) => {
  return (
    <Fragment>
      <AnimatePresence key={props.errorKey}>
        <FadeScaleYWrapper duration={0.3}>
          <Alert
            borderRadius="lg"
            fontSize={{ base: "lg", md: "xl" }}
            textShadow="3px 3px 6px black"
            {...props}
          >
            {/*  Not exactly sure how to replace FontAwesomeIcon yet */}
            <Box textColor="green.400">{props.icon}</Box>
            <AlertDescription ml={3}>{props.desc || "OK!"}</AlertDescription>
            <CloseButton
              onClick={props.handleIsVisible}
              position="absolute"
              right="8px"
              top="8px"
            />
          </Alert>
        </FadeScaleYWrapper>
      </AnimatePresence>
    </Fragment>
  );
};

export default OkAlert;
