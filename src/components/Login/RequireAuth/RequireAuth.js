import React from "react";
import { Spinner } from "react-bootstrap";
import auth from "../../../firebase.init";

import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const [user, loading1] = useAuthState(auth);
  const location = useLocation();

  if (loading1) {
    return <Spinner animation="grow" variant="dark" />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
