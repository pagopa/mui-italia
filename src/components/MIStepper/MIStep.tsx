import React from 'react';

export type MIStepProps = {
  label?: React.ReactNode;
  children: React.ReactNode;
};

const MIStep: React.FC<MIStepProps> = ({ children }) => <>{children}</>;

export default MIStep;
