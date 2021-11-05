import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export const Buttons: React.FunctionComponent<{}> = () => (
  <>
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Primary</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="contained" sx={{ backgroundColor: "primary.dark" }}>
        Button with a custom sx
      </Button>
    </Stack>
    <Stack direction="row" spacing={2} my={2}>
      <Button>Primary</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text-buttons">Link</Button>
    </Stack>
    <Stack direction="row" spacing={2} my={2}>
      <Button variant="outlined">Primary</Button>
      <Button variant="outlined" disabled>
        Disabled
      </Button>
      <Button variant="outlined" href="#outlined-buttons">
        Link
      </Button>
    </Stack>
    <Stack direction="row" spacing={2} my={2}>
      <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
    </Stack>
    <Stack sx={{ "& button": { m: 1 } }}>
      <div>
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </div>
      <div>
        <Button variant="outlined" size="small">
          Small
        </Button>
        <Button variant="outlined" size="medium">
          Medium
        </Button>
        <Button variant="outlined" size="large">
          Large
        </Button>
      </div>
      <div>
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </div>
    </Stack>
  </>
);
