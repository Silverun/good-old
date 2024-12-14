import RootNavigation from "./src/navigation/root/Root";
import { Provider } from "react-redux";
import { store } from "./src/store/rootStore";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootLayout } from "./src/components/presentation/layouts/RootLayout";
import ThemedNavContainer from "./src/navigation/ThemedNavContainer";
import { RootSiblingParent } from "react-native-root-siblings";
import i18n from "./src/localization/i18n";
import { I18nextProvider } from "react-i18next";

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
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
    </I18nextProvider>
  );
};

export default App;
