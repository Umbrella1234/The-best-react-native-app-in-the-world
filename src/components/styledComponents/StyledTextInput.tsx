import styled from "styled-components/native";

export const StyledTextInput = styled.TextInput<{ isError: boolean }>`
  border-width: 1px;
  border-color: ${({ isError }) => (isError ? "red" : "black")};
  border-radius: 6px;
  padding-left: 10px;
`;
