import TextIcon from "../assets/icons/text-icon.svg";

export default function SidebarTools({ onAddText }: { onAddText: () => void }) {
  return (
    <div>
      <button onClick={onAddText}>
        <img src={TextIcon} alt="text icon" height={40} width={40} />
      </button>
    </div>
  );
}
