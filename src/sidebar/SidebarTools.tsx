import TextIcon from "../assets/icons/text-icon.svg";
import CircleIcon from "../assets/icons/circle-icon.svg";
import RectIcon from "../assets/icons/square-icon.svg";

type SidebarToolsProps = {
  onAddText: () => void;
  onAddCircle: () => void;
  onAddRect: () => void;
};

export default function SidebarTools(props: SidebarToolsProps) {
  return (
    <div>
      <button onClick={props.onAddText}>
        <img src={TextIcon} alt="text icon" height={40} width={40} />
      </button>

      <button onClick={props.onAddCircle}>
        <img src={CircleIcon} alt="circle icon" height={40} width={40} />
      </button>

      <button onClick={props.onAddRect}>
        <img src={RectIcon} alt="rect icon" height={40} width={40} />
      </button>
    </div>
  );
}
