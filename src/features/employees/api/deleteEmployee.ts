import AsyncStorage from "@react-native-async-storage/async-storage";
import { omit } from "lodash";
import { AsyncStorageKeys } from "../../../constants/asyncStorage";
import { Queries, queryClient } from "../../../queryClient";
import { EmployeesMap } from "../../../types/entities/Employee";

export const deleteEmployee = async ({
  employeeId,
}: {
  employeeId: string;
}) => {
  const employees = queryClient.getQueryData<EmployeesMap>([Queries.Employees]);
  if (!employees) return;

  await AsyncStorage.setItem(
    AsyncStorageKeys.Employees,
    JSON.stringify(omit(employees, employeeId))
  );
};
