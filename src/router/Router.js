import { Routes, Route } from "react-router-dom";
import { Users } from "../components/Users";
import { Home } from "../Home";
import { Comments } from "../components/Comments";
import { User } from "../User";

export const Router = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/comments"} element={<Comments />} />
      <Route path={"/users"} element={<Users />} />
      <Route path={"/user/:id"} element={<User />} />
    </Routes>
  );
};
