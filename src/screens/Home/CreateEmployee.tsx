import { StyledAppContainer } from "../../components/styledComponents/StyledAppContainer";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList, ScreenNames } from "../../constants/routing";
import {
  EditEmployeeForm,
  EditEmployeeFormProps,
} from "../../features/employees/components/EditEmployeeForm/EditEmployeeForm";
import { createEmployee } from "../../features/employees/api/createEmployee";

export type CreateEmployeeNativeStackScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ScreenNames.CreateEmployee
>;

export const CreateEmployee = () => {
  //@todo add react query mutation
  const handleSubmit: EditEmployeeFormProps["onSubmit"] = (employeeData) => {
    createEmployee({ employeeData });
  };

  return (
    <StyledAppContainer>
      <EditEmployeeForm onSubmit={handleSubmit} />
    </StyledAppContainer>
  );
};
