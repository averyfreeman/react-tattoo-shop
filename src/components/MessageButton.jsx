/* eslint-disable no-unused-vars */
import React from "react";
import { Box, IconButton, Tooltip, useDisclosure } from "@chakra-ui/react";
import BrainstormChatBubbles from "../assets/vectors/BrainstormChatBubbles";
import QuoteRequestModal from "../pageComponents/QuoteRequestModal";
import QuoteRequestForm from "../pageComponents/QuoteRequestForm";
import QuoteRequestHeader from "../pageElements/QuoteRequestHeader";
// import QuestionBubble from "../assets/vectors/QuestionBubble";
// import CostChatBubbles from "../assets/vectors/CostChatBubbles";

const QuoteButton = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const outerHeight = props.height * 7;
  const outerWidth = props.width * 7;

  return (
    <Box>
      <Box
        border="3px solid black"
        borderRadius="full"
        bottom={5}
        boxShadow="2px 2px 8px #333"
        opacity={0.9}
        position="fixed"
        right={7}
        zIndex={3}
        transform="scale(0.97)"
        transition="all 0.3s ease"
        _hover={{
          opacity: 1,
          transform: "scale(1.03)",
        }}
      >
        {isOpen && (
          <QuoteRequestModal
            footer={`We'll get back to you ASAP`}
            header={<QuoteRequestHeader />}
            isOpen={isOpen}
            onClose={onClose}
            preserveScrollBarGap={true}
          >
            <QuoteRequestForm />
          </QuoteRequestModal>
        )}

        <Tooltip
          hasArrow
          aria-label="Message us!"
          bg="red.400"
          borderRadius="full"
          boxShadow="4px 4px 12px black"
          color="white"
          // fontSize={{ base: "1rem", md: "1.2rem" }}
          label="Message us!"
          placement="left-start"
          sx={{
            WebkitTextStrokeWidth: "0.2px",
            WebkitTextStrokeColor: "rgba(55, 55, 55, 1)",
          }}
          textShadow="1px 1px 3px black"
        >
          <IconButton
            aria-label="message button"
            borderRadius="full"
            colorScheme="yellow"
            height={`${outerHeight}px`}
            onClick={onOpen}
            opacity="inherit"
            width={`${outerWidth}px`}
            transform="inherit"
          >
            <BrainstormChatBubbles
              height={props.height * 7}
              width={props.width * 7}
            />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default QuoteButton;
