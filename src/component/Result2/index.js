import React from "react";
import { TextBox } from "../Styled";

const Result2 = (props) => {
  return (
    <>
      <TextBox fontSize="17px" fontWeight="700" padding="15px 0 0 32px">
        강점
      </TextBox>
      <TextBox
        fontSize="14px"
        fontWeight="500"
        color="#A3A3A3"
        padding="10px 25px 15px 32px"
        lineHeight="1.5"
      >
        {props.children}
      </TextBox>
    </>
  );
};

export default Result2;
