import { useQuery } from "@tanstack/react-query";
import styled from "styled-components/native";
import { Text, View } from "react-native";
import { getEmployees } from "../../features/employees/api/getEmployees";
import { Queries } from "../../queryClient";
import { EmployeesArr, EmployeesMap } from "../../types/entities/Employee";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const StyledEmployee = styled.View`
  display: flex;
  flex-direction: row;
  padding: 15px;
`;

const StyledEmployeeInfo = styled.Text`
  display: flex;
`;

const StyledEmployeeMenuIcon = styled(MaterialCommunityIcons)`
  margin-left: auto;
`;

export const Home = () => {
  const { data, isSuccess, isLoading } = useQuery<
    EmployeesMap,
    unknown,
    EmployeesArr
  >([Queries.Employees], getEmployees, {
    select: (employeesMap) => Object.values(employeesMap),
  });

  return (
    <View>
      {isLoading && <Text>Loading wait plez...</Text>}
      {isSuccess && (
        <>
          {data.map(({ avatar, email, name, surname, id }) => {
            return (
              <StyledEmployee>
                <StyledEmployeeInfo>
                  {name} {surname} {email}
                </StyledEmployeeInfo>
                <StyledEmployeeMenuIcon
                  name="menu"
                  size={28}
                  color="#010101"
                ></StyledEmployeeMenuIcon>
              </StyledEmployee>
            );
          })}
        </>
      )}
    </View>
  );
};
