import { FC, ReactNode } from "react";
import { Modal } from "react-native";
import styled from "styled-components/native";
import {
  FullScreenOverlay,
  FullScreenOverlayContent,
} from "../FullScreenOverlay/FullScreenOverlay";

type MenuCoords = { right: number; top: number };

const StyledContextMenuWrapper = styled.View<MenuCoords>`
  position: absolute;
  min-width: 150px;
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
    <Modal transparent={true} animationType="fade">
      <FullScreenOverlay onOverlayPress={onOverlayPress}>
        <FullScreenOverlayContent>
          <StyledContextMenuWrapper right={right} top={top}>
            {children}
          </StyledContextMenuWrapper>
        </FullScreenOverlayContent>
      </FullScreenOverlay>
    </Modal>
  );
};
