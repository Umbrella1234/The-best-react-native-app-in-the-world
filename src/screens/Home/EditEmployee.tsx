import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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
import { useNavigation } from "@react-navigation/native";
import { HomeNativeStackScreenProps } from "./Home";

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
  const queryClient = useQueryClient();
  const navigation = useNavigation<HomeNativeStackScreenProps["navigation"]>();

  const { mutateAsync, status: editEmployeeStatus } = useMutation(
    editEmployee,
    {
      onSuccess: () => {
        queryClient.invalidateQueries([Queries.Employees]);
      },
    }
  );
  const {
    data: employees = {},
    status: getEmployeesStatus,
    isFetched: isGetEmployeesFetched,
  } = useQuery([Queries.Employees], getEmployees);

  const employee = employees[employeeId];

  if (!employee) return null;

  const initialFormData: EditEmployeeFormProps["initialValues"] = pick(
    employee,
    ["avatar", "email", "name", "surname"]
  );

  const handleSubmit: EditEmployeeFormProps["onSubmit"] = async (
    employeeData
  ) => {
    await mutateAsync({ employeeData, id: employeeId });
    navigation.navigate(ScreenNames.Home);
  };

  return (
    <StyledAppContainer>
      <UILoader
        status={isGetEmployeesFetched ? editEmployeeStatus : getEmployeesStatus}
      >
        <EditEmployeeForm
          onSubmit={handleSubmit}
          initialValues={initialFormData}
        />
      </UILoader>
    </StyledAppContainer>
  );
};
