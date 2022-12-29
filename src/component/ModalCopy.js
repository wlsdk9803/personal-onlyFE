import React from "react";
import "./Styled/modal.css";
import styled from "styled-components";

const MainCopy = styled.div`
  padding: 16px;
  border-bottom: 1px solid #dee2e6;
  margin-top: 10px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  color: #646464;
`;

const ModalCopy = (props) => {
  const { open, close, header } = props;

  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <MainCopy>{props.children}</MainCopy>
        </section>
      ) : null}
    </div>
  );
};

export default ModalCopy;
