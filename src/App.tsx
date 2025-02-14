import { useRef, useEffect, useState } from "react";
import { Canvas, Circle, IText, Rect } from "fabric";

import FabricCanvas from "./canvas/FabricCanvas";
import SidebarTools from "./sidebar/SidebarTools";

import "./App.scss";

function App() {
  const [canvas, setCanvas] = useState<Canvas | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = new Canvas(canvasRef.current!);

    canvas.setDimensions({ width: 800, height: 600 });

    setCanvas(canvas);

    return () => {
      canvas.dispose();
    };
  }, [canvasRef, setCanvas]);

  function onAddText() {
    if (canvas === null) {
      return;
    }
    const text = new IText("edit me!", {
      fontSize: 20,
    });

    canvas.add(text);
    canvas.centerObject(text);
    canvas.setActiveObject(text);
  }

  function onAddCircle() {
    if (canvas === null) {
      return;
    }
    const circle = new Circle({
      fill: "#ac568f",
      height: 100,
      width: 100,
      radius: 50,
    });

    canvas.add(circle);
    canvas.centerObject(circle);
    canvas.setActiveObject(circle);
  }

  function onAddRect() {
    if (canvas === null) {
      return;
    }
    const rect = new Rect({
      fill: "#7f3aa7",
      height: 100,
      width: 100,
      radius: 50,
    });

    canvas.add(rect);
    canvas.centerObject(rect);
    canvas.setActiveObject(rect);
  }

  return (
    <div className="main-box">
      <SidebarTools
        onAddText={onAddText}
        onAddCircle={onAddCircle}
        onAddRect={onAddRect}
      />
      <FabricCanvas ref={canvasRef} />
    </div>
  );
}

export default App;
