import "./fabricCanvas.scss";

export default function FabricCanvas({
  ref,
}: {
  ref: React.RefObject<HTMLCanvasElement | null>;
}) {
  return (
    <div className="canvas-box">
      <canvas ref={ref} width="800" height="600"></canvas>
    </div>
  );
}
