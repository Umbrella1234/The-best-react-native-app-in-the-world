import AsyncStorage from "@react-native-async-storage/async-storage";
import { AsyncStorageKeys } from "../../../constants/asyncStorage";
import { Queries, queryClient } from "../../../queryClient";
import {
  EditableEmployeeFields,
  EmployeesMap,
} from "../../../types/entities/Employee";

export const editEmployee = async ({
  employeeData,
  id,
}: {
  employeeData: EditableEmployeeFields;
  id: string;
}) => {
  const employees = queryClient.getQueryData<EmployeesMap>([Queries.Employees]);
  if (!employees) return;

  const employee = employees[id];

  if (!employee) return;

  const updatedEmployee = { ...employee, ...employeeData };
  await AsyncStorage.setItem(
    AsyncStorageKeys.Employees,
    JSON.stringify({
      ...employees,
      [id]: updatedEmployee,
    })
  );
};
