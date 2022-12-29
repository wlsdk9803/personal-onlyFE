import React, { useState, useEffect } from "react";
import {
  Background,
  TextBox,
  CardWrapper,
} from "../../component/Styled/index.js";
import ColorResult1 from "../../component/ColorResult1/index.js";
import Result2 from "../../component/Result2/index.js";
import Result3 from "../../component/Result3/index.js";
import Result4 from "../../component/Result4/index.js";
import ColorLoading from "../ColorLoading.jsx";
import { motion } from "framer-motion";
import { animate } from "../../component/Styled/animate";

const Dubitnarae = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5900);
  }, [loading]);
  return (
    <>
      {loading === true ? (
        <ColorLoading
          lineHeight="28px"
          name1="당신의 색을 찾고 있습니다."
          name2="잠시만 기다려주세요...."
        />
      ) : (
        <motion.div
          initial={animate.initial2}
          animate={animate.animate2}
          exit={animate.exit2}
        >
          <Background height="1408px" top="0" translate="translate(-50%, 0)">
            <TextBox
              padding="32px 0 0 24px"
              fontSize="21px"
              fontWeight="bold"
              float="left"
            >
              Personal
            </TextBox>

            <TextBox
              padding="110px 0 12px 24px"
              fontSize="17px"
              fontWeight="bold"
            >
              나의 색깔은?
            </TextBox>

            <ColorResult1
              colorName="두빛나래"
              shortExplain="두 개의 빛나는 날개"
              colorMean="'신비로움과 우아함의 상징'"
              image="https://i.postimg.cc/SKZ6b113/image.jpg"
              contentHeight="155px"
            >
              남다름과 우아함을 가진 당신은 오묘한 분위기를 주는 '두빛나래'와
              닮았습니다. 자기 자신에 대한 고찰과 홀로 생각하기를 좋아하여
              스스로에 대한 확신이 굳건합니다.
            </ColorResult1>

            <CardWrapper height="320px" padding="15px 0 0 0">
              <Result2>
                신비로운 분위기를 지녔습니다.
                <br />
                독창적인 생각으로 가득 차 창의적인 모습을 보여줍니다.
                <br />
                반면 내면은 상대적으로 평온한 경우가 많습니다. 개성 넘치는
                아이디어와 차분한 태도로 인하여 다른 사람에 비해 생각이 매우
                깊습니다.
              </Result2>
              <Result3>
                당신의 고상함은 자칫 우울해 보일 수 있습니다. 또한 프라이드가
                강하고 확신에 찬 태도가 상황에 따라 오만함으로 비춰질 가능성이
                있습니다.
              </Result3>
            </CardWrapper>

            <Result4
              link="/musicMain"
              kind="색"
              buttonColor="linear-gradient(to right, #fedf56, #ffd000)"
              suitPlace="차분한 분위기의 카페"
              SuitFriend="자유로운 미르"
              next="소리"
            />
          </Background>
        </motion.div>
      )}
    </>
  );
};

export default Dubitnarae;
