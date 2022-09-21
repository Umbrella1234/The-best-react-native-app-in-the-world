import styled from "styled-components/native";
import {
  TouchableOpacity,
  GestureResponderEvent,
  LayoutChangeEvent,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Employee } from "../../../../types/entities/Employee";
import { FC, useState, useRef } from "react";
import {
  ContextMenu,
  ContextMenuProps,
} from "../../../../components/primitives/ContextMenu/ContextMenu";
import { ContextMenuItem } from "../../../../components/primitives/ContextMenu/ContextMenuItem";
import { useNavigation } from "@react-navigation/native";
import { ScreenNames } from "../../../../constants/routing";
import { EditEmployeeNativeStackScreenProps } from "../../../../screens/Home/EditEmployee";
import { deleteEmployee } from "../../api/deleteEmployee";

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

const StyledEmployeeMenuIconWrapper = styled.View`
  margin-left: auto;
`;

type EmployeeListItemProps = {
  employee: Employee;
};

export const EmployeeListItem: FC<EmployeeListItemProps> = ({ employee }) => {
  const navigation =
    useNavigation<EditEmployeeNativeStackScreenProps["navigation"]>();
  const { name, surname, id } = employee;
  const [menuCoords, setMenuCoords] = useState<
    ContextMenuProps["coords"] | null
  >(null);
  const [iconDimensions, setIconDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);
  const iconRef = useRef<any>(null);

  const hideContextMenu = () => {
    setMenuCoords(null);
  };

  const handleContextMenuIconClick = (e: GestureResponderEvent) => {
    if (!iconDimensions) return;
    const { pageY, locationX } = e.nativeEvent;
    setMenuCoords({
      right: locationX + iconDimensions.width,
      top: pageY + iconDimensions.height,
    });
  };

  const handleIconLayout = (e: LayoutChangeEvent) => {
    const {
      nativeEvent: {
        layout: { height, width },
      },
    } = e;
    setIconDimensions({ height, width });
  };

  const handleEditOptionSelection = () => {
    hideContextMenu();
    navigation.navigate(ScreenNames.EditEmployee, { employeeId: id });
  };

  const handleDeleteOptionSelection = async () => {
    await deleteEmployee({ employeeId: id });
    hideContextMenu();
  };

  return (
    <StyledEmployee>
      <StyledEmployeeInfo>
        {name} {surname}
      </StyledEmployeeInfo>
      <StyledEmployeeMenuIconWrapper ref={iconRef}>
        <TouchableOpacity onPress={handleContextMenuIconClick}>
          <MaterialCommunityIcons
            onLayout={handleIconLayout}
            name="menu"
            size={28}
            color="#010101"
          ></MaterialCommunityIcons>
        </TouchableOpacity>
      </StyledEmployeeMenuIconWrapper>
      {!!menuCoords && (
        <ContextMenu onOverlayPress={hideContextMenu} coords={menuCoords}>
          <ContextMenuItem
            text="Edit"
            hasBottomBorder
            onPress={handleEditOptionSelection}
          />
          <ContextMenuItem
            text="Delete"
            onPress={handleDeleteOptionSelection}
          />
        </ContextMenu>
      )}
    </StyledEmployee>
  );
};
