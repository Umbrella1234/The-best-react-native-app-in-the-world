import { useQuery } from "@tanstack/react-query";
import { getEmployees } from "../../features/employees/api/getEmployees";
import { Queries } from "../../queryClient";
import { UILoader } from "../../components/primitives/UILoader/UILoader";
import { StyledAppContainer } from "../../components/styledComponents/StyledAppContainer";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList, ScreenNames } from "../../constants/routing";
import {
  EditEmployeeForm,
  EditEmployeeFormProps,
} from "../../features/employees/components/EditEmployeeForm/EditEmployeeForm";
import { pick } from "lodash";

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
  const { data: employees = {}, status } = useQuery(
    [Queries.Employees],
    getEmployees
  );

  const employee = employees[employeeId];

  if (!employee) return null;

  const initialFormData: EditEmployeeFormProps["initialValues"] = pick(
    employee,
    ["avatar", "email", "name", "surname"]
  );

  return (
    <StyledAppContainer>
      <UILoader status={status}>
        <EditEmployeeForm initialValues={initialFormData} />
      </UILoader>
    </StyledAppContainer>
  );
};
