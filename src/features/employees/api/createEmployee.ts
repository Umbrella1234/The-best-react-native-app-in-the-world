import AsyncStorage from "@react-native-async-storage/async-storage";
import { AsyncStorageKeys } from "../../../constants/asyncStorage";
import { Queries, queryClient } from "../../../queryClient";
import {
  EditableEmployeeFields,
  Employee,
  EmployeesMap,
} from "../../../types/entities/Employee";

export const createEmployee = async ({
  employeeData,
}: {
  employeeData: EditableEmployeeFields;
}) => {
  const employees = queryClient.getQueryData<EmployeesMap>([Queries.Employees]);
  if (!employees) return;

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
};
