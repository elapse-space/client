import { useSession } from "@entities/session";
import { RouterPaths } from "@shared/lib/router";
import React, { Fragment } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { shallow } from "zustand/shallow";

export const PrivateRoutes = () => {
  const isAuth = useSession((state) => state.isAuth, shallow);

  return (
    <Fragment>
      {isAuth ? <Outlet /> : <Navigate to={RouterPaths.AUTH_PAGE} />}
    </Fragment>
  );
};

export const PublicRoutes = () => {
  const isAuth = useSession((state) => state.isAuth, shallow);

  return (
    <Fragment>
      {!isAuth ? <Outlet /> : <Navigate to={RouterPaths.NOT_FOUND_PAGE} />}
    </Fragment>
  );
};
