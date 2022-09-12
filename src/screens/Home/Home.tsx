import { useQuery } from "@tanstack/react-query";
import styled from "styled-components/native";
import { Text, View } from "react-native";
import { getEmployees } from "../../features/employees/api/getEmployees";
import { Queries } from "../../queryClient";
import { EmployeesArr, EmployeesMap } from "../../types/entities/Employee";

const StyledText = styled.Text`
  color: red;
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
      <StyledText>{data?.length}</StyledText>
      {isSuccess && (
        <>
          {data.map(({ avatar, email, name, surname, id }) => {
            return (
              <View>
                <StyledText>
                  {name} {surname} {email}
                </StyledText>
              </View>
            );
          })}
        </>
      )}
    </View>
  );
};
