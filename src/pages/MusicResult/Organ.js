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

const Organ = () => {
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
        <Background height="1500px" top="0px" translate="translate(-50%, 0)">
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
            <source src="오르간.mp3" type="audio/mpeg" />
          </MusicPlay>

          <MusicResult1
            musicName="오르간"
            shortExplain="웅장함을 넘어 장엄한 진동"
            musicMean="'우주를 들려주는 소리'"
            image="오르간.png"
            contentHeight="245px"
          >
            여러 개의 관들 속에서 공기가 갈라지며 떨리는 것에 의해 나는 오르간
            소리는 고전적이면서 화려합니다.
            <br />
            악기의 크기가 거대한 만큼, 혼자서도 오케스트라를 연상시킬 정도로
            풍부한 음색을 자랑하고, 특유의 신성한 분위기는 기독교에서 오랫동안
            사랑받아 왔습니다. 성량이 큰 만큼 주로 독주나 협주에서 볼 수
            있습니다.
          </MusicResult1>

          <CardWrapper height="300px" padding="15px 0 0 0">
            <Result2>
              당신의 대담함과 의지력은 같은 팀의 일원들을 긴장시켜 최대의 효율을
              이끌어냅니다.
              <br />
              또한 따뜻함보다는 합리성을, 인기보단 옳은 것을 추구하는 당신의
              이성적인 매력은 주변 사람들을 끌어들이기도 합니다.
            </Result2>
            <Result3>
              지나치게 비관적으로 말하는 경향이 있어 본의 아니게 타인에게 모욕을
              주거나 공격적으로 비춰질 수도 있습니다.
            </Result3>
          </CardWrapper>

          <Result4
            link="/"
            kind="소리"
            buttonColor="linear-gradient(to right, #f0b6f3, #eb76f1)"
            hoverColor="linear-gradient(to right, #f1abf6, #e655ed)"
            suitPlace="신성함이 압도하는 성당"
            SuitFriend="첼로, 오보에"
            next="색깔"
          />
        </Background>
      )}
    </>
  );
};

export default Organ;
