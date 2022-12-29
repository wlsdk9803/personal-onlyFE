import React from "react";
import { TextBox } from "../Styled";
import { CardWrapper } from "../Styled";
import { MusicImage } from "../Styled";

const MusicResult1 = (props) => {
  return (
    <>
      <CardWrapper padding="0 0 0 0" height="280px">
        <MusicImage backgroundImage={props.image}>
          <TextBox
            fontSize="21px"
            color="white"
            fontWeight="700"
            padding="200px 0 0 32px"
          >
            {props.musicName}
          </TextBox>
          <TextBox
            fontSize="17px"
            fontWeight="600"
            color="#A3A3A3"
            padding="10px 0 22px 32px"
          >
            {props.shortExplain}
          </TextBox>
        </MusicImage>
      </CardWrapper>
      <CardWrapper height={props.contentHeight} padding="15px 0 0 0">
        <TextBox fontSize="17px" fontWeight="700" padding="15px 0 0 32px">
          {props.musicMean}
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

export default MusicResult1;
