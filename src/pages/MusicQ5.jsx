import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
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

const MusicQ5 = () => {
  const [buttonMQ5, setButtonMQ5] = useState(0);
  const location = useLocation();

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
                <StepIcon background="linear-gradient(90deg, #df12c7, #b612df)" />
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
                Q5.
              </TextBox>
              <QuestionBox>
                <TextBox
                  fontSize="17px"
                  fontWeight="600"
                  padding="16px 0 0 16px"
                  lineHeight="1.5"
                >
                  동료나 친구들에게 주로 친근하고
                  <br />
                  따뜻한 이미지이다.
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
                  onClick={() => setButtonMQ5(1)}
                  backgroundColor={buttonMQ5 >= 1 ? "#fed623" : "#e8e8e8"}
                />
                <Button
                  padding="32px 23px 32px 23px"
                  margin="1px"
                  onClick={() => setButtonMQ5(2)}
                  backgroundColor={buttonMQ5 >= 2 ? "#fed623" : "#e8e8e8"}
                />
                <Button
                  padding="32px 23px 32px 23px"
                  margin="1px"
                  onClick={() => setButtonMQ5(3)}
                  backgroundColor={buttonMQ5 >= 3 ? "#fed623" : "#e8e8e8"}
                />
                <Button
                  padding="32px 23px 32px 23px"
                  margin="1px"
                  onClick={() => setButtonMQ5(4)}
                  backgroundColor={buttonMQ5 >= 4 ? "#fed623" : "#e8e8e8"}
                />
                <Button
                  padding="32px 23px 32px 23px"
                  margin="1px"
                  onClick={() => setButtonMQ5(5)}
                  backgroundColor={buttonMQ5 >= 5 ? "#fed623" : "#e8e8e8"}
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

            <NavLink to={"/musicQ4"}>
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
            </NavLink>

            <Link
              to={buttonMQ5 > 0 ? "/musicQ6" : "/musicQ5"}
              state={{
                MQ1: location.state.MQ1,
                MQ2: location.state.MQ2,
                MQ3: location.state.MQ3,
                MQ4: location.state.MQ4,
                MQ5: buttonMQ5,
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
                  buttonMQ5 > 0
                    ? "linear-gradient(to right, #ffe262, #fcce00)"
                    : "#e8e8e8"
                }
                color={buttonMQ5 > 0 ? "white" : "black"}
                cursor={buttonMQ5 > 0 ? "pointer" : "default"}
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

export default MusicQ5;
