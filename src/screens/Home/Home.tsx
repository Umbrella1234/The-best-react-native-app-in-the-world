import { useQuery } from "@tanstack/react-query";
import { getEmployees } from "../../features/employees/api/getEmployees";
import { Queries } from "../../queryClient";
import { EmployeesArr, EmployeesMap } from "../../types/entities/Employee";
import { UILoader } from "../../components/primitives/UILoader/UILoader";
import { EmployeesList } from "../../features/employees/components/EmployeesList/EmployeesList";
import { StyledAppContainer } from "../../components/styledComponents/StyledAppContainer";
import { Button, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CreateEmployeeNativeStackScreenProps } from "./CreateEmployee";
import { RootStackParamList, ScreenNames } from "../../constants/routing";
import styled from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type HomeNativeStackScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ScreenNames.Home
>;

const StyledAddEmployeeWrapper = styled.View`
  margin-bottom: 20px;
`;

export const Home = () => {
  const navigation =
    useNavigation<CreateEmployeeNativeStackScreenProps["navigation"]>();
  const { data: employees = [], status } = useQuery<
    EmployeesMap,
    unknown,
    EmployeesArr
  >([Queries.Employees], getEmployees, {
    select: (employeesMap) => Object.values(employeesMap),
  });

  const handleAddEmployeePress = () => {
    navigation.navigate(ScreenNames.CreateEmployee);
  };

  return (
    <StyledAppContainer>
      <UILoader status={status}>
        <StyledAddEmployeeWrapper>
          <Button onPress={handleAddEmployeePress} title="+ Add Employee" />
        </StyledAddEmployeeWrapper>
        <EmployeesList employees={employees} />
      </UILoader>
    </StyledAppContainer>
  );
};
