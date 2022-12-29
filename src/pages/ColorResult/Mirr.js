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

const Mirr = () => {
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
          <Background height="1395px" top="0" translate="translate(-50%, 0)">
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
              colorName="미르"
              shortExplain="한마리의 날아오르는 용"
              colorMean="'자유로움과 쾌락의 상징'"
              image="https://i.postimg.cc/gkkGnMgN/image.jpg"
              contentHeight="155px"
            >
              매일이 즐겁고 신나며 자유를 추구하는 당신은 상쾌한 분위기의
              '미르'와 닮아 있습니다. 새로움이 주는 자극을 원동력으로 삼으며
              무언가에 얽매이지 않도록 노력합니다.
            </ColorResult1>

            <CardWrapper height="320px" padding="15px 0 0 0">
              <Result2>
                낙천적인 성격으로 파란만장한 삶을 꿈꾸며, 무엇이든 즉흥적으로
                시도하는 것을 즐겨합니다.
                <br />
                감성이 풍부하여 자신이 느끼는 바를 곧장 잘 표현하여 사람들에게
                호기심을 자극하는 경우가 많습니다.
              </Result2>
              <Result3>
                어디론가 훌쩍 떠나버릴 것 같은 가벼움으로 인해 주변인들에게 얻는
                신뢰도가 낮은 편입니다. 또한 스스로에 대한 믿음이 강해 선택의
                상황에서 성급한 판단으로 이어지기도 합니다.
              </Result3>
            </CardWrapper>

            <Result4
              link="/musicMain"
              kind="색"
              buttonColor="linear-gradient(to right, #fedf56, #ffd000)"
              suitPlace="전세계를 누비는 비행기 안"
              SuitFriend="진중한 두빛나래"
              next="소리"
            />
          </Background>
        </motion.div>
      )}
    </>
  );
};

export default Mirr;
