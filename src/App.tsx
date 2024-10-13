import { ConfigProvider } from "antd";
import { useEffect } from "react";
import { theme } from "./styles/antDesignToken";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { useWindowSize } from "@reactuses/core";

function App() {
  const { height } = useWindowSize();

  useEffect(
    function updateVhEffect() {
      let vh = 0;
      vh = height * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    },
    [height]
  );

  return (
    <ConfigProvider theme={theme}>
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
