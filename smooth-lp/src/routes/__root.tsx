import { createRootRoute, Outlet } from "@tanstack/react-router";
import Header from "../components/header";

const RootLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
