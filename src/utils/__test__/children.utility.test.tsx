import { checkChildren, isExplicitChild } from '../children.utility';

const MockedCmpChild: React.FC = () => <div>I'm a mocked component child</div>;
const MockedCmpAnotherChild: React.FC = () => <div>I'm an another mocked component child</div>;

describe('test children utility', () => {
  it('test checkChildren - everything is ok', () => {
    expect(
      checkChildren(<MockedCmpChild />, [{ cmp: MockedCmpChild }], 'Mocked Cmp')
    ).toBeUndefined();
  });

  it('test checkChildren - everything is ok with null', () => {
    expect(checkChildren(null, [{ cmp: MockedCmpChild }], 'Mocked Cmp')).toBeUndefined();
  });

  it('test checkChildren - forbidden type', () => {
    expect(() =>
      checkChildren(<p>Forbidden type</p>, [{ cmp: MockedCmpChild }], 'Mocked Cmp')
    ).toThrow('Mocked Cmp can have only children of type MockedCmpChild');
  });

  it('test checkChildren - forbidden type with count', () => {
    expect(() =>
      checkChildren(<p>Forbidden type</p>, [{ cmp: MockedCmpChild, maxCount: 2 }], 'Mocked Cmp')
    ).toThrow('Mocked Cmp can have only 2 children of type MockedCmpChild');
  });

  it('test checkChildren - forbidden type with multiple allowed types', () => {
    expect(() =>
      checkChildren(
        <p>Forbidden type</p>,
        [
          { cmp: MockedCmpChild, maxCount: 2 },
          { cmp: MockedCmpAnotherChild, maxCount: 1 },
        ],
        'Mocked Cmp'
      )
    ).toThrow(
      'Mocked Cmp can have only 2 children of type MockedCmpChild and 1 child of type MockedCmpAnotherChild'
    );
  });

  it('test checkChildren - not required component in children', () => {
    expect(() =>
      checkChildren(
        <MockedCmpChild />,
        [
          { cmp: MockedCmpChild, maxCount: 2 },
          { cmp: MockedCmpAnotherChild, maxCount: 1, required: true },
        ],
        'Mocked Cmp'
      )
    ).toThrow('Mocked Cmp can have only 1 child of type MockedCmpAnotherChild');
  });

  it('test checkChildren - exceed max number of children of a specific type', () => {
    expect(() =>
      checkChildren(
        [<MockedCmpChild key={1} />, <MockedCmpChild key={2} />, <MockedCmpChild key={3} />],
        [{ cmp: MockedCmpChild, maxCount: 2 }],
        'Mocked Cmp'
      )
    ).toThrow('Mocked Cmp can have only 2 children of type MockedCmpChild');
  });

  it('returns true if the component has the matching displayName', () => {
    const MockComponent = () => <div>Test</div>;
    MockComponent.displayName = 'DataValue';

    const element = <MockComponent />;
    expect(isExplicitChild(element, 'DataValue')).toBe(true);
  });

  it('returns true if the component function name matches (fallback)', () => {
    const DataValue = () => <div>Test</div>;

    const element = <DataValue />;
    expect(isExplicitChild(element, 'DataValue')).toBe(true);
  });

  it('returns false for a different custom component', () => {
    const OtherComponent = () => <div>Test</div>;
    OtherComponent.displayName = 'AnotherComponent';

    const element = <OtherComponent />;
    expect(isExplicitChild(element, 'DataValue')).toBe(false);
  });

  it('returns false for standard HTML elements', () => {
    // Un normale tag <div>
    const element = <div className="test" />;
    expect(isExplicitChild(element, 'DataValue')).toBe(false);
  });

  it('returns false for primitive values or invalid elements', () => {
    expect(isExplicitChild('just a text node', 'DataValue')).toBe(false);
    expect(isExplicitChild(12345, 'DataValue')).toBe(false);
    expect(isExplicitChild(null, 'DataValue')).toBe(false);
    expect(isExplicitChild(undefined, 'DataValue')).toBe(false);
  });
});
