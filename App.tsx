import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./app/navigation/Root";
import { Provider } from "react-redux";
import { store } from "./app/store/rootStore";

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
