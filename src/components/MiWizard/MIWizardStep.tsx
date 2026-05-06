import React from 'react';

export type MIWizardStepProps = {
  label?: React.ReactNode;
  children: React.ReactNode;
};

const MIWizardStep: React.FC<MIWizardStepProps> = ({ children }) => <>{children}</>;

export default MIWizardStep;
