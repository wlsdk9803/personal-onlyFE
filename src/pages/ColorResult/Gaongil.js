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

const Gaongil = () => {
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
          <Background height="1360px" top="0" translate="translate(-50%, 0)">
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
              colorName="가온길"
              shortExplain="정직하고 바른 가운데 길"
              colorMean="'중립과 공정함의 상징'"
              image="가온길.jpg"
              contentHeight="150px"
            >
              색의 구성 요소가 정확히 반씩 섞인 '가온길'.
              <br />
              조화를 추구하는 중재자로서 갈등을 해결합니다. 자신을 내세우지 않는
              것처럼 보이지만, 그 안은 열정으로 가득 차 있습니다.
            </ColorResult1>

            <CardWrapper height="275px" padding="15px 0 0 0">
              <Result2>
                당신의 중립적인 위치는 타인에게 신뢰감을 줍니다. 대화할 때
                타인의 입장에 깊이 공감하며 경청하며, 객관적인 해결책과 의견을
                제시합니다. 또한 변함없는 태도로 모두가 의지할 수 있는 모습을
                보여줍니다.
              </Result2>
              <Result3>
                자칫 개성적이지 않고 소극적인 사람으로 비춰질 수 있습니다.
              </Result3>
            </CardWrapper>

            <Result4
              link="/musicMain"
              kind="색"
              buttonColor="linear-gradient(to right, #fedf56, #ffd000)"
              hoverColor="linear-gradient(to right, #ffdc3f, #ffba0a)"
              suitPlace="고요하지만 웅장한 아쿠아리움"
              SuitFriend="적극적인 온새미로"
              next="소리"
            />
          </Background>
        </motion.div>
      )}
    </>
  );
};

export default Gaongil;
