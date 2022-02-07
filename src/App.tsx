import { FC } from "react";
import { Outlet, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import { Navbar } from "./components";
import "./App.css";

const App: FC = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Outlet />
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "#ddd", textAlign: "center" }}
          >
            &copy; CryptoVerse 2022 <br />
            All Left Reserved
          </Typography.Title>
          <Space>
            <Link to={"/"}>Home</Link>
            <Link to={"/exchanges"}>Exchanges</Link>
            <Link to={"/news"}>News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
