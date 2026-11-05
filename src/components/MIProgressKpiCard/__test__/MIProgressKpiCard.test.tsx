import { ThemeProvider, createTheme } from '@mui/material/styles';
import { linearProgressClasses } from '@mui/material/LinearProgress';
import { vi } from 'vitest';
import { act, fireEvent, render, screen } from '../../../test-utils';
import { theme } from '../../../theme';
import { MIProgressKpiCard } from '../index';

const customTheme = createTheme(theme, {
  colors: {
    neutral: { grey: { 100: '#112233', 700: '#445566' } },
    blue: { 500: '#778899' },
    success: { 700: '#226644' },
  },
});

// jsdom resolves computed styles by rule order, ignoring selector specificity, so MUI's
// later-inserted bar color would win. Read the fill color from the card's root-scoped rule instead.
const getBarFillColor = (bar: Element) =>
  Array.from(document.styleSheets)
    .flatMap((sheet) => Array.from(sheet.cssRules))
    .filter(
      (rule): rule is CSSStyleRule =>
        'selectorText' in rule &&
        rule.selectorText.endsWith(` .${linearProgressClasses.bar}`) &&
        bar.matches(rule.selectorText)
    )
    .at(-1)
    ?.style.getPropertyValue('background-color');

describe('MIProgressKpiCard theme customization', () => {
  it('uses the active theme and exposes a focusable tooltip button', async () => {
    render(
      <ThemeProvider theme={customTheme}>
        <MIProgressKpiCard
          title="Customized KPI"
          tooltipText="More information"
          denominator={10}
          bars={[{ numerator: 5, label: 'Processed items' }]}
        />
      </ThemeProvider>
    );

    expect(screen.getByText('Customized KPI')).toHaveStyle({ color: '#445566' });
    expect(screen.getByText('Processed items')).toHaveStyle({ color: '#445566' });
    expect(screen.getByTestId('InfoOutlinedIcon')).toHaveStyle({ color: '#778899' });
    const tooltipButton = screen.getByRole('button', { name: 'More information' });
    expect(tooltipButton).toHaveAttribute('type', 'button');
    expect(tooltipButton).toHaveAttribute('tabindex', '0');
    // MUI Tooltip opens on focus only when focus is visible (keyboard modality)
    fireEvent.keyDown(document.body, { key: 'Tab' });
    act(() => tooltipButton.focus());
    expect(await screen.findByRole('tooltip')).toHaveTextContent('More information');
  });

  it.each([
    { numerator: 5, fillColor: '#778899', completed: false },
    { numerator: 10, fillColor: '#226644', completed: true },
  ])('uses the active theme for progress $numerator/10', ({ numerator, fillColor, completed }) => {
    render(
      <ThemeProvider theme={customTheme}>
        <MIProgressKpiCard title="Customized KPI" denominator={10} bars={[{ numerator }]} />
      </ThemeProvider>
    );

    const progress = screen.getByRole('progressbar');
    expect(progress).toHaveStyle({ backgroundColor: '#112233' });
    expect(getBarFillColor(progress.querySelector(`.${linearProgressClasses.bar}`)!)).toBe(fillColor);
    if (completed) {
      expect(screen.getByTestId('CheckCircleIcon')).toHaveStyle({ color: '#226644' });
    } else {
      expect(screen.queryByTestId('CheckCircleIcon')).not.toBeInTheDocument();
    }
  });
});

describe('MIProgressKpiCard', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders the title, the icon and the tooltip button', () => {
    render(
      <MIProgressKpiCard
        title="Pratiche"
        icon={<span data-testid="kpi-icon" />}
        tooltipText="Maggiori informazioni"
        denominator={10}
        bars={[{ numerator: 5 }]}
      />
    );

    expect(screen.getByText('Pratiche')).toBeInTheDocument();
    expect(screen.getByTestId('kpi-icon')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Maggiori informazioni' })).toBeInTheDocument();
  });

  it('renders the sum of all bar numerators as the total percentage', () => {
    render(
      <MIProgressKpiCard
        title="Pratiche"
        denominator={10}
        bars={[
          { numerator: 2, label: 'Approvate' },
          { numerator: 3, label: 'In attesa' },
        ]}
      />
    );

    expect(screen.getByText('50%')).toBeInTheDocument();
    expect(screen.getByText('Approvate')).toBeInTheDocument();
    expect(screen.getByText('In attesa')).toBeInTheDocument();
  });

  it('renders the bars with the shared denominator', () => {
    render(<MIProgressKpiCard title="Pratiche" denominator={10} bars={[{ numerator: 5 }]} />);

    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '50');
  });

  it.each([0, -5])('renders 0%% and no bar progress when denominator is %s', (denominator) => {
    render(<MIProgressKpiCard title="Pratiche" denominator={denominator} bars={[{ numerator: 5 }]} />);

    expect(screen.getByText('0%')).toBeInTheDocument();
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0');
  });

  it('logs an error when the total numerator exceeds the denominator', () => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});

    render(
      <MIProgressKpiCard
        title="Pratiche"
        denominator={10}
        bars={[{ numerator: 8 }, { numerator: 7 }]}
      />
    );

    expect(screen.getByText('150%')).toBeInTheDocument();
    expect(consoleError).toHaveBeenCalledWith('Total numerator exceeds the denominator');
  });

  it('does not log an error when the total numerator equals the denominator', () => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});

    render(
      <MIProgressKpiCard title="Pratiche" denominator={10} bars={[{ numerator: 4 }, { numerator: 6 }]} />
    );

    expect(screen.getByText('100%')).toBeInTheDocument();
    expect(consoleError).not.toHaveBeenCalled();
  });

  it('does not log an error when the denominator is zero', () => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});

    render(<MIProgressKpiCard title="Pratiche" denominator={0} bars={[{ numerator: 5 }]} />);

    expect(consoleError).not.toHaveBeenCalled();
  });
});