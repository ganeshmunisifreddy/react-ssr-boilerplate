import SettingsPage from "./pages/SettingsPage";
import ContactUsPage from "./pages/ContactUsPage";
import HomePage from "./pages/HomePage/index";
import App from "./App";

export default [
  {
    component: App,
    routes: [
      {
        path: "/",
        component: HomePage,
        exact: true,
      },
      {
        path: "/settings",
        component: SettingsPage,
      },
      {
        path: "/contact-us",
        component: ContactUsPage,
      },
    ],
  },
];
