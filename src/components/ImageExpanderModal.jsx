import React from "react";
import ErrorBoundary from "../util/ErrorBoundary";
import {
  /* eslint-disable no-unused-vars */
  Link,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

const ImageExpanderModal = ({ children, ...rest }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <ErrorBoundary
      fallback={<p>Error originated in /components/ImageExpanderModal</p>}
    >
      <Flex
        align="center"
        justify="center"
        m={1}
        overflow="inherit"
        border="6px solid #FFFFFF33"
        borderRadius="1em"
      >
        <Link onClick={onOpen}>{children}</Link>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay maxW="100vw" />
          <ModalContent
            // minW={{
            //   base: "100%",
            //   sm: "90%",
            //   md: "80%",
            //   lg: "60%",
            //   "2xl": "50%",
            // }}
            minW="90%"
            // minHeight="80%"
          >
            <ModalCloseButton />
            <ModalBody
              flex="1"
              direction="column"
              align="center"
              justify={{ base: "flex-start", sm: "center" }}
              my={{ base: "1rem", md: "4rem" }}
              // minBlockSize="80%"
              minW="80%"
              //  ={{
              //   base: "100%",
              //   sm: "90%",
              //   md: "80%",
              //   lg: "60%",
              //   "2xl": "50%",
              // }}
            >
              {children}
            </ModalBody>
          </ModalContent>
        </Modal>
      </Flex>
    </ErrorBoundary>
  );
};

export default ImageExpanderModal;
