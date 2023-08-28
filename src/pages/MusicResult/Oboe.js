import React, { useState, useEffect } from "react";
import {
  Background,
  TextBox,
  CardWrapper,
} from "../../component/Styled/index.js";
import MusicResult1 from "../../component/MusicResult1/index.js";
import Result2 from "../../component/Result2/index.js";
import Result3 from "../../component/Result3/index.js";
import Result4 from "../../component/Result4/index.js";
import MusicLoading from "../MusicLoading.jsx";
import { motion } from "framer-motion";
import { animate } from "../../component/Styled/animate.js";

const Oboe = () => {
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
        <Background height="1450px" top="0px" translate="translate(-50%, 0)">
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
          <audio controls>
            <source src="오보에.mp3" type="audio/mpeg" />
          </audio>

          <MusicResult1
            musicName="오보에"
            shortExplain="음을 꿰뚫는 관통력"
            musicMean="'끊기지 않는 단단한 소리'"
            image="오보에.png"
            contentHeight="195px"
          >
            연주회 시작 직전, 오보에 A 음은 오케스트라의 합주 소리를 뚫고 음정을
            조율할 때 기준이 되어줄 정도로 관통력이 매우 큽니다.
            <br />알 수 없는 소리들이 뒤엉켜 있으면 따뜻하게 이들의 든든한
            표지판이나 지지대가 되어주기도 합니다.
          </MusicResult1>

          <CardWrapper height="325px" padding="15px 0 0 0">
            <Result2>
              당신에게는 다른 사람들을 이끄는 부드러운 리더쉽이 있습니다.
              직관적으로 상황을 파악하는데 뛰어나고, 도움을 주기 위해 적극적으로
              노력하는 사람입니다. 또한 전형적인 모범이 되는 모습을 보여주기도
              합니다.
            </Result2>
            <Result3>
              다른 사람들과 잘 어울리기도 하지만, 가끔 타인의 문제에 지나치게
              관여할 때가 있습니다. 간혹 오지랖이 넓다는 소리를 들을 수
              있습니다.
            </Result3>
          </CardWrapper>

          <Result4
            link="/"
            kind="소리"
            buttonColor="linear-gradient(to right, #f0b6f3, #eb76f1)"
            hoverColor="linear-gradient(to right, #f1abf6, #e655ed)"
            suitPlace="시선이 집중되는 공연장"
            SuitFriend="팀파니, 파이프 오르간"
            next="색깔"
          />
        </Background>
      )}
    </>
  );
};

export default Oboe;
