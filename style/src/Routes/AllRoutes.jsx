import { Routes, Route } from "react-router-dom";
import AllProducts from "./AllProducts";
import Homepage from "./Homepage";
import Login from "./Login";
import SingleProduct from "./SingleProduct";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import PrivateRoute from "./PrivateRoute";

export default function AllRoutes() {
  const { category } = useContext(AuthContext);
  let single = `${category}/:name/:id`;
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path={category} element={<AllProducts />}></Route>
      <Route
        path={single}
        element={
          <PrivateRoute>
            <SingleProduct />
          </PrivateRoute>
        }
      ></Route>
      <Route path="/Sign&SignUp" element={<Login />}></Route>
    </Routes>
  );
}
