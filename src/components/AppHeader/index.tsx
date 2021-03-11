import { Layout } from "antd";

import logo from "./assets/mars-rover-logo.jpg";

const { Header } = Layout;

export const AppHeader = () => {
  return (
    <Header className="app-header">
      <img src={logo} alt="App logo" />
    </Header>
  );
};
