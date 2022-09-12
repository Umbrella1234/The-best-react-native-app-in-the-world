import { NativeStackScreenProps } from "@react-navigation/native-stack";

export enum ScreenNames {
  Home = "Home",
  EditEmployee = "EditEmployee",
  CreateEmployee = "CreateEmployee",
}

export type RootStackParamList = {
  [ScreenNames.Home]: undefined;
  [ScreenNames.CreateEmployee]: undefined;
  [ScreenNames.EditEmployee]: { employeeId: string };
};

export type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ScreenNames
>;
