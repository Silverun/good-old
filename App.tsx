import RootNavigation from "./src/navigation/root/Root";
import { Provider } from "react-redux";
import { store } from "./src/store/rootStore";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootLayout } from "./src/components/presentation/layouts/RootLayout";
import ThemedNavContainer from "./src/navigation/ThemedNavContainer";

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <ThemedNavContainer>
          <RootLayout>
            <RootNavigation />
          </RootLayout>
        </ThemedNavContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
