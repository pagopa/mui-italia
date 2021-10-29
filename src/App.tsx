import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { ThemeProvider } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import theme from "./theme";
import { Buttons } from "./componentsexample/Buttons";
import { Types } from "./componentsexample/Typography";
import { VerticalTabs } from "./componentsexample/Tabs";

const Main: React.FunctionComponent<{}> = () => (
  <ThemeProvider theme={theme}>
    <div className="App">
      <Box m={5} sx={{ maxWidth: 960, width: "100%" }}>
        <Typography variant="h1" component="div" gutterBottom>
          Welcome, this is the MUI Italia theme.
        </Typography>
        <Typography variant="h4" gutterBottom component="div">
          An experimental theme MUI based, inspired by{" "}
          <Link href="https://italia.github.io/bootstrap-italia/">
            Bootstrap Italia
          </Link>
          .
        </Typography>
        <Typography my={3} variant="h6" component="div" gutterBottom>
          Examples of Buttons
        </Typography>
        <Buttons></Buttons>
        <Divider />
        <Typography my={3} variant="h6" component="div" gutterBottom>
          Examples of Heading and typography
        </Typography>
        <Types></Types>
        <Divider />
        <Typography my={3} variant="h6" component="div" gutterBottom>
          Examples of Tabs
        </Typography>
        <VerticalTabs></VerticalTabs>
      </Box>
    </div>
  </ThemeProvider>
);

export default Main;
