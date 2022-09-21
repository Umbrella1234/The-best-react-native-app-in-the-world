import AsyncStorage from "@react-native-async-storage/async-storage";
import { AsyncStorageKeys } from "../../../constants/asyncStorage";
import { EmployeesMap } from "../../../types/entities/Employee";
import { delayedPromiseFactoryFn } from "../../../utils/delayedPromiseFactoryFn";

const defaultEmployees: EmployeesMap = {
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
};

export const getEmployees = async () => {
  const asyncStorageEmployeesJSON = await AsyncStorage.getItem(
    AsyncStorageKeys.Employees
  );

  let result: EmployeesMap = {};

  if (!asyncStorageEmployeesJSON) {
    await AsyncStorage.setItem(
      AsyncStorageKeys.Employees,
      JSON.stringify(defaultEmployees)
    );
    result = defaultEmployees;
  } else {
    try {
      result = JSON.parse(asyncStorageEmployeesJSON);
    } catch (e) {
      console.error(e);
    }
  }

  return delayedPromiseFactoryFn<EmployeesMap>(result);
};
