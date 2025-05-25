// src/routes/Router.jsx
import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Nav from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/HomePage";

function RootLayout() {
  return (
    <>
      {/* <Nav /> */}
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> }, // "/"
      // { path: "/courses", element: <Courses /> },
      // { path: "/about", element: <About /> },
      // { path: "/contact", element: <Contact /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
