import React from "react";
import "./Styled/modalMusic.css";
import { NavLink } from "react-router-dom";

const Modal2 = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal2" : "modal2"}>
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
            <NavLink to={"/musicMain"}>
              <button>나가기</button>
            </NavLink>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modal2;
