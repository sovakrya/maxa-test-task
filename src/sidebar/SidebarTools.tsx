import TextIcon from "../assets/icons/text-icon.svg";
import CircleIcon from "../assets/icons/circle-icon.svg";
import RectIcon from "../assets/icons/square-icon.svg";
import ImageIcon from "../assets/icons/image-icon.svg";
import SaveIcon from "../assets/icons/save-icon.svg";

import "./sidebarTools.scss";

import { useState } from "react";
import Modal from "../modalSVG/Modal";

type SidebarToolsProps = {
  onAddText: () => void;
  onAddCircle: () => void;
  onAddRect: () => void;
  onDownloadFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onGetSvg: () => void;
  svg: string;
};

export default function SidebarTools(props: SidebarToolsProps) {
  const [show, setShow] = useState(false);

  function onChangeShow(val: boolean) {
    setShow(val);
  }

  function createSvg() {
    props.onGetSvg();
    setShow(true);
  }

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
          onChange={(e) => props.onDownloadFile(e)}
        />
      </button>

      <button onClick={createSvg}>
        <img src={SaveIcon} alt="rect icon" height={40} width={40} />
      </button>

      <Modal onChangeShow={onChangeShow} show={show} svg={props.svg} />
    </div>
  );
}
