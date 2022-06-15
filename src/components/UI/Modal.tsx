import { ModalProps } from "../../types/UI";
import ReactDOM from "react-dom";

const Backdrop = (props: ModalProps) => {
  return (
    <div
      className="fixed inset-0 z-40 bg-black opacity-75"
      onClick={props.onHideCart}
    ></div>
  );
};
const ModalOverlay = (props: ModalProps) => {
  return (
    <div
      className="fixed top-[20vh] left-[5%]
    w-[90%] bg-white p-4 rounded-2xl shadow-md z-50 animate-slide-down
    md:w-[40rem] md:left-[calc(50%_-_20rem)]"
    >
      <div className="">{props.children}</div>
    </div>
  );
};

const portalRoot = document.getElementById("overlays")!;
const Modal = (props: ModalProps) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onHideCart={props.onHideCart} />,
        portalRoot
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalRoot
      )}
    </>
  );
};

export default Modal;
