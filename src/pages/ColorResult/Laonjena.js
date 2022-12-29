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

const Laonjena = () => {
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
          <Background height="1455px" top="0" translate="translate(-50%, 0)">
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
              colorName="라온제나"
              shortExplain="즐겁고 기쁨 우리"
              colorMean="'행복과 희망의 상징'"
              image="https://i.postimg.cc/DyBy6VS9/image.jpg"
              contentHeight="155px"
            >
              항상 활기차며 즐거운 느낌을 상대방에게 퍼뜨립니다.
              <br />
              당신의 긍정 에너지는 스스로를 빛나게 하여 타인의 눈에 잘 띌
              것입니다.
            </ColorResult1>

            <CardWrapper height="365px" padding="15px 0 0 0">
              <Result2>
                밝은 기운이 다른 사람들에게도 좋은 영향을 미칩니다. 또한
                스트레스에 강하여, 고난을 즐기는 경향이 있습니다.
                <br />
                작은 일에서도 행복을 직접 찾아내어 상대방의 사소한 호의일지라도
                하나 하나 기억 하는 섬세함을 가졌습니다.
              </Result2>
              <Result3>
                섬세한 성격인 만큼, 타인에 대한 질투가 많은 편입니다. 가끔은
                변덕스러울 수 있습니다.
                <br />
                행복을 우선시하다 보니, 스스로 생각하기에 행복하지 않은 일은
                자발적으로 시작하지 않을 수 있습니다.
              </Result3>
            </CardWrapper>

            <Result4
              link="/musicMain"
              kind="색"
              buttonColor="linear-gradient(to right, #fedf56, #ffd000)"
              suitPlace="희망과 웃음이 넘치는 놀이공원"
              SuitFriend="신중한 꽃구름"
              next="소리"
            />
          </Background>
        </motion.div>
      )}
    </>
  );
};

export default Laonjena;
