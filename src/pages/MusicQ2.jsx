import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TextBox, Button, Background, Wrapper } from "../component/Styled";
import styled from "styled-components";
import { FaChevronLeft } from "react-icons/fa";
import Modal2 from "../component/ModalMusic";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import { animate } from "../component/Styled/animate";
import { useLocation } from "react-router-dom";

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

const MusicQ2 = () => {
  const [buttonMQ2, setButtonMQ2] = useState(0);
  const location = useLocation();
  console.log(location);

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
                <StepIcon background="lightgray" />
                <StepIcon background="lightgray" />
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
                Q2.
              </TextBox>
              <QuestionBox>
                <TextBox
                  fontSize="17px"
                  fontWeight="600"
                  padding="16px 0 0 16px"
                  lineHeight="1.5"
                >
                  사람들과 같이 일하는 것이
                  <br />
                  혼자 일하는 것보다 더 편하다.
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
                  onClick={() => setButtonMQ2(1)}
                  backgroundColor={buttonMQ2 >= 1 ? "#fed623" : "#e8e8e8"}
                />
                <Button
                  padding="32px 23px 32px 23px"
                  margin="1px"
                  onClick={() => setButtonMQ2(2)}
                  backgroundColor={buttonMQ2 >= 2 ? "#fed623" : "#e8e8e8"}
                />
                <Button
                  padding="32px 23px 32px 23px"
                  margin="1px"
                  onClick={() => setButtonMQ2(3)}
                  backgroundColor={buttonMQ2 >= 3 ? "#fed623" : "#e8e8e8"}
                />
                <Button
                  padding="32px 23px 32px 23px"
                  margin="1px"
                  onClick={() => setButtonMQ2(4)}
                  backgroundColor={buttonMQ2 >= 4 ? "#fed623" : "#e8e8e8"}
                />
                <Button
                  padding="32px 23px 32px 23px"
                  margin="1px"
                  onClick={() => setButtonMQ2(5)}
                  backgroundColor={buttonMQ2 >= 5 ? "#fed623" : "#e8e8e8"}
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

            <Link to={"/musicQ1"} state={{ MQ1: location.state.MQ1 }}>
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
              to={buttonMQ2 > 0 ? "/musicQ3" : "/musicQ2"}
              state={{ MQ1: location.state.MQ1, MQ2: buttonMQ2 }}
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
                  buttonMQ2 > 0
                    ? "linear-gradient(to right, #ffe262, #fcce00)"
                    : "#e8e8e8"
                }
                color={buttonMQ2 > 0 ? "white" : "black"}
                cursor={buttonMQ2 > 0 ? "pointer" : "default"}
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

export default MusicQ2;
