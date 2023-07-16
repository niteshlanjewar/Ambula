
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";

import ShoppingCart from "./ShoppingCart";
import Shopping from "../Pages/Shopping";
import ProductDetails from "../Pages/ProductDetails";
import TodoList from "./TodoList";
import { TodoProvider } from "../contexts/TodoContext";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route
        path="/todo"
        element={
          <TodoProvider>
            <TodoList />
          </TodoProvider>
        }
      ></Route>
      <Route path="/shopping" element={<Shopping />}></Route>
      <Route path="/cart" element={<ShoppingCart />}></Route>
      <Route path="/product/:id" element={<ProductDetails />}></Route>
    </Routes>
  );
};

export default AllRoutes;
