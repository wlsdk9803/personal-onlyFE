import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { TextBox, Button, Background, Wrapper } from "../component/Styled";
import styled from "styled-components";
import { FaChevronLeft } from "react-icons/fa";
import Modal from "../component/Modal";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import { animate } from "../component/Styled/animate";

const Mainbox = styled.div`
  width: 272px;
  height: 307px;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  margin-top: 150px;
  border-radius: 5px;
  border: none;
  box-shadow: 2px 5px 5px rgb(161, 161, 161);
  background-color: #ffffff;
`;

const StepIconWrapper = styled.div`
  float: left;
  text-align: center;
  width: 100%;
  margin-top: ${(props) => props.marginTop || "0"};
  margin-left: ${(props) => props.marginLeft || "0"};
`;

const StepIcon = styled.div`
  width: 45px;
  height: 7px;
  border-radius: 20px;
  background: ${(props) => props.background || "lightgray"};
  float: left;
`;

const QuestionBox = styled.div`
  height: 75px;
`;
const RestartBtn = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <React.Fragment>
      <TextBox
        onClick={openModal}
        padding="33px 0 0 20px"
        fontSize="21px"
        fontWeight="bold"
        float="left"
      >
        <FaChevronLeft cursor="pointer" />
      </TextBox>
      <TextBox
        onClick={openModal}
        padding="30px 0 0 8px"
        fontSize="21px"
        fontWeight="bold"
        float="left"
        cursor="pointer"
      >
        Home
      </TextBox>
      <Modal
        open={modalOpen}
        close={closeModal}
        header="내용이 저장되지 않아요!"
      >
        지금 나가실 경우, 지금까지의 내용들이
        <br />
        저장되지 않고 사라지게 됩니다.
        <br />
        괜찮으시겠어요?
      </Modal>
    </React.Fragment>
  );
};
const ColorQ3 = () => {
  const location = useLocation();
  const [buttonCQ3, setButtonCQ3] = useState(
    location.state && location.state.CQ3 ? location.state.CQ3 : 0
  );
  const buttonCQ1 =
    location.state && location.state.CQ1 > 0 ? location.state.CQ1 : 0;
  const buttonCQ2 =
    location.state && location.state.CQ2 > 0 ? location.state.CQ2 : 0;
  const buttonCQ4 =
    location.state && location.state.CQ4 > 0 ? location.state.CQ4 : 0;
  const buttonCQ5 =
    location.state && location.state.CQ5 > 0 ? location.state.CQ5 : 0;
  const buttonCQ6 =
    location.state && location.state.CQ6 > 0 ? location.state.CQ6 : 0;
  console.log(location.state);

  return (
    <>
      <motion.div
        initial={animate.initial}
        animate={animate.animate}
        exit={animate.exit}
      >
        <Wrapper>
          <Background>
            <RestartBtn />

            <StepIconWrapper marginTop="40px" marginLeft="25px">
              <StepIcon background="#A712DF" />
              <StepIcon background="linear-gradient(90deg, #b612df, #df12c7)" />
              <StepIcon background="linear-gradient(90deg, #df12c7, #df2a12)" />
              <StepIcon background="lightgray" />
              <StepIcon background="lightgray" />
              <StepIcon background="lightgray" />
            </StepIconWrapper>

            <Mainbox>
              <TextBox
                color="#777777"
                fontSize="17px"
                fontWeight="500"
                padding="16px 0 0 16px"
              >
                Q3.
              </TextBox>
              <QuestionBox>
                <TextBox
                  fontSize="17px"
                  fontWeight="600"
                  padding="16px 0 0 16px"
                  lineHeight="1.5"
                >
                  나는 평소 친구들과 논쟁하는
                  <br />
                  상황에 놓이면 피하는 편이다.
                  <br />
                </TextBox>
              </QuestionBox>

              <TextBox
                color="#A3A3A3"
                fontSize="14px"
                fontWeight="600"
                padding="41px 0 0 16px"
              >
                NO
              </TextBox>
              <StepIconWrapper marginTop="8px">
                <Button
                  padding="32px 23px 32px 23px"
                  margin="1px"
                  onClick={() => setButtonCQ3(1)}
                  backgroundColor={buttonCQ3 >= 1 ? "#eb76f1" : "#e8e8e8"}
                />
                <Button
                  padding="32px 23px 32px 23px"
                  margin="1px"
                  onClick={() => setButtonCQ3(2)}
                  backgroundColor={buttonCQ3 >= 2 ? "#eb76f1" : "#e8e8e8"}
                />
                <Button
                  padding="32px 23px 32px 23px"
                  margin="1px"
                  onClick={() => setButtonCQ3(3)}
                  backgroundColor={buttonCQ3 >= 3 ? "#eb76f1" : "#e8e8e8"}
                />
                <Button
                  padding="32px 23px 32px 23px"
                  margin="1px"
                  onClick={() => setButtonCQ3(4)}
                  backgroundColor={buttonCQ3 >= 4 ? "#eb76f1" : "#e8e8e8"}
                />
                <Button
                  padding="32px 23px 32px 23px"
                  margin="1px"
                  onClick={() => setButtonCQ3(5)}
                  backgroundColor={buttonCQ3 >= 5 ? "#eb76f1" : "#e8e8e8"}
                />
              </StepIconWrapper>
              <TextBox
                color="#A3A3A3"
                fontSize="14px"
                fontWeight="600"
                float="right"
                padding="5px 16px 0 0"
              >
                YES
              </TextBox>
            </Mainbox>

            <Link
              to={"/colorQ2"}
              state={{
                CQ1: buttonCQ1,
                CQ2: buttonCQ2,
                CQ3: buttonCQ3,
                CQ4: buttonCQ4,
                CQ5: buttonCQ5,
                CQ6: buttonCQ6,
              }}
            >
              <Button
                borderRadius="50%"
                padding="7px 10px 3px 7px"
                margin="35px 0 0 45px"
                fontSize="25px"
                fontWeight="700"
                float="left"
                boxShadow="0 5px 5px rgb(161, 161, 161)"
                backgroundColor="#ebebeb"
                cursor="pointer"
              >
                <IoIosArrowBack color="black" />
              </Button>
            </Link>

            <Link
              to={buttonCQ3 > 0 ? "/colorQ4" : "/colorQ3"}
              state={{
                CQ1: buttonCQ1,
                CQ2: buttonCQ2,
                CQ3: buttonCQ3,
                CQ4: buttonCQ4,
                CQ5: buttonCQ5,
                CQ6: buttonCQ6,
              }}
            >
              <Button
                borderRadius="50%"
                padding="7px 7px 3px 10px"
                margin="35px 45px 0 30px"
                fontSize="25px"
                fontWeight="700"
                float="right"
                boxShadow="0 5px 5px rgb(161, 161, 161)"
                backgroundColor={
                  buttonCQ3 > 0
                    ? "linear-gradient(to right, #f0b6f3, #eb76f1)"
                    : "#e8e8e8"
                }
                color={buttonCQ3 > 0 ? "white" : "black"}
                cursor={buttonCQ3 > 0 ? "pointer" : "default"}
              >
                <IoIosArrowForward />
              </Button>
            </Link>
          </Background>
        </Wrapper>
      </motion.div>
    </>
  );
};

export default ColorQ3;
