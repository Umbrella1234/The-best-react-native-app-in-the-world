import { StyledAppContainer } from "../../components/styledComponents/StyledAppContainer";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList, ScreenNames } from "../../constants/routing";
import { Text } from "react-native";
import { EditEmployeeForm } from "../../features/employees/components/EditEmployeeForm/EditEmployeeForm";

export type CreateEmployeeNativeStackScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ScreenNames.CreateEmployee
>;

export const CreateEmployee = () => {
  return (
    <StyledAppContainer>
      <EditEmployeeForm />
    </StyledAppContainer>
  );
};
