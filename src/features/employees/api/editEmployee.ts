import AsyncStorage from "@react-native-async-storage/async-storage";
import { AsyncStorageKeys } from "../../../constants/asyncStorage";
import { Queries, queryClient } from "../../../queryClient";
import {
  EditableEmployeeFields,
  Employee,
  EmployeesMap,
} from "../../../types/entities/Employee";
import { delayedPromiseFactoryFn } from "../../../utils/delayedPromiseFactoryFn";

export const editEmployee = async ({
  employeeData,
  id,
}: {
  employeeData: EditableEmployeeFields;
  id: string;
}): Promise<Employee | null> => {
  const employees = queryClient.getQueryData<EmployeesMap>([Queries.Employees]);
  if (!employees) return null;

  const employee = employees[id];

  if (!employee) return null;

  const updatedEmployee = { ...employee, ...employeeData };

  await AsyncStorage.setItem(
    AsyncStorageKeys.Employees,
    JSON.stringify({
      ...employees,
      [id]: updatedEmployee,
    })
  );
  return await delayedPromiseFactoryFn(updatedEmployee);
};
