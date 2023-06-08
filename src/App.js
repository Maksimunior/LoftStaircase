import {Routes, Route, Link} from "react-router-dom"

import React from "react";
import Main_page from "./pages/main.page";
import Guige from "./pages/guige";
import Will_order from "./pages/will.order";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main_page />} />
        <Route path="/guige" element={<Guige />} />
        <Route path="/will_order" element={<Will_order />} /> 
      </Routes>
    </div>
  );
}

export default App;
