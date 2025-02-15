import "./fabricCanvas.scss";

export default function FabricCanvas({
  ref,
}: {
  ref: React.RefObject<HTMLCanvasElement | null>;
}) {
  return (
    <div className="canvas-box">
      <canvas ref={ref} width="1000" height="900"></canvas>
    </div>
  );
}
