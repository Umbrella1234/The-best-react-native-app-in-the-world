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
import { editEmployee } from "../../features/employees/api/editEmployee";

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

  //@todo add react query mutation
  const handleSubmit: EditEmployeeFormProps["onSubmit"] = (employeeData) => {
    editEmployee({ employeeData, id: employeeId });
  };

  return (
    <StyledAppContainer>
      <UILoader status={status}>
        <EditEmployeeForm
          onSubmit={handleSubmit}
          initialValues={initialFormData}
        />
      </UILoader>
    </StyledAppContainer>
  );
};
