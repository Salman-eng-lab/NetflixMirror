import { RouterProvider } from "react-router-dom";
import { appRoutes } from "./Components/Navigations/Routes";
import { Provider } from "react-redux";
import store from "./Store/AppStore";

export default function App() {
  return (
    <div>
      <Provider store={store}>
      <RouterProvider router={appRoutes}/>
      </Provider>
    </div>
  );
}
