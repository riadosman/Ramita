import React from "react";
import Packets from "../Components/Packets/Packets";
import Titlecom from "../Components/TItle/Titlecom";

const Packages = () => {
  return (
    <div style={{ margin: "4rem 0" }}>
      <Titlecom text="الباقات" />
      <Packets />
    </div>
  );
};

export default Packages;
