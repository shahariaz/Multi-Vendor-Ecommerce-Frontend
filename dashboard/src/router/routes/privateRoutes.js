import { adminRoutes } from "./adminRoutes";
import { sellerRoutes } from "./sellerRoutes.jsx";
export const privateRoutes = [...adminRoutes, ...sellerRoutes];
