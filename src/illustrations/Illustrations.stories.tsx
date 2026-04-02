import { StoryFn, Meta } from '@storybook/react-vite';

import { Box, Divider, Typography } from '@mui/material';

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
  IllusUmbrella,
  IllusAlarmClock,
  IllusUserUnauthorized,
  IllusMIMessage,
  IllusMIAward,
  IllusMIEmailValidation,
  IllusMIQuick,
  IllusMICompleted,
  IllusMIMaintenance,
  IllusMISavingMoney,
  IllusMIDataSecurity,
  IllusMIError,
  IllusMIMultipleFiles,
  IllusMINews,
  IllusMISimplify,
  IllusMIAlarmClock,
  IllusMIIdea,
  IllusMIInstitution,
  IllusMISafeDeposit,
  IllusMIBell,
  IllusMIEnvelope,
  IllusMILeggi,
  IllusMIPush,
  IllusMIUploadFile,
  IllusMIAssistance,
  IllusMICode,
  IllusMIFileCheck,
  IllusMIFlag,
  IllusMIUserManual,
  IllusMIBadge,
  IllusMIBug,
  IllusMICitizen,
  IllusMICloud,
  IllusMICreditCard,
  IllusMIDesktop,
  IllusMIDownload,
  IllusMIEarth,
  IllusMIEnterprise,
  IllusMIHome,
  IllusMIImage,
  IllusMIMapPin,
  IllusMIOpenFolder,
  IllusMIPersonalFile,
  IllusMISchool,
  IllusMISmartphone,
  IllusMISmartphoneCheck,
  IllusMISms,
  IllusMIUpload,
  IllusMIBuilding,
  IllusMICalendar,
  IllusMIEuro,
  IllusMIHistoryDoc,
  IllusMIPieChart,
  IllusMISingleFile,
  IllusMIStorage,
  IllusMIUserCheck,
  IllusMIDelega,
  IllusMIFingerPrint,
  IllusMIInbox,
  IllusMIKeypad,
  IllusMIOptions,
  IllusMISync,
  IllusMIWallet,
  IllusMIBusiness,
  IllusMIDirection,
  IllusMIDocumentation,
  IllusMIGraduation,
  IllusMIMessages,
  IllusMIRepository,
  IllusMISecurity,
} from './';
import { JSX } from 'react';

export interface IllusBoxProps {
  illustration: JSX.Element;
  name: string;
}

export default {
  title: 'Assets/Illustrations',
  parameters: { controls: { sort: 'size' } },
} as Meta<typeof Box>;

const IllusBox = ({ name, illustration }: IllusBoxProps): JSX.Element => (
  <Box
    sx={{
      backgroundColor: 'background.paper',
      borderRadius: 2,
      p: 3,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
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

export const Overview: StoryFn<typeof Box> = () => (
  <>
    <Typography variant="h5" mb={2}>
      Mui Italia 2.0 Illustrations
    </Typography>
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: 2,
      }}
    >
      <IllusBox name={'<IllusMIAward />'} illustration={<IllusMIAward />} />
      <IllusBox name={'<IllusMIMessage />'} illustration={<IllusMIMessage />} />
      <IllusBox name={'<IllusMIEmailValidation />'} illustration={<IllusMIEmailValidation />} />
      <IllusBox name={'<IllusMIQuick />'} illustration={<IllusMIQuick />} />
      <IllusBox name={'<IllusMICompleted />'} illustration={<IllusMICompleted />} />
      <IllusBox name={'<IllusMIMaintenance />'} illustration={<IllusMIMaintenance />} />
      <IllusBox name={'<IllusMISavingMoney />'} illustration={<IllusMISavingMoney />} />
      <IllusBox name={'<IllusMISimplify />'} illustration={<IllusMISimplify />} />
      <IllusBox name={'<IllusMIError />'} illustration={<IllusMIError />} />
      <IllusBox name={'<IllusMIDataSecurity />'} illustration={<IllusMIDataSecurity />} />
      <IllusBox name={'<IllusMINews />'} illustration={<IllusMINews />} />
      <IllusBox name={'<IllusMIMultipleFiles />'} illustration={<IllusMIMultipleFiles />} />
      <IllusBox name={'<IllusMIIdea />'} illustration={<IllusMIIdea />} />
      <IllusBox name={'<IllusMIInstitution />'} illustration={<IllusMIInstitution />} />
      <IllusBox name={'<IllusMISafeDeposit />'} illustration={<IllusMISafeDeposit />} />
      <IllusBox name={'<IllusMIAlarmClock />'} illustration={<IllusMIAlarmClock />} />
      <IllusBox name={'<IllusMIEnvelope />'} illustration={<IllusMIEnvelope />} />
      <IllusBox name={'<IllusMIBell />'} illustration={<IllusMIBell />} />
      <IllusBox name={'<IllusMIUploadFile />'} illustration={<IllusMIUploadFile />} />
      <IllusBox name={'<IllusMIPush />'} illustration={<IllusMIPush />} />
      <IllusBox name={'<IllusMILeggi />'} illustration={<IllusMILeggi />} />
      <IllusBox name={'<IllusMICode />'} illustration={<IllusMICode />} />
      <IllusBox name={'<IllusMIFileCheck />'} illustration={<IllusMIFileCheck />} />
      <IllusBox name={'<IllusMIAssistance />'} illustration={<IllusMIAssistance />} />
      <IllusBox name={'<IllusMIFlag />'} illustration={<IllusMIFlag />} />
      <IllusBox name={'<IllusMIUserManual />'} illustration={<IllusMIUserManual />} />
      <IllusBox name={'<IllusMIImage />'} illustration={<IllusMIImage />} />
      <IllusBox name={'<IllusMIEarth />'} illustration={<IllusMIEarth />} />
      <IllusBox name={'<IllusMIBug />'} illustration={<IllusMIBug />} />
      <IllusBox name={'<IllusMIEnterprise />'} illustration={<IllusMIEnterprise />} />
      <IllusBox name={'<IllusMIDownload />'} illustration={<IllusMIDownload />} />
      <IllusBox name={'<IllusMISmartphoneCheck />'} illustration={<IllusMISmartphoneCheck />} />
      <IllusBox name={'<IllusMISmartphone />'} illustration={<IllusMISmartphone />} />
      <IllusBox name={'<IllusMICreditCard />'} illustration={<IllusMICreditCard />} />
      <IllusBox name={'<IllusMISms />'} illustration={<IllusMISms />} />
      <IllusBox name={'<IllusMIDesktop />'} illustration={<IllusMIDesktop />} />
      <IllusBox name={'<IllusMICitizen />'} illustration={<IllusMICitizen />} />
      <IllusBox name={'<IllusMICloud />'} illustration={<IllusMICloud />} />
      <IllusBox name={'<IllusMIUpload />'} illustration={<IllusMIUpload />} />
      <IllusBox name={'<IllusMIOpenFolder />'} illustration={<IllusMIOpenFolder />} />
      <IllusBox name={'<IllusMIBadge />'} illustration={<IllusMIBadge />} />
      <IllusBox name={'<IllusMISchool />'} illustration={<IllusMISchool />} />
      <IllusBox name={'<IllusMIHome />'} illustration={<IllusMIHome />} />
      <IllusBox name={'<IllusMIMapPin />'} illustration={<IllusMIMapPin />} />
      <IllusBox name={'<IllusMIPersonalFile />'} illustration={<IllusMIPersonalFile />} />
      <IllusBox name={'<IllusMIStorage />'} illustration={<IllusMIStorage />} />
      <IllusBox name={'<IllusMIPieChart />'} illustration={<IllusMIPieChart />} />
      <IllusBox name={'<IllusMIEuro />'} illustration={<IllusMIEuro />} />
      <IllusBox name={'<IllusMIBuilding />'} illustration={<IllusMIBuilding />} />
      <IllusBox name={'<IllusMIHistoryDoc />'} illustration={<IllusMIHistoryDoc />} />
      <IllusBox name={'<IllusMICalendar />'} illustration={<IllusMICalendar />} />
      <IllusBox name={'<IllusMISingleFile />'} illustration={<IllusMISingleFile />} />
      <IllusBox name={'<IllusMIUserCheck />'} illustration={<IllusMIUserCheck />} />
      <IllusBox name={'<IllusMIOptions />'} illustration={<IllusMIOptions />} />
      <IllusBox name={'<IllusMISync />'} illustration={<IllusMISync />} />
      <IllusBox name={'<IllusMIFingerPrint />'} illustration={<IllusMIFingerPrint />} />
      <IllusBox name={'<IllusMIKeypad />'} illustration={<IllusMIKeypad />} />
      <IllusBox name={'<IllusMIInbox />'} illustration={<IllusMIInbox />} />
      <IllusBox name={'<IllusMIWallet />'} illustration={<IllusMIWallet />} />
      <IllusBox name={'<IllusMIDelega />'} illustration={<IllusMIDelega />} />
      <IllusBox name={'<IllusMIMessages />'} illustration={<IllusMIMessages />} />
      <IllusBox name={'<IllusMIDirection />'} illustration={<IllusMIDirection />} />
      <IllusBox name={'<IllusMISecurity />'} illustration={<IllusMISecurity />} />
      <IllusBox name={'<IllusMIDocumentation />'} illustration={<IllusMIDocumentation />} />
      <IllusBox name={'<IllusMIRepository />'} illustration={<IllusMIRepository />} />
      <IllusBox name={'<IllusMIBusiness />'} illustration={<IllusMIBusiness />} />
      <IllusBox name={'<IllusMIGraduation />'} illustration={<IllusMIGraduation />} />
      <IllusBox name={'<IllusMIAccess />'} illustration={<IllusMIAccess />} />
      <IllusBox name={'<IllusMITrash />'} illustration={<IllusMITrash />} />
      <IllusBox name={'<IllusMILineChart />'} illustration={<IllusMILineChart />} />
    </Box>
    <Divider sx={{ my: 4 }} />
    <Typography variant="h5" mb={2}>
      Mui Italia Illustrations
    </Typography>
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: 2,
      }}
    >
      <IllusBox name={'<IllusCompleted />'} illustration={<IllusCompleted />} />
      <IllusBox name={'<IllusError />'} illustration={<IllusError />} />
      <IllusBox name={'<IllusUploadFile />'} illustration={<IllusUploadFile />} />
      <IllusBox name={'<IllusSms />'} illustration={<IllusSms />} />
      <IllusBox name={'<IllusEmailValidation />'} illustration={<IllusEmailValidation />} />
      <IllusBox name={'<IllusEmail />'} illustration={<IllusEmail />} />
      <IllusBox name={'<IllusPiggyBank />'} illustration={<IllusPiggyBank />} />
      <IllusBox name={'<IllusLogin />'} illustration={<IllusLogin />} />
      <IllusBox name={'<IllusSimplify />'} illustration={<IllusSimplify />} />
      <IllusBox name={'<IllusSafeDeposit />'} illustration={<IllusSafeDeposit />} />
      <IllusBox name={'<IllusQuick />'} illustration={<IllusQuick />} />
      <IllusBox name={'<IllusSharingInfo />'} illustration={<IllusSharingInfo />} />
      <IllusBox name={'<IllusRepository />'} illustration={<IllusRepository />} />
      <IllusBox name={'<IllusHistoryDoc />'} illustration={<IllusHistoryDoc />} />
      <IllusBox name={'<IllusDataSecurity />'} illustration={<IllusDataSecurity />} />
      <IllusBox name={'<IllusPaymentCompleted />'} illustration={<IllusPaymentCompleted />} />
      <IllusBox name={'<IllusInProgress />'} illustration={<IllusInProgress />} />
      <IllusBox name={'<IllusUmbrella />'} illustration={<IllusUmbrella />} />
      <IllusBox name={'<IllusAlarmClock />'} illustration={<IllusAlarmClock />} />
      <IllusBox name={'<IllusUserDenied />'} illustration={<IllusUserUnauthorized />} />
    </Box>
  </>
);

Overview.parameters = {
  controls: { hideNoControlsWarning: true },
};

Overview.decorators = [
  (Story) => (
    <div style={{ padding: '16px', backgroundColor: '#F5F5F5' }}>
      <Story />
    </div>
  ),
];
