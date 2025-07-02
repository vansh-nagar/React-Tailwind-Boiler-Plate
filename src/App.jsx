import React from "react";
import Page1 from "./components/Page1";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
