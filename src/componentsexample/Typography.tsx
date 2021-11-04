import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const exampleTextHeading =
  "Nel mezzo del cammin di nostra vita mi ritrovai per una selva oscura ché la diritta via era smarrita.";

const exampleTextBody = `Ahi quanto a dir qual era è cosa dura  esta selva selvaggia e aspra e forte 
  che nel pensier rinova la paura! Tant’è amara che poco è più morte; 
  ma per trattar del ben ch’i’ vi trovai, 
  dirò de l’altre cose ch’i’ v’ho scorte.`;

export const Types: React.FunctionComponent<{}> = () => (
  <Box sx={{ maxWidth: 500, width: "100%" }}>
    <Typography variant="h1" component="div" gutterBottom my={2}>
      h1. {exampleTextHeading}
    </Typography>
    <Typography variant="h2" gutterBottom component="div" my={2}>
      h2. {exampleTextHeading}
    </Typography>
    <Typography variant="h3" gutterBottom component="div" my={2}>
      h3. {exampleTextHeading}
    </Typography>
    <Typography variant="h4" gutterBottom component="div" my={2}>
      h4. {exampleTextHeading}
    </Typography>
    <Typography variant="h5" gutterBottom component="div" my={2}>
      h5.{exampleTextHeading}
    </Typography>
    <Typography variant="h6" gutterBottom component="div" my={2}>
      h6. {exampleTextHeading}
    </Typography>
    <Typography variant="subtitle1" gutterBottom component="div" my={2}>
      subtitle1. {exampleTextBody}
    </Typography>
    <Typography variant="subtitle2" gutterBottom component="div" my={2}>
      subtitle2. {exampleTextBody}
    </Typography>
    <Typography variant="body1" gutterBottom my={2}>
      body1. {exampleTextBody}
    </Typography>
    <Typography variant="body1" gutterBottom my={2}>
      Example of a <a href="#anchor">Link by an anchor tag</a>.
      <br />
      Or <Link href="#link">a Link with a Link Component</Link>
    </Typography>
    <Typography variant="body2" gutterBottom my={2}>
      body2. {exampleTextBody}
    </Typography>
    <Typography variant="button" display="block" gutterBottom my={2}>
      button text
    </Typography>
    <Typography variant="caption" display="block" gutterBottom my={2}>
      caption text
    </Typography>
    <Typography variant="overline" display="block" gutterBottom my={2}>
      overline text
    </Typography>
  </Box>
);
