import { delay } from "lodash";

const FAKE_DELAY_MS = 2000;

// creates a promise that resolves with provided function argument after a delay
export const delayedPromiseFactoryFn = <T>(resolveValue: T) =>
  new Promise<T>((resolve) =>
    delay(() => resolve(resolveValue), FAKE_DELAY_MS)
  );
