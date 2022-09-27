import styled from "styled-components/native";

/** Use these to compose a dialog box. */

export const Dialog = styled.View`
  border: 1px solid black;
  border-radius: 8px;
  background: white;
`;

export const DialogHeader = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #464545;
  padding: 10px;
`;

export const DialogHeaderText = styled.Text`
  font-size: 18px;
`;

export const DialogBody = styled.View`
  padding: 10px;
`;

export const DialogBodyText = styled.Text`
  font-size: 16px;
  line-height: 22px;
`;

export const DialogFooter = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
`;

export const DialogCancelButton = styled.View`
  margin-left: 10px;
`;
