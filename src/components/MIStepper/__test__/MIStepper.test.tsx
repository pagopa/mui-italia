import { render } from '@testing-library/react';

import MIStepper from '../MIStepper';
import { createMatchMedia } from '../../../test-utils';

describe('MIStepper', () => {
  afterEach(() => {
    delete (window as any).matchMedia;
  });

  const steps = [{ label: 'First Step' }, { label: 'Second Step' }, { label: 'Third Step' }];

  it('renders the desktop view correctly', () => {
    const { getByTestId, getByText } = render(<MIStepper steps={steps} activeStep={0} />);

    const desktopWizardStepper = getByTestId('desktopWizardStepper');
    expect(desktopWizardStepper).toBeInTheDocument();
    steps.forEach((step) => {
      expect(getByText(step.label)).toBeInTheDocument();
    });
    expect(getByText(steps[0].label).closest('span')).toHaveClass('Mui-active');
  });

  it('renders the mobile view correctly', () => {
    window.matchMedia = createMatchMedia(800);
    const { getByTestId, getByText } = render(<MIStepper steps={steps} activeStep={0} />);

    const mobileStepper = getByTestId('mobileStepper');
    expect(mobileStepper).toBeInTheDocument();
    expect(getByTestId('mobileStepperLabel')).toBeInTheDocument();
    expect(getByTestId('mobileStepperActive')).toBeInTheDocument();
    expect(getByText(steps[0].label)).toBeInTheDocument();
  });

  it('renders the second step correctly in mobile view', () => {
    window.matchMedia = createMatchMedia(800);
    const { getByTestId, getByText } = render(<MIStepper steps={steps} activeStep={1} />);

    const mobileStepper = getByTestId('mobileStepper');
    expect(mobileStepper).toBeInTheDocument();
    expect(getByTestId('mobileStepperLabel')).toBeInTheDocument();
    expect(getByText(steps[1].label)).toBeInTheDocument();
  });
});
