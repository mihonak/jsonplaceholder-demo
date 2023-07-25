import { Routes, Route } from "react-router-dom";
import { Users } from "../components/Users";
import { Home } from "../Home";
import { Posts } from "../Posts";
import { Todos } from "../Todos";
import { Albums } from "../Albums";
import { Photos } from "../Photos";

export const Router = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/users"} element={<Users />} />
      <Route path={"/users/:id/posts"} element={<Posts />} />
      <Route path={"/users/:id/todos"} element={<Todos />} />
      <Route path={"/users/:id/albums"} element={<Albums />} />
      <Route path={"/users/:id/albums/:albumid/photos"} element={<Photos />} />
    </Routes>
  );
};
