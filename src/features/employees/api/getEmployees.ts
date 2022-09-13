import { delay } from "lodash";
import { EmployeesMap } from "../../../types/entities/Employee";

const FAKE_DELAY_MS = 2000;

// creates a promise that resolves with provided function argument after a delay
const delayedPromiseFactoryFn = <T>(resolveValue: T) =>
  new Promise<T>((resolve) =>
    delay(() => resolve(resolveValue), FAKE_DELAY_MS)
  );

export const getEmployees = () =>
  delayedPromiseFactoryFn<EmployeesMap>({
    1: {
      avatar: null,
      email: "privateBlackHole@pinkLagoon.com",
      name: "Billy",
      surname: "Herrington",
      id: "1",
    },
    2: {
      avatar: null,
      email: "bigBlackSword@pinkLagoon.com",
      name: "Van",
      surname: "Darkholme",
      id: "2",
    },
  } as EmployeesMap);
