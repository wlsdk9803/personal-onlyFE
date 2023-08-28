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

const Bassoon = () => {
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
            <source src="바순.mp3" type="audio/mpeg" />
          </MusicPlay>

          <MusicResult1
            musicName="바순"
            shortExplain="차분하면서 웃음이 나는"
            musicMean="'묘한 안정감을 주는 선율'"
            image="바순.png"
            contentHeight="180px"
          >
            일반 사람들에겐 낯선 바순.
            <br />
            생김새부터 독특한 바순의 음색은 저음임에도 명확하고 강렬한 공명을
            남깁니다. 굉장히 고가의 악기이기 때문에 바순에게 다가가기 쉽지 않아
            연주자가 희귀하기도 합니다.
          </MusicResult1>

          <CardWrapper height="300px" padding="15px 0 0 0">
            <Result2>
              온화하고 조화를 추구하여 어른스러운 매력이 있습니다. 또한 자신만의
              영역이 깊어 독립적이고 내면이 단단하기 때문에 주변 사람들이
              당신에게 의지하기도 합니다.
            </Result2>
            <Result3>
              상대방과의 충돌을 피하고자 하는 모습이 자칫 우유부단해 보일 수
              있습니다. 또한 타인과의 갈등이 깊어졌을 때 문제 자체를
              해결하기보다는 회피하는 경향이 있습니다.
            </Result3>
          </CardWrapper>

          <Result4
            link="/"
            kind="소리"
            buttonColor="linear-gradient(to right, #f0b6f3, #eb76f1)"
            hoverColor="linear-gradient(to right, #f1abf6, #e655ed)"
            suitPlace="차분한 분위기의 재즈바"
            SuitFriend="피아노, 마림바"
            next="색깔"
          />
        </Background>
      )}
    </>
  );
};

export default Bassoon;
