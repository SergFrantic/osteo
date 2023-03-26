import "./style_modal.css";

function Modal({ modal, setModal, pathImg }) {
  
  return (
    <div
      className={
        modal ? "modal-container modal-active-container" : "modal-container"
      }
      onClick={() => setModal(false)}
    >
      <div className={
        modal ? "content-container content-active-container" : "content-container"
      } onClick={(e) => e.stopPropagation()}>
        <div className="btn" onClick={()=> setModal(false)}></div>
        <img src={pathImg} alt="..." />
      </div>
    </div>
  );
}

export default Modal;
