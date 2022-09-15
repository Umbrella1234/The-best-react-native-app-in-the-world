import { FC } from "react";
import { TouchableOpacity, TouchableWithoutFeedbackProps } from "react-native";
import styled from "styled-components/native";

const StyledContextMenuItem = styled.View<{ hasBottomBorder: boolean }>`
  padding: 10px;
  ${({ hasBottomBorder }) =>
    hasBottomBorder &&
    `
      border-bottom-width: 1px;
      border-bottom-color: #464545;
  `}
`;

const StyledContextMenuItemText = styled.Text`
  color: "black";
`;

export type ContextMenuItemProps = {
  text: string;
  onPress: TouchableWithoutFeedbackProps["onPress"];
  hasBottomBorder?: boolean;
};

export const ContextMenuItem: FC<ContextMenuItemProps> = ({
  text,
  onPress,
  hasBottomBorder,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <StyledContextMenuItem hasBottomBorder={hasBottomBorder}>
        <StyledContextMenuItemText>{text}</StyledContextMenuItemText>
      </StyledContextMenuItem>
    </TouchableOpacity>
  );
};
