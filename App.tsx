import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import { FC } from "react";
import { RootStackParamList, ScreenNames } from "./src/constants/routing";
import { queryClient } from "./src/queryClient";
import { Home } from "./src/screens/Home/Home";
import { PortalProvider, WhitePortal } from "react-native-portal";
import { PortalHosts } from "./src/constants/portals";
import { EditEmployee } from "./src/screens/Home/EditEmployee";

const Stack = createNativeStackNavigator<RootStackParamList>();

const ComponentMock: FC = () => null;

export default function App() {
  return (
    <PortalProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={ScreenNames.Home}>
            <Stack.Screen name={ScreenNames.Home} component={Home} />
            <Stack.Screen
              name={ScreenNames.CreateEmployee}
              component={ComponentMock}
            />
            <Stack.Screen
              name={ScreenNames.EditEmployee}
              component={EditEmployee}
            />
          </Stack.Navigator>
        </NavigationContainer>
        <WhitePortal name={PortalHosts.AppRoot} />
      </QueryClientProvider>
      <StatusBar style="dark" />
    </PortalProvider>
  );
}
