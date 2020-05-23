import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { renderRoutes } from "react-router-config";
import { Switch, Route } from "react-router-dom";
//import "./css/style.scss";
import "./css/style.css";

import HomePage from "./pages/HomePage";
import ContactUsPage from "./pages/ContactUsPage";
import SettingsPage from "./pages/SettingsPage";

const App = () => {
  return (
    <div className="main-container">
      <Header />
      {/* <main className="app-content">{renderRoutes(props.route.routes)}</main> */}
      <main className="app-content">
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/settings" component={SettingsPage} />
          <Route path="/contact-us" component={ContactUsPage} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default App;
