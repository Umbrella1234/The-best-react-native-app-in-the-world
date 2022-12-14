import { StyledAppContainer } from "../../components/styledComponents/StyledAppContainer";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList, ScreenNames } from "../../constants/routing";
import {
  EditEmployeeForm,
  EditEmployeeFormProps,
} from "../../features/employees/components/EditEmployeeForm/EditEmployeeForm";
import { createEmployee } from "../../features/employees/api/createEmployee";
import { useMutation } from "@tanstack/react-query";
import { Queries, queryClient } from "../../queryClient";
import { UILoader } from "../../components/primitives/UILoader/UILoader";
import { useNavigation } from "@react-navigation/native";
import { HomeNativeStackScreenProps } from "./Home";

export type CreateEmployeeNativeStackScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ScreenNames.CreateEmployee
>;

export const CreateEmployee = () => {
  const navigation = useNavigation<HomeNativeStackScreenProps["navigation"]>();
  const { mutate, status, mutateAsync } = useMutation(createEmployee, {
    onSuccess: () => {
      queryClient.invalidateQueries([Queries.Employees]);
    },
  });

  const handleSubmit: EditEmployeeFormProps["onSubmit"] = async (
    employeeData
  ) => {
    await mutateAsync({ employeeData });
    navigation.navigate(ScreenNames.Home);
  };

  return (
    <StyledAppContainer>
      <UILoader status={status}>
        <EditEmployeeForm onSubmit={handleSubmit} />
      </UILoader>
    </StyledAppContainer>
  );
};
