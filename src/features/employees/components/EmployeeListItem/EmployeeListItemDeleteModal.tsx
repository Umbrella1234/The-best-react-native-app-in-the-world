import { FC } from "react";
import { Button, Modal } from "react-native";
import styled from "styled-components/native";
import {
  FullScreenOverlay,
  FullScreenOverlayContent,
  StyledFullScreenOverlayCenterWrapper,
} from "../../../../components/primitives/FullScreenOverlay/FullScreenOverlay";
import {
  Dialog,
  DialogBody,
  DialogBodyText,
  DialogCancelButton,
  DialogFooter,
  DialogHeader,
  DialogHeaderText,
} from "../../../../components/styledComponents/DialogStyledComponents";

const StyledFullScreenOverlayContent = styled(FullScreenOverlayContent)`
  width: 80%;
`;

export type EmployeeListItemDeleteModalProps = {
  userName: string;
  onOverlayPress: () => void;
  onDeleteDialogConfirm: () => void;
  onDeleteDialogCancel: () => void;
};

export const EmployeeListItemDeleteModal: FC<
  EmployeeListItemDeleteModalProps
> = ({
  onOverlayPress,
  onDeleteDialogCancel,
  onDeleteDialogConfirm,
  userName,
}) => {
  return (
    <Modal animationType="fade" transparent={true}>
      <FullScreenOverlay onOverlayPress={onOverlayPress}>
        <StyledFullScreenOverlayCenterWrapper>
          <StyledFullScreenOverlayContent>
            <Dialog>
              <DialogHeader>
                <DialogHeaderText>Delete {userName}?</DialogHeaderText>
              </DialogHeader>
              <DialogBody>
                <DialogBodyText>
                  Are you sure you would like to delete {userName}? You might
                  regret it. He was a good guy, after all.
                </DialogBodyText>
              </DialogBody>
              <DialogFooter>
                <Button
                  color="red"
                  title="Confirm"
                  onPress={onDeleteDialogConfirm}
                />
                <DialogCancelButton>
                  <Button
                    color="blue"
                    title="Cancel"
                    onPress={onDeleteDialogCancel}
                  />
                </DialogCancelButton>
              </DialogFooter>
            </Dialog>
          </StyledFullScreenOverlayContent>
        </StyledFullScreenOverlayCenterWrapper>
      </FullScreenOverlay>
    </Modal>
  );
};
