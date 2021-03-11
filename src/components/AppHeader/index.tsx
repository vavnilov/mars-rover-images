import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

import logo from "./assets/mars-rover-logo.jpg";

const { Header } = Layout;
const { Item } = Menu;

export const AppHeader = () => {
  return (
    <Header className="app-header">
      <div className="app-header__logo">
        <Link to="/">
          <img src={logo} alt="App logo" />
        </Link>
      </div>
      <div className="app-header__menu-section">
        <Menu mode="horizontal" selectable={false} className="menu">
          <Item key="/">
            <Link to="/">Home</Link>
          </Item>
          <Item key="/rovers">
            <Link to="/rovers">Rovers</Link>
          </Item>
        </Menu>
      </div>
    </Header>
  );
};
