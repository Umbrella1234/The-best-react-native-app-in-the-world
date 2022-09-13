import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Employee } from "../../../../types/entities/Employee";
import { FC } from "react";

const StyledEmployee = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 15px;
  border: 1px solid black;
  border-radius: 8px;

  &:not(:first-child) {
    margin-top: 15px;
  }
`;

const StyledEmployeeInfo = styled.Text`
  display: flex;
`;

const StyledEmployeeMenuIcon = styled(MaterialCommunityIcons)`
  margin-left: auto;
`;

type EmployeeListItemProps = {
  employee: Employee;
};

export const EmployeeListItem: FC<EmployeeListItemProps> = ({ employee }) => {
  const { avatar, email, name, surname } = employee;
  return (
    <StyledEmployee>
      <StyledEmployeeInfo>
        {name} {surname}
      </StyledEmployeeInfo>
      <StyledEmployeeMenuIcon
        name="menu"
        size={28}
        color="#010101"
      ></StyledEmployeeMenuIcon>
    </StyledEmployee>
  );
};
