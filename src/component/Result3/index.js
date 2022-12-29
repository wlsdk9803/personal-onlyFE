import React from "react";
import { TextBox } from "../Styled";

const Result3 = (props) => {
  return (
    <>
      <TextBox fontSize="17px" fontWeight="700" padding="10px 0 0 32px">
        약점
      </TextBox>
      <TextBox
        fontSize="14px"
        fontWeight="500"
        color="#A3A3A3"
        padding="10px 25px 22px 32px"
        lineHeight="1.5"
      >
        {props.children}
      </TextBox>
    </>
  );
};

export default Result3;
