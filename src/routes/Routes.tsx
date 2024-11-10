

import { Navigate, Route, Routes } from "react-router-dom";
import { authRoutes,  IRoute, publicRoutes } from ".";
import Default from "../Layouts/Default";


const AllRoutes = () => {
  const user = true

  return (
    <Routes>
     
        {authRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={user ? <Navigate to="/" /> : route.element} />
        ))}
      
    
      {user ? (
       publicRoutes.map((route : IRoute, index: number) => (
          <Route
            key={index}
            path={route.path}
            element={<Default>{route.element}</Default>}
          />
        ))
      ) : (
        <Route path="*" element={<Navigate to="/sign-in" replace />} />
      )}
    </Routes>
  );
};

export default AllRoutes;
