// import { Fragment } from "react";
// import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div></div>;
};

const ModalOverlay = (props) => {
  return (
    <div>
      <div>{props.children}</div>
    </div>
  );
};

// Getting the element to protal it afterwards
// const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <div className="">
      {/* createPortal Arguments: what to portal, where to portal */}
      {/* {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )} */}
      <Backdrop />
      <ModalOverlay>{props.children}</ModalOverlay>
    </div>
  );
};

export default Modal;
