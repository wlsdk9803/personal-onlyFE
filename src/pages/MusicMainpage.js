import React from "react";
import { NavLink } from "react-router-dom";
import {
  TextBox,
  Button,
  Background,
  Wrapper,
  NoteImage,
} from "../component/Styled";
import styled from "styled-components";
import { BsRecordFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { animate } from "../component/Styled/animate";

const Mainbox = styled.div`
  width: 272px;
  height: 345px;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  border-radius: 5px;
  border: none;
  box-shadow: 0 0 5px lightgray;
  background: linear-gradient(90deg, #eeede8, #e9e5e2);
  text-align: center;
`;

const IconWrapper = styled.div`
  padding-top: 20px;
  text-align: center;
`;

const ImageBox = styled.div`
  float: ${(props) => props.float};
  padding: ${(props) => props.padding || "0"};
`;

const Line = styled.div`
  width: ${(props) => props.width || "211px"};
  height: ${(props) => props.height || "1px"};
  border: 1px solid #1d1d1f;
  background-color: #1d1d1f;
`;

const MusicMainpage = () => {
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

            <Mainbox>
              <ImageBox float="left" padding="57px 0 0 33px">
                <NoteImage
                  width="26px"
                  height="48px"
                  backgroundImage="음표.png"
                />
              </ImageBox>

              <ImageBox float="left" padding="105px 0 0 16px">
                <NoteImage
                  width="26px"
                  height="48px"
                  backgroundImage="음표.png"
                />
              </ImageBox>
              <ImageBox float="right" padding="16px 0 0 0">
                <NoteImage
                  width="125px"
                  height="197px"
                  backgroundImage="높은음자리표.png"
                >
                  <ImageBox float="right" padding="68px 0 0 109px">
                    <Line width="163px" />
                  </ImageBox>
                  <ImageBox float="right" padding="24px 0 0 80px">
                    <Line width="190px" />
                  </ImageBox>
                  <ImageBox float="right" padding="24px 0 0 59px">
                    <Line />
                  </ImageBox>
                  <ImageBox float="right" padding="24px 0 0 59px">
                    <Line />
                  </ImageBox>
                  <ImageBox float="right" padding="24px 0 0 99px">
                    <Line width="171px" />
                  </ImageBox>
                </NoteImage>
              </ImageBox>

              <TextBox fontSize="17px" fontWeight="700" padding="210px 0 0 0">
                What's Your
              </TextBox>
              <TextBox
                fontSize="27px"
                fontWeight="700"
                padding="0 110px 15px 0"
              >
                SOUND?
              </TextBox>

              <NavLink to={`/musicQuestionLoading`}>
                <Button
                  padding="8px 80px 8px 80px"
                  backgroundColor="linear-gradient(to right, #fedf56, #ffd000)"
                  fontSize="17px"
                  fontWeight="700"
                  float="center"
                  boxShadow="5px 5px 10px rgb(200, 200, 200)"
                >
                  알아볼까?
                </Button>
              </NavLink>
            </Mainbox>

            <IconWrapper>
              <NavLink to={`/`}>
                <BsRecordFill color="lightgray" size="18px" cursor="pointer" />
              </NavLink>
              &nbsp;&nbsp;
              <BsRecordFill color="gray" size="18px" cursor="pointer" />
            </IconWrapper>
          </Background>
        </Wrapper>
      </motion.div>
    </>
  );
};

export default MusicMainpage;
