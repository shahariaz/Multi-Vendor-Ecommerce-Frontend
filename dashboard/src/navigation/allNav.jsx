import { AiOutlineDashboard, AiOutlineShoppingCart } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { FaUserTimes, FaUsers } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { FaCodePullRequest } from "react-icons/fa6";
import { IoIosChatboxes } from "react-icons/io";

export const allNav = [
  {
    id: 1,
    title: "Dashboard",
    icon: <AiOutlineDashboard />,
    role: "admin",
    path: "/admin/dashboard",
  },
  {
    id: 2,
    title: "Orders",
    icon: <AiOutlineShoppingCart />,
    role: "admin",
    path: "/admin/dashboard/orders",
  },
  {
    id: 3,
    title: "Category",
    icon: <BiCategory />,
    role: "admin",
    path: "/admin/category",
  },
  {
    id: 4,
    title: "Sellers",
    icon: <FaUsers />,
    role: "admin",
    path: "/admin/dashboard/sellers",
  },
  {
    id: 5,
    title: "Payment Requests",
    icon: <MdPayment />,
    role: "admin",
    path: "/admin/dashboard/payment-request",
  },

  {
    id: 6,
    title: "Deactive Sellers",
    icon: <FaUserTimes />,
    role: "admin",
    path: "/admin/dashboard/deactive-sellers",
  },

  {
    id: 7,
    title: "Seller Requests",
    icon: <FaCodePullRequest />,
    role: "admin",
    path: "/admin/dashboard/seller-requests",
  },
  {
    id: 8,
    title: "Live Chat",
    icon: <IoIosChatboxes />,
    role: "admin",
    path: "/admin/dashboard/chat-seller",
  },
];
