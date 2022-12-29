import React from "react";
import { TextBox } from "../Styled";
import { CardWrapper } from "../Styled";
import { ColorImage } from "../Styled";

const ColorResult1 = (props) => {
  return (
    <>
      <CardWrapper height="270px" padding="15px 0 0 0">
        <ColorImage backgroundImage={props.image} />
        <TextBox fontSize="21px" fontWeight="700" padding="20px 0 0 32px">
          {props.colorName}
        </TextBox>
        <TextBox
          fontSize="17px"
          fontWeight="600"
          color="#A3A3A3"
          padding="10px 0 22px 32px"
        >
          {props.shortExplain}
        </TextBox>
      </CardWrapper>
      <CardWrapper height={props.contentHeight} padding="15px 0 0 0">
        <TextBox fontSize="17px" fontWeight="700" padding="15px 0 0 32px">
          {props.colorMean}
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
      </CardWrapper>
    </>
  );
};

export default ColorResult1;
