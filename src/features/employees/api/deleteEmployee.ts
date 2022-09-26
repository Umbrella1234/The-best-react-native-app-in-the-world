import AsyncStorage from "@react-native-async-storage/async-storage";
import { omit } from "lodash";
import { AsyncStorageKeys } from "../../../constants/asyncStorage";
import { Queries, queryClient } from "../../../queryClient";
import { EmployeesMap } from "../../../types/entities/Employee";
import { delayedPromiseFactoryFn } from "../../../utils/delayedPromiseFactoryFn";

export const deleteEmployee = async ({
  employeeId,
}: {
  employeeId: string;
}): Promise<string | null> => {
  const employees = queryClient.getQueryData<EmployeesMap>([Queries.Employees]);
  if (!employees) return null;

  await AsyncStorage.setItem(
    AsyncStorageKeys.Employees,
    JSON.stringify(omit(employees, employeeId))
  );
  return await delayedPromiseFactoryFn(employeeId);
};
