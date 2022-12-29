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

const Marimba = () => {
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
        <Background height="1490px" top="0px" translate="translate(-50%, 0)">
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
          <audio src="마림바.mp3" autoplay controls />

          <MusicResult1
            musicName="마림바"
            shortExplain="귀에 꽂히는 귀여움"
            musicMean="'동글동글하면서 탄성있는 소리'"
            image="마림바.png"
            contentHeight="220px"
          >
            애플의 알림음으로 가장 유명할 마림바 소리는
            <br />
            실로폰 밑에 여러 개의 관들이 연결되어 있는 타악기입니다.
            <br />
            개성이 넘치는 음색 때문에 합주보다는 독주나 협주곡에 가장 많이
            등장하고, 또 광고나 앱 등 사람들의 이목을 사로잡아야 하는 곳에서
            자주 찾아들을 수 있습니다.
          </MusicResult1>

          <CardWrapper height="310px" padding="15px 0 0 0">
            <Result2>
              맑고 둥글한 성격으로 사람들과 쉽게 친해지며 재미있는 분위기를 잘
              만들어갑니다.
              <br />
              좋고 싫음이 분명하고 솔직하여 때에 따라 친근함과 냉정함을 적절히
              구분할 수 있습니다.
            </Result2>
            <Result3>
              가끔씩 수다가 많고, 진지함이 부족해보이는 모습을 보여주기도
              합니다.
              <br />
              또한 책임감이 막중한 일을 어려워하는 경향이 있어, 조직적인
              업무에는 잘 맞지 않을 수 있습니다.
            </Result3>
          </CardWrapper>

          <Result4
            link="/"
            kind="소리"
            buttonColor="linear-gradient(to right, #f0b6f3, #eb76f1)"
            suitPlace="아기자기한 골목 안의 카페"
            SuitFriend="바이올린, 바순"
            next="색깔"
          />
        </Background>
      )}
    </>
  );
};

export default Marimba;
