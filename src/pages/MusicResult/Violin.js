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

const Violin = () => {
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
        <Background height="1470px" top="0px" translate="translate(-50%, 0)">
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
          <audio src="바이올린.mp3" autoplay controls />

          <MusicResult1
            musicName="바이올린"
            shortExplain="타고난 화려함은 숨길 수 없다."
            musicMean="'조화롭고 다양한 매력의 선율'"
            image="바이올린.png"
            contentHeight="200px"
          >
            합주에서 주요한 선율을 이끌어 가는 바이올린.
            <br />
            어떤 악기와도 잘 어울리는 선율은 악기계의 ‘인싸’입니다.
            <br />
            넓은 음역대를 갖고 있어 빠른 속주부터 서정적인 멜로디까지 무한하게
            변화할 수 있기 때문에, 다양한 장르에서 폭넓게 연주되는 악기입니다.
          </MusicResult1>

          <CardWrapper height="345px" padding="15px 0 0 0">
            <Result2>
              당신은 어떤 사람과도 잘 어울리며, 화려한 성격으로 팀 내에서 분위기
              메이커 역할을 맡고 있습니다.
              <br />
              풍부한 표현력으로 타인의 마음을 이끌어 내는 따뜻한 면을 지녀 여기
              저기에서 찾는 사람이 많은 편입니다.
            </Result2>
            <Result3>
              표현력이 풍부한 만큼 자칫 지나치게 감성적으로 보일 수 있습니다.
              <br />
              또한 가끔씩 조건이 맞지 않으면 팀 내의 분위기를 흐려 놓을 수
              있습니다.
            </Result3>
          </CardWrapper>

          <Result4
            link="/"
            kind="소리"
            buttonColor="linear-gradient(to right, #f0b6f3, #eb76f1)"
            hoverColor="linear-gradient(to right, #f1abf6, #e655ed)"
            suitPlace="댜양한 사람들이 모여 노는 축제"
            SuitFriend="마림바, 팀파니"
            next="색깔"
          />
        </Background>
      )}
    </>
  );
};

export default Violin;
