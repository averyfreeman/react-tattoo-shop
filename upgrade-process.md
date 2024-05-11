# copy original to another directory
# asdf local nodejs 20.12.2

# skipped ncu, but that might look like this:
# node-check-update package from global installation:
# ncu -u

# instead, created new project, attempted to install dependency list fresh
# npm vite@latest install lindab-vite --template react

# new versions installed without issue:
    "@fortawesome/fontawesome-svg-core" "@fortawesome/free-brands-svg-icons" "@fortawesome/free-regular-svg-icons" "@fortawesome/free-solid-svg-icons" "@fortawesome/react-fontawesome" "@n8tb1t/use-scroll-position" "formik" "framer-motion" "history" "react-loading-icons" "react-router-dom" "yup"


# not included because of dependency issues
     "react-ga" "react-gcaptcha"  "react-scripts" "react" "react-dom" "react-hook-google-maps" 

# resulting dependency list (package.json):
  "dependencies": {
    "@chakra-ui/icons": "^2.1.1",
    "@chakra-ui/react": "^2.8.2",
    "@chakra-ui/styled-system": "^2.9.2",
    "@emotion/react": "^11.11.4",
    "@fortawesome/fontawesome-svg-core": "^6.5.2",
    "@fortawesome/free-brands-svg-icons": "^6.5.2",
    "@fortawesome/free-regular-svg-icons": "^6.5.2",
    "@fortawesome/free-solid-svg-icons": "^6.5.2",
    "@fortawesome/react-fontawesome": "^0.2.0",
    "@n8tb1t/use-scroll-position": "^2.0.3",
    "formik": "^2.4.5",
    "framer-motion": "^11.1.7",
    "history": "^5.3.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-loading-icons": "^1.1.0",
    "react-router-dom": "^6.23.0",
    "yup": "^1.4.0"

# vite-react has a different default entry point
mv index.jsx main.jsx


# not necessary - root is created by index.html in root
# deprecated: I am trying to keep these as compatibility-friendly as possible, but I think there was absolute paths from jsconfig.json -- might be resolved with 
// vite.config.js
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "./": "./src",
    },
  },
  plugins: [react()],
});

