import { Flex } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const { width, height } = useViewportSize();
  return (
    <Flex w={width} h={height}>
      <Outlet />
    </Flex>
  );
};

export default Layout;
