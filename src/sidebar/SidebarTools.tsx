import TextIcon from "../assets/icons/text-icon.svg";
import CircleIcon from "../assets/icons/circle-icon.svg";
import RectIcon from "../assets/icons/square-icon.svg";
import ImageIcon from "../assets/icons/image-icon.svg";
import SaveIcon from "../assets/icons/save-icon.svg";
import RedoIcon from "../assets/icons/redo-icon.svg";
import UndoIcon from "../assets/icons/undo-icon.svg";
import PlusIcon from "../assets/icons/plus-icon.svg";
import MinesIcon from "../assets/icons/minus-icon.svg";

import "./sidebarTools.scss";

import { useState } from "react";
import Modal from "../modalSVG/Modal";

type SidebarToolsProps = {
  onAddText: () => void;
  onAddCircle: () => void;
  onAddRect: () => void;
  onDownloadFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onGetSvg: () => void;
  onRedo: () => void;
  onUndo: () => void;
  onIncrease: () => void;
  onDecrease: () => void;
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
    <div className="sidebar-box">
      <h1 className="sidebar-title">MAXA test task</h1>

      <div className="tools-wrapper">
        <h2 className="tools-title">Tools</h2>

        <div className="tools-box">
          <button onClick={props.onAddText}>
            <img src={TextIcon} alt="text icon" height={20} width={20} />
            <span>text</span>
          </button>

          <button onClick={props.onAddCircle}>
            <img src={CircleIcon} alt="circle icon" height={20} width={20} />
            <span>circle</span>
          </button>

          <button onClick={props.onAddRect}>
            <img src={RectIcon} alt="rect icon" height={20} width={20} />
            <span>square</span>
          </button>

          <button className="btn">
            <img src={ImageIcon} alt="image icon" height={20} width={20} />
            <span>image</span>
            <input
              className="input-tool-box"
              type="file"
              accept=".png, .jpg, .jpeg"
              onChange={(e) => props.onDownloadFile(e)}
            />
          </button>

          <button onClick={createSvg}>
            <img src={SaveIcon} alt="save icon" height={20} width={20} />
            <span>save</span>
          </button>
        </div>
      </div>

      <div className="tools-wrapper">
        <h2 className="tools-title">History</h2>

        <div className="tools-box">
          <button onClick={props.onUndo}>
            <img src={UndoIcon} height={20} width={20} alt="undo icon" />
            <span>undo</span>
          </button>
          <button onClick={props.onRedo}>
            <img src={RedoIcon} height={20} width={20} alt="redo icon" />
            <span>redo</span>
          </button>
        </div>
      </div>

      <div className="tools-wrapper">
        <h2 className="tools-title">Zoom</h2>

        <div className="tools-box">
          <button onClick={props.onIncrease}>
            <img src={PlusIcon} alt="plus icon" height={20} width={20} />
            <span>increase</span>
          </button>
          <button onClick={props.onDecrease}>
            <img src={MinesIcon} alt="minus icon" height={20} width={20} />
            <span>decrease</span>
          </button>
        </div>
      </div>
      <Modal onChangeShow={onChangeShow} show={show} svg={props.svg} />
    </div>
  );
}
