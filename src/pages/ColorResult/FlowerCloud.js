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

const FlowerCloud = () => {
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
          <Background height="1388px" top="0" translate="translate(-50%, 0)">
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
              colorName="꽃구름"
              shortExplain="여러가지 빛을 띈 아름다운 구름"
              colorMean="'조화로움과 신중함의 상징'"
              image="꽃구름.jpg"
              contentHeight="155px"
            >
              모든 색이 적절히 혼합되어 있는 '꽃구름'.
              <br />
              흰색이 다른 모든 색들과 잘 어울리듯이 어디에서도 사람들과 잘
              어울릴 수 있는 성격으로, 깨끗하고 맑은 이미지로 기억됩니다.
            </ColorResult1>

            <CardWrapper height="300px" padding="15px 0 0 0">
              <Result2>
                당신은 놀라운 적응력을 가졌습니다. 섬세한 배려심으로 상대방과
                빠르게 친해지고 새로운 환경에 잘 적응합니다.
                <br />
                부드럽고 다정한 성격을 지닌 반면, 단호하게 자신의 의사를 표현할
                줄 아는 강단도 있습니다.
              </Result2>
              <Result3>
                신중함이 경계심으로 이어질 수 있습니다.
                <br />
                이는 사람과 깊게 친해지는 데에 어려움을 주고 때로는 상처를
                받기도 합니다.
              </Result3>
            </CardWrapper>

            <Result4
              link="/musicMain"
              kind="색"
              buttonColor="linear-gradient(to right, #fedf56, #ffd000)"
              hoverColor="linear-gradient(to right, #ffdc3f, #ffba0a)"
              suitPlace="가지각색의 사람들이 모이는 공원"
              SuitFriend="빛나는 라온제나"
              next="소리"
            />
          </Background>
        </motion.div>
      )}
    </>
  );
};

export default FlowerCloud;
