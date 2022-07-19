import React from "react";
import {Container} from "reactstrap";
import CartDetail from "../cart/CartDetail";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import { Route, Routes} from "react-router-dom";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound";

function App() {
  return (
    <Container>
      <Navi />
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/product" exact element={<Dashboard/>} />
        <Route path="/cart" exact element={<CartDetail/>} />
        <Route path="/saveproduct/:productId" exact element={<AddOrUpdateProduct/>} />
        <Route path="/saveproduct/" exact element={<AddOrUpdateProduct/>} />
        <Route path="*" exact element={<NotFound/>} />
      </Routes>
    </Container>
      
    
  );
}

export default App;
