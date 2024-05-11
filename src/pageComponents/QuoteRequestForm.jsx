import React, { Fragment } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  Stack,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { AnimatePresence } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import { FiCheckSquare } from "react-icons/fi";
import { AiTwotoneFileExclamation } from "react-icons/ai";
import { FaDumpsterFire } from "react-icons/fa6";
import { FaHeadSideCough } from "react-icons/fa6";
import { GiSkullCrossedBones } from "react-icons/gi";
import { formPost } from "../util/formPost";
import FadeScaleXWrapper from "../components/FadeScaleXWrapper";
import ErrorMsgAlert from "../pageComponents/ErrorMsgAlert";
import ErrOrOkAlert from "../pageComponents/ErrOrOkAlert";
import {
  modal40of80ResPoints,
  modalTextareaResPoints,
} from "../styles/breakpointValues";

const faCheckCircle = <FiCheckCircle size="1.6em" />;
const faCheckSquare = (
  <Box
    // vert
    borderRadius="1em"
    p="0.2em"
    shadow="2px 2px 2px #000"
  >
    <FiCheckSquare size="1.6em" />
  </Box>
);
const faExclamationTriangle = (
  <Box
    // vert
    flex="row"
    alignItems="flex-end"
    justifyContent="flex-end"
    backgroundColor="#333"
    borderRadius="1.2em"
    p="0.2em"
    shadow="2px 2px 2px #000"
  >
    <FaDumpsterFire size="1.6em" color="firebrick" />
  </Box>
);
const faHeadSideCough = <FaHeadSideCough size="1.6em" />;
const faSkullCrossbones = <GiSkullCrossedBones size="1.6em" />;

let endpoint = "";

if (process.env.NODE_ENV === "development") {
  endpoint = import.meta.env.VITE_FORMPOST_SANDBOX_URL;
} else {
  endpoint = import.meta.env.VITE_FORMPOST_URL;
}

const nameRegEx = "^[aA-zZs-]+$";
const phoneRegEx = `^[0-9s -]+$`;

const initialValues = {
  firstName: "",
  lastName: "",
  tel: "",
  email: "",
  message: "",
};

const validationSchema = Yup.object({
  firstName: Yup.string()
    .matches(nameRegEx, `Only letters or hyphen`)
    .max(18, `Must be 18 letters or less`)
    .required(`First name is required`),
  lastName: Yup.string()
    .matches(nameRegEx, `Only letters or hyphen`)
    .max(24, `Must be 24 letters or less`)
    .required(`Last name is required`),
  tel: Yup.string()
    .matches(phoneRegEx, `Doesn't go in phone number...`)
    .min(12, `12 characters, please`)
    .max(12, `12 characters, please`)
    .required(`Phone number is required`),
  email: Yup.string()
    .email(`That's not an email address!`)
    .required(`Email address is required`),
  message: Yup.string()
    .min(50, `Please include more details...`)
    .required(`Short message is required`),
});

const FormMailer = ({ onClose }) => {
  /* eslint-disable no-unused-vars */
  // let location = useLocation();

  const handleOnMouseDown = (e) => {
    e.preventDefault();
  };

  const closeModal = () => {
    setTimeout(() => {
      alert("Will contact you soon - thanks!");
      onClose();
    }, 500);
  };

  // todo: explore useMemo + withFormik
  return (
    <Fragment>
      <AnimatePresence>
        <FadeScaleXWrapper duration={1} key={location.pathname}>
          <VStack
            align={{ base: "flex-start", md: "center" }}
            borderRadius={"lg"}
            direction={"column"}
            flex={1}
            justify="space-evenly"
            p={{ base: 0, sm: 4, md: 8 }}
            spacing={{ base: 1, sm: 3, md: 6 }}
          >
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values, actions) => {
                let formData = new FormData();

                formData.append("form", "inquiry");
                for (const value in values) {
                  formData.append(value, values[value]);
                }

                /* test values after in formData obj */
                // for (let property of formData.entries()) {
                //   console.log('Sending: ', property[0], property[1]);
                // }

                formPost(endpoint, formData);
                actions.setSubmitting(false);
                actions.resetForm();
              }}
            >
              {(props) => (
                <Form onSubmit={props.handleSubmit} color="black">
                  <Stack
                    direction={{ base: "column", md: "row" }}
                    spacing={{ base: 5, md: 10 }}
                  >
                    <Flex
                      direction="column"
                      alignItems="center"
                      justifyContent="center"
                      // vert
                    >
                      <InputGroup
                        borderRadius="lg"
                        htmlFor="firstName"
                        size={{ base: "sm", md: "lg" }}
                      >
                        <Flex direction="column" alignItems="flex-start">
                          <FormLabel
                            htmlFor="irstName"
                            fontSize={{ base: "lg", md: "xl" }}
                          >
                            First name
                          </FormLabel>
                          <FormControl
                            isInvalid={props.errors.firstName}
                            isRequired={true}
                          >
                            <Input
                              fontSize={{ base: "lg", md: "xl" }}
                              id="firstName"
                              w={modal40of80ResPoints}
                              name="firstName"
                              onBlur={props.handleBlur}
                              onChange={props.handleChange}
                              placeholder="enter first name here"
                              type="text"
                              value={props.values.firstName}
                            />
                            <FormHelperText align="end">
                              e.g. "Ivanna"
                            </FormHelperText>
                          </FormControl>
                        </Flex>
                      </InputGroup>

                      <ErrOrOkAlert
                        errorText={props.errors.firstName}
                        iconError={faExclamationTriangle}
                        iconErrorColor={"#F56565"}
                        iconErrorSize={"3em"}
                        iconOk={faCheckSquare}
                        iconOkColor={"#48BB78"}
                        iconOkSize={"3em"}
                        mt={5}
                        name="firstName"
                        touched={props.touched.firstName}
                        w={modal40of80ResPoints}
                      />
                    </Flex>

                    {/* <Flex
                      direction="column"
                      align={"flex-start"}
                      justify={"flex-start"}
                      // vert
                    >  */}
                    <InputGroup
                      size={{ base: "sm", md: "lg" }}
                      htmlFor="astName"
                    >
                      <Flex direction={"column"} justify="center">
                        <FormLabel
                          fontSize={{ base: "lg", md: "xl" }}
                          htmlFor="astName"
                        >
                          Last name:
                        </FormLabel>
                        <FormControl
                          isInvalid={props.errors.lastName}
                          isRequired={true}
                        >
                          <Input
                            fontSize={{ base: "lg", md: "xl" }}
                            id={"lastName"}
                            name="lastName"
                            onBlur={props.handleBlur}
                            onChange={props.handleChange}
                            placeholder="enter last name here"
                            type="text"
                            value={props.values.lastName}
                            w={modal40of80ResPoints}
                          />
                          <FormHelperText align="end">
                            e.g. "Stickenpoke"
                          </FormHelperText>
                        </FormControl>
                      </Flex>
                    </InputGroup>

                    <ErrOrOkAlert
                      errorText={props.errors.lastName}
                      iconError={faExclamationTriangle}
                      iconErrorColor="#F56565"
                      iconErrorSize="lg"
                      iconOk={faCheckCircle}
                      iconOkColor={"#48BB78"}
                      iconOkSize={"lg"}
                      mt={5}
                      name="lastName"
                      touched={props.touched.lastName}
                      w={modal40of80ResPoints}
                    />
                    {/* </Flex> */}
                    {/* </Stack>  */}
                    {/* 
                    <Stack
                    direction={{ base: "column", md: "row" }}
                    py={{ base: 3, md: 5 }}
                    spacing={{ base: 5, md: 10 }}
                  > */}
                    <Flex
                      direction={"column"}
                      align={"flex-start"}
                      justify={"flex-start"}
                      // vert
                    >
                      <InputGroup htmlFor="el" size={{ base: "sm", md: "lg" }}>
                        <Flex direction={"column"} justify="center">
                          <FormLabel
                            fontSize={{ base: "lg", md: "xl" }}
                            htmlFor="el"
                          >
                            Phone Number:
                          </FormLabel>
                          <FormControl
                            isInvalid={props.errors.tel}
                            isRequired={true}
                          >
                            <Input
                              fontSize={{ base: "lg", md: "xl" }}
                              id={"tel"}
                              name="tel"
                              onBlur={props.handleBlur}
                              onChange={props.handleChange}
                              placeholder="enter telephone number here"
                              type="text"
                              value={props.values.tel}
                              w={modal40of80ResPoints}
                            />
                            <FormHelperText align="end">
                              e.g. "360-867-5309"
                            </FormHelperText>
                          </FormControl>
                        </Flex>
                      </InputGroup>

                      <ErrOrOkAlert
                        errorText={props.errors.tel}
                        iconError={faExclamationTriangle}
                        iconErrorColor="#F56565"
                        iconErrorSize="lg"
                        iconOk={faCheckSquare}
                        iconOkColor={"#48BB78"}
                        iconOkSize={"lg"}
                        mt={5}
                        name="tel"
                        touched={props.touched.tel}
                        w={modal40of80ResPoints}
                      />
                    </Flex>

                    <Flex
                      direction={"column"}
                      align={"flex-start"}
                      justify={"flex-start"}
                      // vert
                    >
                      <InputGroup
                        borderRadius={"lg"}
                        htmlFor="mail"
                        size={{ base: "sm", md: "lg" }}
                      >
                        <Flex direction={"column"} justify="center">
                          <FormLabel
                            htmlFor="email"
                            fontSize={{ base: "lg", md: "xl" }}
                          >
                            Email Address:
                          </FormLabel>
                          <FormControl
                            isInvalid={props.errors.email}
                            isRequired={true}
                          >
                            <Input
                              fontSize={{ base: "lg", md: "xl" }}
                              id={"email"}
                              name="email"
                              onBlur={props.handleBlur}
                              onChange={props.handleChange}
                              placeholder="enter email address here"
                              type="text"
                              value={props.values.email}
                              w={modal40of80ResPoints}
                            />
                            <FormHelperText align="end">
                              e.g. "ivanna.stickenpoke@yahoo.com"
                            </FormHelperText>
                          </FormControl>
                        </Flex>
                      </InputGroup>

                      <ErrOrOkAlert
                        errorText={props.errors.email}
                        iconError={faExclamationTriangle}
                        iconErrorColor="#F56565"
                        iconErrorSize="lg"
                        iconOk={faCheckCircle}
                        iconOkColor={"#48BB78"}
                        iconOkSize={"lg"}
                        mt={5}
                        name="email"
                        touched={props.touched.email}
                        w={modal40of80ResPoints}
                      />
                    </Flex>
                  </Stack>

                  <InputGroup
                    borderRadius={"lg"}
                    htmlFor="message"
                    size={{ base: "sm", md: "lg" }}
                  >
                    <Flex direction={"column"} justify="center">
                      <FormLabel
                        htmlFor="message"
                        // fontSize={{ base: "lg", md: "xl" }}
                      >
                        Message:
                      </FormLabel>
                      <FormControl
                        isInvalid={props.errors.message}
                        isRequired={true}
                      >
                        <Textarea
                          fontSize={{ base: "lg", md: "xl" }}
                          id={"message"}
                          name="message"
                          onBlur={props.handleBlur}
                          onChange={props.handleChange}
                          placeholder="Cost? Time? Specific artist?"
                          rows="8"
                          type="text"
                          value={props.values.message}
                          minW={modalTextareaResPoints}
                        />
                        <FormHelperText align="end">
                          e.g. "How much does Ryan charge for a full-color
                          sleeve?"
                        </FormHelperText>
                      </FormControl>
                    </Flex>
                  </InputGroup>

                  <ErrorMsgAlert
                    iconDead={faSkullCrossbones}
                    iconDeadColor={"#F56565"}
                    iconDeadSize={"lg"}
                    iconOk={faCheckSquare}
                    iconOkColor={"#48BB78"}
                    iconOkSize={"lg"}
                    iconUnfinished={faHeadSideCough}
                    iconUnfinishedColor={"#FF9900"}
                    iconUnfinishedSize={"lg"}
                    errorText={props.errors.message}
                    mt={5}
                    name="message"
                    touched={props.touched.message}
                  />

                  <Box
                    align={"right"}
                    display={"block"}
                    maxW={{ base: "18rem", sm: "24rem", md: "100%" }}
                  >
                    <Button
                      colorScheme={"blue"}
                      disabled={!(props.isValid && props.dirty)}
                      name="submit"
                      onMouseDown={handleOnMouseDown}
                      onClick={closeModal}
                      type={"submit"}
                      m={4}
                      minW={"5rem"}
                    >
                      Submit
                    </Button>
                    <Button
                      /** DOM complains about button style: in Chakra docs?
                       * secondary
                       **/
                      colorScheme={"blue"}
                      disabled={!props.dirty}
                      name="reset"
                      onClick={props.resetForm}
                      onMouseDown={handleOnMouseDown}
                      type={"reset"}
                      m={4}
                      minW={"5rem"}
                    >
                      Reset
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>
          </VStack>
        </FadeScaleXWrapper>
      </AnimatePresence>
    </Fragment>
  );
};

export default FormMailer;
