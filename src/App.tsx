import { useRef, useEffect, useState } from "react";
import { Canvas, Circle, FabricImage, IText, Rect } from "fabric";

import FabricCanvas from "./canvas/FabricCanvas";
import SidebarTools from "./sidebar/SidebarTools";

import "./App.scss";

function App() {
  const [canvas, setCanvas] = useState<Canvas | null>(null);
  const [svg, setSvg] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = new Canvas(canvasRef.current!);

    canvas.setDimensions({ width: 1000, height: 900 });

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

  function onDownloadFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (canvas === null) {
      return;
    }

    const file = e.target!.files![0];
    const reader = new FileReader();

    reader.onload = async (e) => {
      if (e.target === null) {
        return;
      }

      if (e.target.result === null) {
        return;
      }

      if (typeof e.target.result !== "string") {
        return;
      }
      const image = await FabricImage.fromURL(e.target.result);
      image.scale(0.5);
      canvas.add(image);
      canvas.centerObject(image);
      canvas.setActiveObject(image);
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  }

  function onGetSvg() {
    if (!canvas) {
      return;
    }

    const svgFromCanvas = canvas.toSVG();
    setSvg(svgFromCanvas);
  }

  return (
    <div className="main-box">
      <SidebarTools
        onAddText={onAddText}
        onAddCircle={onAddCircle}
        onAddRect={onAddRect}
        onDownloadFile={onDownloadFile}
        onGetSvg={onGetSvg}
        svg={svg}
      />
      <FabricCanvas ref={canvasRef} />
    </div>
  );
}

export default App;
