/* src/routes/Router.jsx */
import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Nav from "../components/Navbar";
import Footer from "../components/Footer";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import JobApplicationForm from "../pages/JobApplicationForm";
import ApplicationsPage from "../pages/ApplicationsPage";

function RootLayout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "apply", element: <JobApplicationForm /> },
      { path: "applications", element: <ApplicationsPage /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
