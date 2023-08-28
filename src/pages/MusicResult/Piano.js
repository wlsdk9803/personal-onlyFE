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

const Piano = () => {
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
        <Background height="1550px" top="0px" translate="translate(-50%, 0)">
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
            <source src="피아노.mp3" type="audio/mpeg" />
          </audio>

          <MusicResult1
            musicName="피아노"
            shortExplain="감미로운 악기의 황제"
            musicMean="'가볍고 부드러운 선율'"
            image="피아노.png"
            contentHeight="220px"
          >
            전세계에서 가장 보편적으로 알려진 피아노.
            <br />
            거의 모든 음역대와 모든 가락이 있는 곡을 홀로 소화할 수 있어, 피아노
            한 대로 독주곡에서부터 오케스트라에서까지 눈부신 존재감을
            보여줍니다.
            <br />
            또한 피아노의 선율은 어떤 장르에도 구애 받지 않는 유연함을 지니고
            있습니다.
          </MusicResult1>

          <CardWrapper height="390px" padding="15px 0 0 0">
            <Result2>
              조용하지만 따뜻하고 친근한 당신은 주변 사람들에게 애정이 가득한
              만큼 주변에서 받는 사랑과 믿음이 두텁습니다.
              <br />
              타인에 대해 깊은 책임감을 가지고 스스로에 대한 신뢰를 갖기 위해
              헌신적인 모습을 보여주기도 합니다.
            </Result2>
            <Result3>
              가까운 사람들에겐 한없이 가까우나, 신중한 성격으로 새로운
              사람들에겐 자칫 다가가기 어려운 방어적인 사람으로 비춰질 수도
              있습니다.
              <br />말 또한 자기자신에게 철저한 원칙을 적용하기 때문에, 기대
              이하의 성과를 내었을 때 필요 이상으로 낙담하는 경우가 있습니다.
            </Result3>
          </CardWrapper>

          <Result4
            link="/"
            kind="소리"
            buttonColor="linear-gradient(to right, #f0b6f3, #eb76f1)"
            hoverColor="linear-gradient(to right, #f1abf6, #e655ed)"
            suitPlace="편안한 정적이 흐르는 도서관"
            SuitFriend="바순, 첼로"
            next="색깔"
          />
        </Background>
      )}
    </>
  );
};

export default Piano;
