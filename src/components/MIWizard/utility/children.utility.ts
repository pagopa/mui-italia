import { Children, ComponentType, isValidElement } from 'react';

type AllowedTypes = {
  cmp: React.FC<any>;
  maxCount?: number;
  required?: boolean;
};

type CmpCount = { [key: string]: { maxCount?: number; currentCount: number; required?: boolean } };

function getForbiddenMsg(parentCmp: string, cmpCount: CmpCount): string {
  // eslint-disable-next-line functional/no-let
  let forbiddenTypeMessage = `${parentCmp} can have only`;

  Object.entries(cmpCount).forEach((el, index, arr) => {
    const seprator = index === arr.length - 1 ? ' and' : ',';
    forbiddenTypeMessage += `${index === 0 ? '' : seprator}${
      el[1].maxCount ? ' ' + el[1].maxCount : ''
    } ${el[1].maxCount === 1 ? 'child' : 'children'} of type ${el[0]}`;
  });

  return forbiddenTypeMessage;
}

function getCountError(cmpCount: CmpCount, parentCmp: string) {
  for (const [key, value] of Object.entries(cmpCount)) {
    if (
      (value.required && value.currentCount === 0) ||
      (value.maxCount && value.currentCount > value.maxCount)
    ) {
      throw new Error(
        `${parentCmp} can have only ${value.maxCount} ${
          value.maxCount === 1 ? 'child' : 'children'
        } of type ${key}`
      );
    }
  }
}

/**
 * Check if component has valid children
 * @param children list of children
 * @param allowedTypes array of obect with allowed children types, required flag and maxCount for each component
 * @param parentCmp name of parent component (this is for error message)
 */
export function checkChildren(
  children: React.ReactNode,
  allowedTypes: Array<AllowedTypes>,
  parentCmp: string
) {
  const allowedCmp = allowedTypes.map((type) => type.cmp);
  const cmpCount = allowedTypes.reduce((obj, type) => {
    // eslint-disable-next-line functional/immutable-data
    obj[type.cmp.name] = {
      maxCount: type.maxCount,
      currentCount: 0,
      required: type.required,
    };
    return obj;
  }, {} as CmpCount);

  const forbiddenTypeMessage = getForbiddenMsg(parentCmp, cmpCount);

  // check on children
  Children.forEach(children, (element) => {
    // element is null when we have condition like {condition && <Component />}
    if (element === null) {
      return;
    }
    if (!isValidElement(element) || allowedCmp.findIndex((el) => element.type === el) === -1) {
      throw new Error(forbiddenTypeMessage);
    }

    if (typeof element.type !== 'string') {
      // eslint-disable-next-line functional/immutable-data
      cmpCount[element.type.name].currentCount += 1;
    }
  });

  getCountError(cmpCount, parentCmp);
}

/**
 * Inspects a React node to determine if it matches a specific component
 * based on its `displayName` or function `name`.
 *
 * @param {ReactNode} child - The React node to inspect (can be an element, string, null, etc.).
 * @param {string} displayName - The expected display name of the component.
 * @returns {boolean} True if the node is a valid React element and matches the expected name.
 */
export function isExplicitChild(child: React.ReactNode, displayName: string): boolean {
  if (isValidElement(child)) {
    // child.type can be a string (for HTML tags like 'div') or a function/object (for components)
    const type = child.type as ComponentType<any> | string;

    if (typeof type === 'function' || typeof type === 'object') {
      // Method 1: Check the explicit displayName (React best practice)
      if (type.displayName === displayName) {
        return true;
      }

      // Method 2: Fallback to the component's function name
      if (type.name === displayName) {
        return true;
      }
    }
  }
  return false;
}
