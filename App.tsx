import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./src/navigation/root/Root";
import { Provider } from "react-redux";
import { store } from "./src/store/rootStore";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootLayout } from "./src/components/presentation/layouts/RootLayout";

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootLayout>
            <RootNavigation />
          </RootLayout>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
