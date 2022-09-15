import { StyledAppContainer } from "../../components/styledComponents/StyledAppContainer";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList, ScreenNames } from "../../constants/routing";
import { Text } from "react-native";

export type CreateEmployeeNativeStackScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ScreenNames.CreateEmployee
>;

export const CreateEmployee = () => {
  return (
    <StyledAppContainer>
      <Text>form</Text>
    </StyledAppContainer>
  );
};
