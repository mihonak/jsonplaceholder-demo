import { Routes, Route } from "react-router-dom";
import { Home } from "../Home";
import { Users } from "../Users";
import { User } from "../User";
import { Comments } from "../Comments";

export const Router = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/comments"} element={<Comments />} />
      <Route path={"/users"} element={<Users />} />
      <Route path={"/user/:userId"} element={<User />} />
    </Routes>
  );
};
