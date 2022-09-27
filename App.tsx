import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import { RootStackParamList, ScreenNames } from "./src/constants/routing";
import { queryClient } from "./src/queryClient";
import { Home } from "./src/screens/Home/Home";
import { EditEmployee } from "./src/screens/Home/EditEmployee";
import { CreateEmployee } from "./src/screens/Home/CreateEmployee";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={ScreenNames.Home}>
            <Stack.Screen name={ScreenNames.Home} component={Home} />
            <Stack.Screen
              name={ScreenNames.CreateEmployee}
              component={CreateEmployee}
            />
            <Stack.Screen
              name={ScreenNames.EditEmployee}
              component={EditEmployee}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
      <StatusBar style="dark" />
    </>
  );
}
