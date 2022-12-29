import { Routes, Route } from "react-router-dom";

// import Notfound from "../pages/notfound/Notfound";
import adminRoutes from "./users/admin";

const Routers = () => {
  return (
    <div className="scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 w-full">
      <Routes>
        {/*  routes  */}
        {adminRoutes()}

        {/* <Route path="*" element={<Notfound />} /> */}
      </Routes>
    </div>
  );
};

export default Routers;
