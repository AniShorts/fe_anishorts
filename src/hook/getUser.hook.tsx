import { GetUser } from "apis/common";
import React from "react";
import { useQuery } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";

const useBindGetUserHook = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const bindGetUserInfo = useQuery(["GetUser"], GetUser);

  React.useEffect(() => {
    if (bindGetUserInfo.isSuccess) {
      console.log(bindGetUserInfo);
    }
    if (bindGetUserInfo.isError) {
      navigate("/login");
    }
  }, [bindGetUserInfo.data, location.pathname]);

  return { getQueryUser: bindGetUserInfo };
};

export default useBindGetUserHook;
