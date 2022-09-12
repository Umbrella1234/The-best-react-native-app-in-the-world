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
      email: "haha@mail.ru",
      name: "my name",
      surname: "my surname",
      id: "1",
    },
  } as EmployeesMap);
