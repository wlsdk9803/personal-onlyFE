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

const Timpani = () => {
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
        <Background height="1465px" top="0px" translate="translate(-50%, 0)">
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
            <source src="팀파니.mp3" type="audio/mpeg" />
          </MusicPlay>

          <MusicResult1
            musicName="팀파니"
            shortExplain="오케스트라 제 2의 지휘자"
            musicMean="'울리는 듯 정확한 소리'"
            image="팀파니.png"
            contentHeight="200px"
          >
            팀파니는 현대 오케스트라에서 빠질 수 없는 타악기의 왕으로 불립니다.
            <br />
            합주에서 템포를 이끌어가는 주도적인 역할을 하며, 악곡에서 선율적으로
            큰 비중을 차지하진 않지만, 음악이 절정으로 치달을 때 비로소 압도적인
            웅장함을 보여줍니다.
          </MusicResult1>

          <CardWrapper height="305px" padding="15px 0 0 0">
            <Result2>
              넘치는 카리스마로 주변 사람들이 앞으로 나아갈 수 있도록 안정적으로
              이끌어줍니다.
              <br />
              절도와 무게감이 있어 어떠한 활동을 할 때, 이성적이고 주도적인
              모습을 보여줍니다.
            </Result2>
            <Result3>
              자칫 지나치게 이성적인 태도로 주변 사람들에게 상처를 줄 수
              있습니다.
              <br />
              가끔씩 의견이 다른 사람들을 존중하는 태도가 부족해 보일 수
              있습니다.
            </Result3>
          </CardWrapper>

          <Result4
            link="/"
            kind="소리"
            buttonColor="linear-gradient(to right, #f0b6f3, #eb76f1)"
            hoverColor="linear-gradient(to right, #f1abf6, #e655ed)"
            suitPlace="자연이 조화롭게 어우러진 숲 속 계곡"
            SuitFriend="오보에, 바이올린"
            next="색깔"
          />
        </Background>
      )}
    </>
  );
};

export default Timpani;
