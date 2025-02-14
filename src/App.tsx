import { useRef, useEffect, useState } from "react";
import { Canvas } from "fabric";

import FabricCanvas from "./canvas/FabricCanvas";
import SidebarTools from "./sidebar/SidebarTools";

import "./App.scss";

function App() {
  const [canvas, setCanvas] = useState<Canvas | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = new Canvas(canvasRef.current!, { backgroundColor: "#fff" });

    canvas.setDimensions({ width: 800, height: 600 });

    setCanvas(canvas);

    return () => {
      canvas.dispose();
    };
  }, [canvasRef, setCanvas]);

  return (
    <div className="main-box">
      <SidebarTools canvas={canvas} />
      <FabricCanvas ref={canvasRef} />
    </div>
  );
}

export default App;
