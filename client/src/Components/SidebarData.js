//* Icons imported from https://react-icons.github.io/react-icons/search?q=menu
//* ---------- Data for navigation bar

import React from "react";
import * as Ai from "react-icons/ai";
import * as Io from "react-icons/io5";
import * as Fa from "react-icons/fa";
import { UserInfo } from "./UserInfo";
export const SidebarData = [
  {
    title: "",
    path: "",
    icon: "",
    cName: "nav-text no-data",
  },
  {
    title: "Dashboard",
    path: `/dashboard/1/${UserInfo.studentId * 97 + 1 * 349834 * 6}`,
    icon: <Ai.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Enroll",
    path: `/enroll/1/${UserInfo.studentId * 97 + 1 * 349834 * 6}`,
    icon: <Fa.FaSchool />,
    cName: "nav-text",
  },
  {
    title: "Courses",
    path: `/courses/1/${UserInfo.studentId * 97 + 1 * 349834 * 6}`,
    icon: <Ai.AiFillBook />,
    cName: "nav-text",
  },

  {
    title: "Profile",
    path: `/profile/1/${UserInfo.studentId * 97 + 1 * 349834 * 6}`,
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
    path: `/settings/1/${UserInfo.studentId * 97 + 1 * 349834 * 6}`,
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
