import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { Background, Wrapper } from "../component/Styled";
import { motion } from "framer-motion";
import { animate } from "../component/Styled/animate";

const circleAnimation = keyframes`
  20%{
    transform: rotate(5deg);
  }
  50%{
    opacity: 0.7;
    background-position: 75% 25%;
  }
  100%{
    opacity: 1;
    transform: rotate(70deg);
  }`;

const Circle = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 100%;
  border-right: 3px solid lightgrey;
  border-top: 3px solid lightgrey;
  background: linear-gradient(
      180deg,
      rgba(255, 0, 0, 0.8),
      rgba(210, 0, 0, 0) 70.71%
    ),
    linear-gradient(90deg, rgba(255, 0, 255, 0.8), rgba(140, 62, 150, 0) 70.71%),
    linear-gradient(
      270deg,
      rgba(255, 255, 0, 0.8),
      rgba(215, 195, 51, 0) 70.71%
    ),
    linear-gradient(0deg, rgba(0, 255, 0, 0.8), rgba(120, 150, 100, 0) 70.71%);

  background-size: 150%;
  animation: ${circleAnimation} 4s 0s infinite alternate;
`;

const CircleWrapper = styled.div`
  width: 100%;
  height: 372px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextSection = styled.div`
  width: 272px;
  height: 133px;
  border-radius: 5px;
  border: none;
  box-shadow: 0 5px 5px rgb(170, 170, 170);
  background-color: white;
  transform: translate(0, 10%);
`;

const TextWrite = styled.div`
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css");
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #363636;
  margin-left: 16px;
  margin-top: 24px;
  line-height: ${(props) => props.lineHeight || "2.0"}; ;
`;

const TextWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;

const ColorLoading = (props) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, [loading]);
  return (
    <>
      {loading === true ? (
        <motion.div
          initial={animate.initial2}
          animate={animate.animate2}
          exit={animate.exit2}
        >
          <Wrapper>
            <Background>
              <CircleWrapper>
                <Circle />
              </CircleWrapper>
              <TextWrapper>
                <TextSection>
                  <TextWrite lineHeight={props.lineHeight}>
                    {props.name1}
                    <br />
                    {props.name2}
                    <br />
                    {props.name3}
                  </TextWrite>
                </TextSection>
              </TextWrapper>
            </Background>
          </Wrapper>
        </motion.div>
      ) : (
        <Navigate to={props.link} />
      )}
    </>
  );
};

export default ColorLoading;
