import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { TextBox, Button, Background, Wrapper } from "../component/Styled";
import styled from "styled-components";
import { FaChevronLeft } from "react-icons/fa";
import Modal2 from "../component/ModalMusic";
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
      <Modal2
        open={modalOpen}
        close={closeModal}
        header="내용이 저장되지 않아요!"
      >
        지금 나가실 경우, 지금까지의 내용들이
        <br />
        저장되지 않고 사라지게 됩니다.
        <br />
        괜찮으시겠어요?
      </Modal2>
    </React.Fragment>
  );
};

const MusicQ4 = () => {
  const location = useLocation();
  const [buttonMQ4, setButtonMQ4] = useState(
    location.state && location.state.MQ4 ? location.state.MQ4 : 6
  );
  const buttonMQ1 =
    location.state && location.state.MQ1 > 0 ? location.state.MQ1 : 0;
  const buttonMQ2 =
    location.state && location.state.MQ2 > 0 ? location.state.MQ2 : 0;
  const buttonMQ3 =
    location.state && location.state.MQ3 > 0 ? location.state.MQ3 : 0;
  const buttonMQ5 =
    location.state && location.state.MQ5 > 0 ? location.state.MQ5 : 0;
  const buttonMQ6 =
    location.state && location.state.MQ6 < 6 ? location.state.MQ6 : 6;

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
            <div>
              <StepIconWrapper marginTop="40px" marginLeft="25px">
                <StepIcon background="linear-gradient(90deg,#EDC21E, #edbd1e)" />
                <StepIcon background="linear-gradient(90deg, #edbd1e, #df6112)" />
                <StepIcon background="linear-gradient(90deg, #df6112, #df2a12)" />
                <StepIcon background="linear-gradient(90deg, #df2a12, #df12c7)" />
                <StepIcon background="lightgray" />
                <StepIcon background="lightgray" />
              </StepIconWrapper>
            </div>
            <Mainbox>
              <TextBox
                color="#777777"
                fontSize="17px"
                fontWeight="500"
                padding="16px 0 0 16px"
              >
                Q4.
              </TextBox>
              <QuestionBox>
                <TextBox
                  fontSize="17px"
                  fontWeight="600"
                  padding="16px 0 0 16px"
                  lineHeight="1.5"
                >
                  스스로 생각하기에
                  <br />
                  개성 있는 본인만의 이미지가 있다.
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
                  onClick={() => setButtonMQ4(5)}
                  backgroundColor={buttonMQ4 <= 5 ? "#fed623" : "#e8e8e8"}
                />
                <Button
                  padding="32px 23px 32px 23px"
                  margin="1px"
                  onClick={() => setButtonMQ4(4)}
                  backgroundColor={buttonMQ4 <= 4 ? "#fed623" : "#e8e8e8"}
                />
                <Button
                  padding="32px 23px 32px 23px"
                  margin="1px"
                  onClick={() => setButtonMQ4(3)}
                  backgroundColor={buttonMQ4 <= 3 ? "#fed623" : "#e8e8e8"}
                />
                <Button
                  padding="32px 23px 32px 23px"
                  margin="1px"
                  onClick={() => setButtonMQ4(2)}
                  backgroundColor={buttonMQ4 <= 2 ? "#fed623" : "#e8e8e8"}
                />
                <Button
                  padding="32px 23px 32px 23px"
                  margin="1px"
                  onClick={() => setButtonMQ4(1)}
                  backgroundColor={buttonMQ4 <= 1 ? "#fed623" : "#e8e8e8"}
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
              to={"/musicQ3"}
              state={{
                MQ1: buttonMQ1,
                MQ2: buttonMQ2,
                MQ3: buttonMQ3,
                MQ4: buttonMQ4,
                MQ5: buttonMQ5,
                MQ6: buttonMQ6,
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
                backgroundColor={"#e8e8e8"}
                cursor="pointer"
              >
                <IoIosArrowBack color="black" />
              </Button>
            </Link>

            <Link
              to={buttonMQ4 < 6 ? "/musicQ5" : "/musicQ4"}
              state={{
                MQ1: buttonMQ1,
                MQ2: buttonMQ2,
                MQ3: buttonMQ3,
                MQ4: buttonMQ4,
                MQ5: buttonMQ5,
                MQ6: buttonMQ6,
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
                  buttonMQ4 < 6
                    ? "linear-gradient(to right, #ffe262, #fcce00)"
                    : "#e8e8e8"
                }
                color={buttonMQ4 < 6 ? "white" : "black"}
                cursor={buttonMQ4 < 6 ? "pointer" : "default"}
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

export default MusicQ4;
