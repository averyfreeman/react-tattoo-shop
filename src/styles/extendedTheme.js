// import "@soleo/font-bftinyhand/css/font-bftinyhand.css";
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/bangers";
import "@fontsource/montserrat";
import "@fontsource/kalam";
import "@fontsource/dm-serif-text";
import "@fontsource/krona-one";
import "@fontsource/rubik-marker-hatch";
import "@fontsource/permanent-marker";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const fonts = {
  heading: `'Bangers', 'Montserrat', Sans-Serif`,
  body: `'Permanent Marker', 'Kalam', 'Montserrat', serif`,
};

let theme = extendTheme({ config, fonts });

// withDefaultProps
// withDefaultProps({
//   defaultProps: {
//     variant: "outline",
//     size: "lg",
//   },
export default theme;
