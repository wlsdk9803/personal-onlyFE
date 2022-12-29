import React from "react";
import "./Styled/modal2.css";
import { NavLink } from "react-router-dom";

const Modal = (props) => {
  const { open, close, header } = props;

  return (
    <div className={open ? "openModal modalColor" : "modalColor"}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>{props.children}</main>

          <footer>
            <button className="close" onClick={close}>
              취소
            </button>
            <NavLink to={"/"}>
              <button>나가기</button>
            </NavLink>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
