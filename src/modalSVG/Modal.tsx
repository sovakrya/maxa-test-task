import { useEffect, useRef } from "react";

import "./modal.scss";

export default function Modal({
  show,
  svg,
  onChangeShow,
}: {
  show: boolean;
  svg: string;
  onChangeShow: (show: boolean) => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!dialogRef.current) {
      return;
    }

    if (show) {
      openModal();
    } else {
      closeModal();
    }
  }, [show]);

  function openModal() {
    if (!dialogRef.current) {
      return;
    }

    dialogRef.current.showModal();

    onChangeShow(true);
  }

  function closeModal() {
    if (!dialogRef.current) {
      return;
    }

    dialogRef.current.close();

    onChangeShow(false);
  }

  return (
    <dialog ref={dialogRef} className="modal-wrapper">
      <div className="modal-box">
        <div className="modal-header">
          <h2 className="model-title">Your svg!</h2>
        </div>

        <div className="modal-body">
          <span>{svg}</span>

          <button className="modal-btn" onClick={() => onChangeShow(false)}>
            Ok
          </button>
        </div>
      </div>
    </dialog>
  );
}
