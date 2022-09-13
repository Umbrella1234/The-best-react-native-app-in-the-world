import { FC, ReactNode } from "react";
import { Text, View } from "react-native";
import { EmployeeListItem } from "../../../features/employees/components/EmployeeListItem/EmployeeListItem";

export type UILoaderProps = {
  /** React-query status. */
  status: "loading" | "error" | "success";
  children: ReactNode;
};

export const UILoader: FC<UILoaderProps> = ({ children, status }) => {
  return (
    <View>
      {status === "loading" && <Text>Loading... wait pls</Text>}
      {status === "error" && <Text>Oops, something went wrong</Text>}
      {status === "success" && children}
    </View>
  );
};
