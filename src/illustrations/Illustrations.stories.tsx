import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Box, Typography } from "@mui/material";

import {
  IllusCompleted,
  IllusError,
  IllusUploadFile,
  IllusSms,
  IllusEmailValidation,
  IllusEmail,
  IllusPiggyBank,
  IllusLogin,
  IllusSafeDeposit,
  IllusQuick,
  IllusSharingInfo,
  IllusRepository,
  IllusHistoryDoc,
  IllusDataSecurity,
  IllusSimplify,
  IllusPaymentCompleted,
  IllusInProgress,
} from "./";

export interface IllusBoxProps {
  illustration: JSX.Element;
  name: string;
}

export default {
  title: "Assets/Illustrations",
  parameters: { controls: { sort: "size" } },
} as ComponentMeta<typeof Box>;

const IllusBox = ({ name, illustration }: IllusBoxProps): JSX.Element => (
  <Box
    sx={{
      backgroundColor: "background.paper",
      borderRadius: 2,
      p: 3,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    {illustration}
    {name && (
      <Typography sx={{ pt: 3 }} variant="body1">
        {name}
      </Typography>
    )}
  </Box>
);

export const Overview: ComponentStory<typeof Box> = () => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: 2,
    }}
  >
    <IllusBox name={"<IllusCompleted />"} illustration={<IllusCompleted />} />
    <IllusBox name={"<IllusError />"} illustration={<IllusError />} />
    <IllusBox name={"<IllusUploadFile />"} illustration={<IllusUploadFile />} />
    <IllusBox name={"<IllusSms />"} illustration={<IllusSms />} />
    <IllusBox
      name={"<IllusEmailValidation />"}
      illustration={<IllusEmailValidation />}
    />
    <IllusBox name={"<IllusEmail />"} illustration={<IllusEmail />} />
    <IllusBox name={"<IllusPiggyBank />"} illustration={<IllusPiggyBank />} />
    <IllusBox name={"<IllusLogin />"} illustration={<IllusLogin />} />
    <IllusBox name={"<IllusSimplify />"} illustration={<IllusSimplify />} />
    <IllusBox
      name={"<IllusSafeDeposit />"}
      illustration={<IllusSafeDeposit />}
    />
    <IllusBox name={"<IllusQuick />"} illustration={<IllusQuick />} />
    <IllusBox
      name={"<IllusSharingInfo />"}
      illustration={<IllusSharingInfo />}
    />
    <IllusBox name={"<IllusRepository />"} illustration={<IllusRepository />} />
    <IllusBox name={"<IllusHistoryDoc />"} illustration={<IllusHistoryDoc />} />
    <IllusBox
      name={"<IllusDataSecurity />"}
      illustration={<IllusDataSecurity />}
    />
    <IllusBox
      name={"<IllusPaymentCompleted />"}
      illustration={<IllusPaymentCompleted />}
    />
    <IllusBox name={"<IllusInProgress />"} illustration={<IllusInProgress />} />
  </Box>
);

Overview.parameters = {
  controls: { hideNoControlsWarning: true },
};

Overview.decorators = [
  (Story) => (
    <div style={{ padding: "16px", backgroundColor: "#F5F5F5" }}>
      <Story />
    </div>
  ),
];
