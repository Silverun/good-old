import RootNavigation from "./src/navigation/root/Root";
import { Provider } from "react-redux";
import { store } from "./src/store/rootStore";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootLayout } from "./src/components/presentation/layouts/RootLayout";
import ThemedNavContainer from "./src/navigation/ThemedNavContainer";
import { RootSiblingParent } from "react-native-root-siblings";

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <ThemedNavContainer>
          <RootSiblingParent>
            <RootLayout>
              <RootNavigation />
            </RootLayout>
          </RootSiblingParent>
        </ThemedNavContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
