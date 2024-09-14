import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Components/Navigations/Routes";
import store from "./Store/AppStore";

export default function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
      <AppRoutes/>
      </BrowserRouter>
      </Provider>
  );
}
