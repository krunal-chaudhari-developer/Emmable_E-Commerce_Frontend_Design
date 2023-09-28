import React from "react";
import { useParams } from "react-router-dom";

const Sidebar = () => {
  const { id } = useParams();
  return <div className="text-9xl">{id}</div>;
};

export default Sidebar;
