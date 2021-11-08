import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import italia from "../colors/italia";

export const AppBarComponent: React.FunctionComponent<{}> = () => (
  <>
    <AppBar position="relative" sx={{ backgroundColor: italia[700] }}>
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Box sx={{ flexGrow: 1, textAlign: "end" }}>
          <Button variant="contained" size="small">
            Esci
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
    <AppBar position="relative">
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Box sx={{ flexGrow: 1, textAlign: "start" }} py={3}>
          <Typography variant="h1" component="div" color="white">
            Logo or title
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  </>
);
