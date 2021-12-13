import React from "react";
import * as Ai from "react-icons/ai";
import * as Io from "react-icons/io5";

export const SidebarData = [
  {
    title: "",
    path: "",
    icon: "",
    cName: "nav-text no-data",
  },
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <Ai.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Enroll",
    path: "/enroll",
    icon: <Ai.AiFillSetting />,
    cName: "nav-text",
  },
  {
    title: "Courses",
    path: "/schedule",
    icon: <Ai.AiFillBook />,
    cName: "nav-text",
  },

  {
    title: "Profile",
    path: "/profile",
    icon: <Ai.AiFillProfile />,
    cName: "nav-text",
  },

  {
    title: "",
    path: "",
    icon: "",
    cName: "nav-text no-data",
  },

  {
    title: "",
    path: "",
    icon: "",
    cName: "nav-text no-data",
  },
  {
    title: "",
    path: "",
    icon: "",
    cName: "nav-text no-data",
  },
  {
    title: "",
    path: "",
    icon: "",
    cName: "nav-text no-data",
  },
  {
    title: "",
    path: "",
    icon: "",
    cName: "nav-text no-data",
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <Ai.AiFillSetting />,
    cName: "nav-text",
  },
  {
    title: "Logout",
    path: "/logout",
    icon: <Io.IoLogOut />,
    cName: "nav-text",
  },
];
