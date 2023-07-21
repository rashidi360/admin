import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdNotifications,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import NotificationTemplate from "views/admin/notificationTemplate";
import ViewTemplate from "views/admin/notificationTemplate/components/ViewTemplate";
import RTL from "views/admin/rtl";

// Auth Imports
import SignInCentered from "views/auth/signIn";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "NFT Marketplace",
    layout: "/admin",
    path: "/nft-marketplace",
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: NFTMarketplace,
    secondary: true,
  },
  {
    name: "Notification Template",
    layout: "/admin",
    icon: <Icon as={MdNotifications} width='20px' height='20px' color='inherit' />,
    path: "/notification-template",
    component: NotificationTemplate,
    // Nested routes inside the "Notification Template" route
    childRoutes: [
      {
        name: "View Template",
        layout: "/admin",
        path: "/view-template",
        // You can set the icon for the nested route as well
        icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
        component: ViewTemplate,
      },
    ]
  },
  
  {
    name: "Profile",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: Profile,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
    component: SignInCentered,
  },
  {
    name: "RTL Admin",
    layout: "/rtl",
    path: "/rtl-default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: RTL,
  },
];

export default routes;
