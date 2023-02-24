import React from "react";
import { Route, Routes } from "react-router-dom";
import Agents from "./Agents";
import Agent from "./Agents/Agent";
import Home from "./Home";
import Maps from "./Maps";
import Weapons from "./Weapons";

import Navbar from "./Home/components/navbar";
import { Map } from "./Maps/Map";
import { Weapon } from "./Weapons/Weapon";

const AppViews = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/home" element={<Home />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/weapons" element={<Weapons />} />
        <Route path="/agents/:agentUuid" element={<Agent />} />
        <Route path="/maps/:mapUuid" element={<Map />} />
        <Route path="/weapons/:wepUuid" element={<Weapon />} />
      </Routes>
    </div>
  );
};

export default AppViews;
