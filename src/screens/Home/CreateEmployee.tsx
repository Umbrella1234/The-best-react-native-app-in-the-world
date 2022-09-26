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

export type CreateEmployeeNativeStackScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ScreenNames.CreateEmployee
>;

export const CreateEmployee = () => {
  const { mutate, isLoading } = useMutation(createEmployee, {
    onSuccess: () => {
      queryClient.invalidateQueries([Queries.Employees]);
    },
  });

  const handleSubmit: EditEmployeeFormProps["onSubmit"] = (employeeData) => {
    mutate({ employeeData });
  };

  return (
    <StyledAppContainer>
      <EditEmployeeForm onSubmit={handleSubmit} />
    </StyledAppContainer>
  );
};
