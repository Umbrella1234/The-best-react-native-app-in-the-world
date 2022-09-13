import { useQuery } from "@tanstack/react-query";
import { Text, View } from "react-native";
import { getEmployees } from "../../features/employees/api/getEmployees";
import { Queries } from "../../queryClient";
import { EmployeesArr, EmployeesMap } from "../../types/entities/Employee";
import { UILoader } from "../../components/primitives/UILoader/UILoader";
import { EmployeesList } from "../../features/employees/components/EmployeesList/EmployeesList";
import { StyledAppContainer } from "../../components/primitives/styledComponents/StyledAppContainer";

export const Home = () => {
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
        <EmployeesList employees={employees} />
      </UILoader>
    </StyledAppContainer>
  );
};
