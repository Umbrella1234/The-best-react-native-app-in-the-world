import { useQuery } from "@tanstack/react-query";
import { getEmployees } from "../../features/employees/api/getEmployees";
import { Queries } from "../../queryClient";
import { EmployeesArr, EmployeesMap } from "../../types/entities/Employee";
import { UILoader } from "../../components/primitives/UILoader/UILoader";
import { StyledAppContainer } from "../../components/styledComponents/StyledAppContainer";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList, ScreenNames } from "../../constants/routing";
import { Text } from "react-native";

export type EditEmployeeNativeStackScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ScreenNames.EditEmployee
>;

type EditEmployeeProps = EditEmployeeNativeStackScreenProps;

export const EditEmployee = ({
  route: {
    params: { employeeId },
  },
}: EditEmployeeProps) => {
  const { data: employees = [], status } = useQuery<
    EmployeesMap,
    unknown,
    EmployeesArr
  >([Queries.Employees], getEmployees, {
    select: (employeesMap) => Object.values(employeesMap),
  });

  return (
    <StyledAppContainer>
      <UILoader status={status}>
        <Text>edit {employeeId}</Text>
      </UILoader>
    </StyledAppContainer>
  );
};
