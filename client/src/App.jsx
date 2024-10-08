import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeEvents from "./pages/Home_events";
import Nominees from "./pages/Norminees";
import Categories from "./pages/Categories";
import Missing from "./pages/Missing";
import Admin from "./admin/Admin";
import MakeVote from "./pages/MakeVote";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeEvents />} />
        <Route path="/categories/:eventId" element={<Categories />} />
        <Route path="/category/:id/nominees" element={<Nominees />} />
        <Route path="/makevote/for/:id/" element={<MakeVote />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Missing />} />
      </Routes>
    </Router>
  );
}

export default App;
