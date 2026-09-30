import * as t from 'io-ts';
import { SyntheticEvent } from 'react';

export class EnumType<A> extends t.Type<A> {
  public readonly _tag = 'EnumType' as const;
  public enumObject!: Record<string, string | number>;
  public constructor(e: Record<string, string | number>, name?: string) {
    super(
      name || 'enum',
      (u): u is A => {
        if (!Object.values(this.enumObject).find((v) => v === u)) {
          return false;
        }
        // enum reverse mapping check
        if (typeof this.enumObject[u as string] === 'number') {
          return false;
        }
        return true;
      },
      (u, c) => (this.is(u) ? t.success(u) : t.failure(u, c)),
      t.identity
    );
    this.enumObject = e;
  }
}

export function createEnumType<T>(e: Record<string, string | number>, name?: string) {
  return new EnumType<T>(e, name);
}

export const hrefNoOp = '#!';
export const wrapHandleExitAction =
  (href: string, onClick?: () => void, onExit?: (exitAction: () => void) => void) =>
  (e: SyntheticEvent) => {
    e.preventDefault();
    if (onExit) {
      onExit(onClick ? onClick : () => window.location.assign(href));
    } else if (onClick) {
      onClick();
    } else {
      window.location.assign(href);
    }
  };
