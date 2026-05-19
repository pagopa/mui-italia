/*import { describe, expect, it, vi } from 'vitest';

import { render } from '@testing-library/react';

import { createMatchMedia } from '../../../test-utils';
import MIWizardStepper from '../MIWizardStepper';

// Mock the `useIsMobile` hook
vi.mock('./useIsMobile', () => ({
  useIsMobile: vi.fn(),
}));

describe('MIWizardStepper', () => {
  const steps = [{ label: 'First Step' }, { label: 'Second Step' }, { label: 'Third Step' }];

  it('renders the desktop view correctly', () => {
    const { getByTestId, getByText } = render(<MIWizardStepper steps={steps} activeStep={0} />);

    const desktopWizardStepper = getByTestId('desktopWizardStepper');
    expect(desktopWizardStepper).toBeInTheDocument();
    steps.forEach((step) => {
      expect(getByText(step.label)).toBeInTheDocument();
    });
    expect(getByText(steps[0].label).closest('span')).toHaveClass('Mui-active');
  });

  it('renders the mobile view correctly', () => {
    window.matchMedia = createMatchMedia(800);
    const { getByTestId, getByText } = render(<MIWizardStepper steps={steps} activeStep={0} />);

    const mobileWizardStepper = getByTestId('mobileWizardStepper');
    expect(mobileWizardStepper).toBeInTheDocument();
    expect(getByText('wizard.stepper.of')).toBeInTheDocument();
    expect(getByText('wizard.stepper.activeStep')).toBeInTheDocument();
    expect(getByText(steps[0].label)).toBeInTheDocument();
  });

  it('renders the second step correctly in mobile view', () => {
    window.matchMedia = createMatchMedia(800);
    const { getByTestId, getByText } = render(<MIWizardStepper steps={steps} activeStep={1} />);

    const mobileWizardStepper = getByTestId('mobileWizardStepper');
    expect(mobileWizardStepper).toBeInTheDocument();
    expect(getByText('wizard.stepper.of')).toBeInTheDocument();
    expect(getByText(steps[1].label)).toBeInTheDocument();
  });
});*/
