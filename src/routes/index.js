import Dashboard from "../Page/Dashboard";
import PostManagement from "../Page/Posts Management";
import Settings from "../Page/Settings";
import Subcription from "./../Page/Dashboard/Subcription";
import Revenue from "./../Page/Dashboard/Revenue";

export const publicRoutes = [
  {
    part: "/",
    component: Dashboard,
  },
  {
    part: "/page-admin-antd",
    component: Dashboard,
  },

  {
    part: "/dashboard/*",
    component: Dashboard,
  },
  { part: "/dashboard/subcription", component: Subcription },
  { part: "/dashboard/revenue", component: Revenue },
  { part: "/post-management", component: PostManagement },
  { part: "/settings", component: Settings },
];
