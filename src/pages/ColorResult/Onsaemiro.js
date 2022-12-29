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

const Onsaemiro = () => {
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
          <Background height="1370px" top="0" translate="translate(-50%, 0)">
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
              colorName="온새미로"
              shortExplain="자연 그대로, 변함없이"
              colorMean="'평화와 인내의 상징'"
              image="https://i.postimg.cc/ydfzMb5D/image.jpg"
              contentHeight="135px"
            >
              자연의 푸르름과 온화함을 담은 '온새미로'는
              <br />
              타인에게 편안함을 선사하며 인내심과 성실함을 돋보이게 합니다.
            </ColorResult1>

            <CardWrapper height="270px" padding="15px 0 0 0">
              <Result2>
                당신은 온화하고 마음이 상냥하여 솔직한 면을 가지고 있습니다.
                특히나 조화로운 삶을 선호하여 어디에서든지 잘 들어주는
                사람입니다. 평소 성실한 모습으로 주변 사람들에게 존경을
                받습니다.
              </Result2>
              <Result3>
                주위 사람들에게 맞추려고 하는 성향이 있습니다. 조금은 스스로
                아껴주는 노력도 필요합니다.
              </Result3>
            </CardWrapper>

            <Result4
              link="/musicMain"
              kind="색"
              buttonColor="linear-gradient(to right, #fedf56, #ffd000)"
              suitPlace="수년동안 자리를 지키는 고궁"
              SuitFriend="굳건한 가온길"
              next="소리"
            />
          </Background>
        </motion.div>
      )}
    </>
  );
};

export default Onsaemiro;
