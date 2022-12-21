import "./styles.css";
import Close from "../../assets/close.svg";

function ConfirmModal({
  titulo,
  btnConfirm,
  btnCancel,
  openDelete,
  handleClose,
  handleConfirm,
}) {
  return (
    <>
      {openDelete ? (
        <div className="backdrop">
          <div className="modal modal__confirm">
            <img
              src={Close}
              alt="close"
              className="close__btn"
              onClick={handleClose}
            />
            <h1>{titulo}</h1>
            <span>{}</span>
            <div className="container__btn">
              <button className="btn__green" onClick={handleConfirm}>{btnConfirm}</button>
              <button className="tbn__red" onClick={handleClose}>
                {btnCancel}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ConfirmModal;
