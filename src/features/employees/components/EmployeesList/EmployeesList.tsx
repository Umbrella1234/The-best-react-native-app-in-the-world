import styled from "styled-components/native";
import { EmployeesArr } from "../../../../types/entities/Employee";
import { FC } from "react";
import { EmployeeListItem } from "../EmployeeListItem/EmployeeListItem";
import { ScrollView, View } from "react-native";

const StyledEmployeesListItemWrapper = styled.View<{ isFirst: boolean }>`
  margin-top: ${(props) => (props.isFirst ? "0" : "10px")};
`;

export type EmployeesListProps = {
  employees: EmployeesArr;
};

export const EmployeesList: FC<EmployeesListProps> = ({ employees }) => {
  return (
    <View>
      {employees.map((employee, i) => {
        return (
          <StyledEmployeesListItemWrapper key={employee.id} isFirst={i === 0}>
            <EmployeeListItem employee={employee} />
          </StyledEmployeesListItemWrapper>
        );
      })}
    </View>
  );
};
