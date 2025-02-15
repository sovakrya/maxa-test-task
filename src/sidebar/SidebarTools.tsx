import TextIcon from "../assets/icons/text-icon.svg";
import CircleIcon from "../assets/icons/circle-icon.svg";
import RectIcon from "../assets/icons/square-icon.svg";
import ImageIcon from "../assets/icons/image-icon.svg";

import "./sidebarTools.scss";

type SidebarToolsProps = {
  onAddText: () => void;
  onAddCircle: () => void;
  onAddRect: () => void;
  OnDownloadFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SidebarTools(props: SidebarToolsProps) {
  return (
    <div className="tool-box">
      <button onClick={props.onAddText}>
        <img src={TextIcon} alt="text icon" height={40} width={40} />
      </button>

      <button onClick={props.onAddCircle}>
        <img src={CircleIcon} alt="circle icon" height={40} width={40} />
      </button>

      <button onClick={props.onAddRect}>
        <img src={RectIcon} alt="rect icon" height={40} width={40} />
      </button>

      <button className="btn">
        <img src={ImageIcon} alt="image icon" height={40} width={40} />
        <input
          className="input-tool-box"
          type="file"
          accept=".png, .jpg, .jpeg"
          onChange={(e) => props.OnDownloadFile(e)}
        />
      </button>
    </div>
  );
}
