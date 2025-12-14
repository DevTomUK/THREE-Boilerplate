// 2D overlay for Menu/HUD, etc

import React, { useContext, useState, useEffect } from "react";
import { CameraContext } from "../context/cameraContext";

export default function UI() {
  const { cameraRef } = useContext(CameraContext);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
        setVisible(true);
      },
  [cameraRef]);

  return (
    <div
      className="ui"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        pointerEvents: "none",
        opacity: visible ? 1 : 0,
        transition: "opacity 3s ease",
      }}
    >
      <h1>THREE Boilerplate</h1>
      <h2>This is the UI overlay</h2>
    </div>
  );
}
