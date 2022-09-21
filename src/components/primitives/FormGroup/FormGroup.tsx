import { ReactNode, FC } from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

const StyledLabel = styled.View`
  margin-bottom: 5px;
  margin-left: 5px;
`;

const StyledLabelText = styled.Text<{ isError?: boolean }>`
  color: ${({ isError }) => (isError ? "red" : "black")};
`;

const StyledError = styled.View`
  margin-bottom: 10px;
`;

const StyledErrorText = styled.Text`
  color: red;
  margin-left: 5px;
`;

export type FormGroupProps = {
  error?: string;
  children: ReactNode;
  label: string;
};

export const FormGroup: FC<FormGroupProps> = ({ children, error, label }) => {
  return (
    <View>
      <StyledLabel>
        <StyledLabelText isError={!!error}>{label}</StyledLabelText>
      </StyledLabel>
      <View>{children}</View>
      {!!error && (
        <StyledError>
          <StyledErrorText>{error}</StyledErrorText>
        </StyledError>
      )}
    </View>
  );
};
