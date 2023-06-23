import {Routes, Route, Link} from "react-router-dom"

import React from "react";
import MainPage from "./pages/main.page";
import Guige from "./pages/guige";
import WillOrder from "./pages/will.order";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/guige" element={<Guige />} />
        <Route path="/will_order" element={<WillOrder />} /> 
      </Routes>
    </div>
  );
}

export default App;
