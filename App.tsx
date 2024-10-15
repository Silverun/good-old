import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./src/navigation/root/Root";
import { Provider } from "react-redux";
import { store } from "./src/store/rootStore";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
