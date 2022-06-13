import React from "react";
import { Route, Routes } from "react-router";
import { LoginScreen } from "../components/Login/LoginScreen";
import { Register } from "../components/Register/Register";

import { Main, Wrapper } from "./AuthRouterStyle.js";

export const AuthRouter = () => {
  return (
    <Main>
      <Wrapper>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Wrapper>
    </Main>
  );
};
