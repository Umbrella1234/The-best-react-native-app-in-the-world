import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import { FC } from "react";
import { RootStackParamList, ScreenNames } from "./src/constants/routing";
import { queryClient } from "./src/queryClient";
import { Home } from "./src/screens/Home/Home";

const Stack = createNativeStackNavigator<RootStackParamList>();

const ComponentMock: FC = () => null;

export default function App() {
  return (
    <>
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
              component={ComponentMock}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
      <StatusBar style="dark" />
    </>
  );
}
