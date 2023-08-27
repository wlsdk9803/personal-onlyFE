import React, { useState } from "react";
import {
  TextBox,
  Button,
  ButtonWrapper,
  CardWrapper,
  SnsImage,
} from "../Styled";
import { Link } from "react-router-dom";
import SetShare from "../Share";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ModalCopy from "../ModalCopy";

const Result4 = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "unset";
  };
  return (
    <>
      <CardWrapper height="170px" padding="15px 0 0 0">
        <TextBox fontSize="17px" fontWeight="700" padding="15px 0 0 32px">
          어울리는 장소
        </TextBox>
        <TextBox
          fontSize="14px"
          fontWeight="500"
          color="#A3A3A3"
          padding="10px 0 15px 32px"
          lineHeight="1.5"
        >
          {props.suitPlace}
        </TextBox>
        <TextBox fontSize="17px" fontWeight="700" padding="10px 0 0 32px">
          어울리는 {props.kind} 유형
        </TextBox>
        <TextBox
          fontSize="14px"
          fontWeight="500"
          color="#A3A3A3"
          padding="10px 0 22px 32px"
          lineHeight="1.5"
        >
          {props.SuitFriend}
        </TextBox>
      </CardWrapper>
      <Button
        cursor="default"
        float="left"
        padding="11px 18px"
        backgroundColor="#F1F1F1"
        fontSize="17px"
        fontWeight="700"
        margin="60px 0 7px 40px"
      >
        친구에게 추천
      </Button>

      <CopyToClipboard
        text={"https://inha-hackathon-personal-fe-2yi.pages.dev/"}
        onCopy={openModal}
      >
        <SnsImage backgroundImage="message.JPG" margin="65px 0 7px 16px" />
      </CopyToClipboard>
      <ModalCopy
        open={modalOpen}
        close={closeModal}
        header="주소가 복사되었어요."
      >
        다른 분들께 이 서비스를 추천해보세요.
      </ModalCopy>
      <SnsImage
        backgroundImage="kakao.JPG"
        margin="65px 0 7px 16px"
        onClick={SetShare}
      />

      <ButtonWrapper>
        <Link to={props.link}>
          <Button
            fontWeight="700"
            fontSize="17px"
            width="240px"
            margin="20px 0 0 0"
            padding="10px"
            backgroundColor={props.buttonColor}
            boxShadow="0 5px 5px rgb(170, 170, 170)"
            navigate
            to={props.link}
            hoverBackgroundColor={props.hoverColor}
          >
            나의 {props.next} 알아보기
          </Button>
        </Link>
      </ButtonWrapper>
    </>
  );
};

export default Result4;
