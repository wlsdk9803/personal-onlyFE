import React, { useState, useEffect } from "react";
import {
  Background,
  TextBox,
  CardWrapper,
  MusicPlay,
} from "../../component/Styled/index.js";
import MusicResult1 from "../../component/MusicResult1/index.js";
import Result2 from "../../component/Result2/index.js";
import Result3 from "../../component/Result3/index.js";
import Result4 from "../../component/Result4/index.js";
import MusicLoading from "../MusicLoading.jsx";
import { motion } from "framer-motion";
import { animate } from "../../component/Styled/animate.js";

const Cello = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4500);
  }, [loading]);

  return (
    <>
      {loading === true ? (
        <motion.div
          initial={animate.initial2}
          animate={animate.animate2}
          exit={animate.exit2}
        >
          <MusicLoading
            lineHeight="28px"
            name1="당신의 소리를 찾고 있습니다."
            name2="잠시만 기다려주세요...."
            name3=""
          />
        </motion.div>
      ) : (
        <Background height="1442px" top="0px" translate="translate(-50%, 0)">
          <TextBox
            padding="32px 0 0 24px"
            fontSize="21px"
            fontWeight="bold"
            float="left"
          >
            Personal
          </TextBox>

          <TextBox padding="100px 0 0 24px" fontSize="17px" fontWeight="bold">
            나의 소리는?
          </TextBox>
          <MusicPlay controls>
            <source src="첼로.mp3" type="audio/mpeg" />
          </MusicPlay>

          <MusicResult1
            musicName="첼로"
            shortExplain="포근한 저음의 위로"
            musicMean="'사람을 닮은 소리'"
            image="첼로.png"
            contentHeight="220px"
          >
            사람의 목소리와 가장 닮아 있어 친숙한 느낌을 주는 첼로 소리에서는
            풍성한 울림 또한 느낄 수 있습니다.
            <br />
            연주자가 의자에 앉아 첼로를 가슴에 품고 연주 하기 때문에, ‘연주자의
            심장에 가장 가까운 악기’ 라고도 불리며, 가장 친숙한 음색으로 듣는
            사람에게 따뜻함을 전해줍니다.
          </MusicResult1>

          <CardWrapper height="285px" padding="15px 0 0 0">
            <Result2>
              감성적이고 공감을 잘 해주며 사람에게 관심이 많기 때문에, 당신에게
              주변 사람들이 편하게 속내를 잘 털어 놓습니다. 팀 안의 화합을
              추구하는 성격으로 이타적인 당신은 함께 있는 팀원들에게 긍정적인
              영향을 줍니다.
            </Result2>
            <Result3>
              주변 사람들에게만 집중하여 스스로에게 소홀해져 번아웃이 오기
              쉽습니다.
            </Result3>
          </CardWrapper>

          <Result4
            link="/"
            kind="소리"
            buttonColor="linear-gradient(to right, #f0b6f3, #eb76f1)"
            hoverColor="linear-gradient(to right, #f1abf6, #e655ed)"
            suitPlace="평화로운 분위기의 학교"
            SuitFriend="파이프 오르간, 피아노"
            next="색깔"
          />
        </Background>
      )}
    </>
  );
};

export default Cello;
