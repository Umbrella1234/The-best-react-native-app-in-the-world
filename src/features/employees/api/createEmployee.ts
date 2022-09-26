import AsyncStorage from "@react-native-async-storage/async-storage";
import { AsyncStorageKeys } from "../../../constants/asyncStorage";
import { Queries, queryClient } from "../../../queryClient";
import {
  EditableEmployeeFields,
  Employee,
  EmployeesMap,
} from "../../../types/entities/Employee";
import { delayedPromiseFactoryFn } from "../../../utils/delayedPromiseFactoryFn";

export const createEmployee = async ({
  employeeData,
}: {
  employeeData: EditableEmployeeFields;
}): Promise<Employee | null> => {
  const employees = queryClient.getQueryData<EmployeesMap>([Queries.Employees]);
  if (!employees) return null;

  const newEmployee: Employee = {
    ...employeeData,
    id: (Math.random() * 100).toString(),
  };
  await AsyncStorage.setItem(
    AsyncStorageKeys.Employees,
    JSON.stringify({
      ...employees,
      [newEmployee.id]: newEmployee,
    })
  );
  return await delayedPromiseFactoryFn(newEmployee);
};
