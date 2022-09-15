import { FC, ReactNode } from "react";
import { BlackPortal } from "react-native-portal";
import { View, TouchableWithoutFeedback } from "react-native";
import styled from "styled-components/native";
import { PortalHosts } from "../../../constants/portals";

type MenuCoords = { right: number; top: number };

const StyledContextMenuOverlay = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(212, 209, 209, 0.569);
`;

const StyledContextMenuWrapper = styled.View<MenuCoords>`
  position: absolute;
  width: 150px;
  border-radius: 8px;
  right: ${(props) => `${props.right}px`};
  top: ${(props) => `${props.top}px`};
  background: white;
`;

export type ContextMenuProps = {
  children: ReactNode;
  coords: MenuCoords;
  onOverlayPress: () => void;
};

export const ContextMenu: FC<ContextMenuProps> = ({
  children,
  coords: { right, top },
  onOverlayPress,
}) => {
  return (
    //@ts-ignore
    <BlackPortal name={PortalHosts.AppRoot}>
      <TouchableWithoutFeedback onPress={onOverlayPress}>
        <StyledContextMenuOverlay>
          <StyledContextMenuWrapper
            right={right}
            top={top}
            onStartShouldSetResponder={() => true}
            onTouchEnd={(e: any) => e.stopPropagation()}
          >
            {children}
          </StyledContextMenuWrapper>
        </StyledContextMenuOverlay>
      </TouchableWithoutFeedback>
    </BlackPortal>
  );
};
