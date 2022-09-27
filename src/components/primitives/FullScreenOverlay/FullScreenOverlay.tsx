import { FC, ReactNode } from "react";
import {
  StyleProp,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from "react-native";
import styled from "styled-components/native";

// use this as a child of overlay
export const FullScreenOverlayContent = ({
  children,
  style,
}: {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}) => (
  <View style={style} onStartShouldSetResponder={() => true}>
    {children}
  </View>
);

// use this to center overlay content
export const StyledFullScreenOverlayCenterWrapper = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledFullScreenOverlayOverlay = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(212, 209, 209, 0.569);
`;

export type FullScreenOverlayProps = {
  children: ReactNode;
  onOverlayPress: () => void;
};

export const FullScreenOverlay: FC<FullScreenOverlayProps> = ({
  children,
  onOverlayPress,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onOverlayPress}>
      <StyledFullScreenOverlayOverlay>
        {children}
      </StyledFullScreenOverlayOverlay>
    </TouchableWithoutFeedback>
  );
};
