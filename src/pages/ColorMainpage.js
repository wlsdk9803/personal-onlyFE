import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  TextBox,
  Button,
  Background,
  Circle,
  Wrapper,
} from "../component/Styled";
import styled from "styled-components";
import { BsRecordFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { animate } from "../component/Styled/animate";
import { useState } from "react";

const Mainbox = styled.div`
  width: 272px;
  height: 345px;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  border-radius: 5px;
  border: none;
  box-shadow: 0 0 5px lightgray;
  background-color: #ffffff;
  text-align: center;
  cursor: pointer;
`;

const CircleBox = styled.div`
  float: ${(props) => props.float};
  padding: ${(props) => props.padding || "0"};
`;

const IconWrapper = styled.div`
  padding-top: 20px;
  text-align: center;
`;

const ColorMainpage = () => {
  const [dragStartX, setDragStartX] = useState(null);
  const [touchStartX, setTouchStartX] = useState(null);
  const navigate = useNavigate();

  const handleDragStart = (e) => {
    setDragStartX(e.clientX);
  };
  const handleDragEnd = (e) => {
    if (dragStartX && e.clientX < dragStartX) navigate("/musicMain");
    setDragStartX(null);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };
  const handleTouchEnd = (e) => {
    if (touchStartX && e.changedTouches[0].clientX < touchStartX)
      navigate("/musicMain");
    setTouchStartX(null);
  };

  return (
    <>
      <motion.div
        initial={animate.initial2}
        animate={animate.animate2}
        exit={animate.exit2}
      >
        <Wrapper>
          <Background>
            <TextBox padding="32px 0 0 24px" fontSize="21px" fontWeight="bold">
              Personal
            </TextBox>
            <TextBox
              padding="44px 0 16px 24px"
              fontSize="17px"
              fontWeight="bold"
            >
              지극히 개인적인, <br />
              나만의 감각을 찾아보세요
            </TextBox>

            <Mainbox
              draggable="true"
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <CircleBox float="right" padding="16px 24px 0 0">
                <Circle
                  background="linear-gradient(to left, #A712DFB2, #FFB80066)"
                  width="50px"
                  height="50px"
                  boxShadow="5px -5px 20px rgb(182, 182, 182)"
                ></Circle>
              </CircleBox>

              <CircleBox float="left" padding="80px 0 0 43px">
                <Circle
                  background="linear-gradient(240deg, #A712DFB2, #FFB80066)"
                  width="25px"
                  height="25px"
                  boxShadow="0 0 10px lightgray"
                ></Circle>
              </CircleBox>

              <CircleBox float="right" padding="0 60px 0 0">
                <Circle
                  background="linear-gradient(45deg, #cc00ff, #ff22ed, #dff042, #d1ff1b)"
                  backgroundSize="200% 200%"
                  width="95px"
                  height="95px"
                  boxShadow="0 0 10px lightgray"
                ></Circle>
              </CircleBox>

              <CircleBox float="left" padding="0 0 0 230px">
                <Circle
                  background="linear-gradient(240deg, #A712DFB2, #FFB80066)"
                  width="18px"
                  height="18px"
                  boxShadow="0 0 5px lightgray"
                ></Circle>
              </CircleBox>

              <CircleBox float="right" padding="10px 60px 0 0">
                <Circle
                  background="linear-gradient(240deg, #A712DFB2, #FFB80066)"
                  width="40px"
                  height="40px"
                  boxShadow="-5px -5px 20px rgb(200, 200, 200)"
                ></Circle>
              </CircleBox>

              <TextBox fontSize="17px" fontWeight="700" padding="210px 0 0 0">
                What's Your
              </TextBox>
              <TextBox fontSize="27px" fontWeight="700" padding="0 50px 15px 0">
                COLOR?
              </TextBox>

              <NavLink to={`/colorQuestionLoading`}>
                <Button
                  padding="8px 80px 8px 80px"
                  backgroundColor="linear-gradient(to right, #f0b6f3, #eb76f1)"
                  fontSize="17px"
                  fontWeight="700"
                  float="center"
                  boxShadow="5px 5px 10px rgb(200, 200, 200)"
                  hoverBackgroundColor="linear-gradient(to right, #f1abf6, #e655ed)"
                >
                  알아볼까?
                </Button>
              </NavLink>
            </Mainbox>

            <IconWrapper>
              <BsRecordFill color="gray" size="18px" cursor="pointer" />
              &nbsp;&nbsp;
              <NavLink to={`/musicMain`}>
                <BsRecordFill color="lightgray" size="18px" cursor="pointer" />
              </NavLink>
            </IconWrapper>
          </Background>
        </Wrapper>
      </motion.div>
    </>
  );
};

export default ColorMainpage;
