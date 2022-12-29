import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Background, TextBox, Wrapper } from "../component/Styled";
import { Navigate } from "react-router";
import { motion } from "framer-motion";
import { animate } from "../component/Styled/animate";

const line1Short = keyframes`
  0% { 
      margin: -340px 0 0 173px;
  }
  100% {
    margin: -325px 0 0 173px;
  }
`;
const line1Long = keyframes`
  0% { 
    margin: -305px 0 0 173px;
  }
  100% {
    margin: -290px 0 0 173px;
  }
`;
const line2 = keyframes`
  0% { 
    margin:-355px 0 0 183px;
  }
  100% {
    margin:-310px 0 0 183px;
  }
`;
const line3 = keyframes`
  0% { 
    margin:-365px 0 0 193px;
  }
  100% {
    margin:-295px 0 0 193px;
  }
`;

const circle1fadein = keyframes`
0% { 
    opacity: 0;
}
25% { 
    opacity: 0;
}
50% {
    opacity: 1;
}
`;
const circle2fadein = keyframes`
0% { 
    opacity: 0;
}
50% {
    opacity: 0;
}
70% {
    opacity: 1;
}
`;
const circle3fadein = keyframes`
0% { 
    opacity: 0;
}
70% { 
    opacity: 0;
}
85% {
    opacity: 1;
}
`;
const Line1Short = styled.div`
  width: 0;
  height: ${(props) => props.height || "90px"};
  margin: ${(props) => props.margin || "0"};
  float: center;
  border: solid 1.2px;
  background-color: black;
  position: absolute;
  animation: ${line1Short} 2s 0s linear alternate;
`;
const Line1Long = styled.div`
  width: 0;
  height: ${(props) => props.height || "90px"};
  margin: ${(props) => props.margin || "0"};
  float: center;
  border: solid 1.2px;
  background-color: black;
  position: absolute;
  animation: ${line1Long} 2s 0s linear alternate;
`;
const Line2 = styled.div`
  width: 0;
  height: ${(props) => props.height || "90px"};
  margin: ${(props) => props.margin || "0"};
  float: center;
  border: solid 1.2px;
  background-color: black;
  position: absolute;
  animation: ${line2} 3s 0s linear alternate;
`;
const Line3 = styled.div`
  width: 0;
  height: ${(props) => props.height || "90px"};
  margin: ${(props) => props.margin || "0"};
  float: center;
  border: solid 1.2px;
  background-color: black;
  position: absolute;
  animation: ${line3} 4s 0s linear alternate;
`;

const Circle1 = styled.div`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  padding: ${(props) => props.padding || "0"};
  border-radius: 50%;
  border-color: ${(props) => props.color || "black"};
  border: solid 1.2px;
  transform: ${(props) => props.translate};
  float: center;
  animation: ${circle1fadein} 3s 0s linear alternate;
`;
const Circle2 = styled.div`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  padding: ${(props) => props.padding || "0"};
  border-radius: 50%;
  border-color: ${(props) => props.color || "black"};
  border: solid 1.2px;
  transform: ${(props) => props.translate};
  float: center;
  animation: ${circle2fadein} 3.5s 0s linear alternate;
`;
const Circle3 = styled.div`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  padding: ${(props) => props.padding || "0"};
  border-radius: 50%;
  border-color: ${(props) => props.color || "black"};
  border: solid 1.2px;
  transform: ${(props) => props.translate};
  float: center;
  animation: ${circle3fadein} 4.5s 0s linear alternate;
`;

const Messagebox = styled.div`
  width: 272px;
  height: 140px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -10%);
  border-radius: 5px;
  border: none;
  box-shadow: 0 5px 5px rgb(170, 170, 170);
  background-color: #fefefe;
`;
const MusicLoading = (props) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4510);
  }, [loading]);
  return (
    <>
      {loading === true ? (
        <motion.div
          initial={animate.initial2}
          animate={animate.animate2}
          exit={animate.exit2}
        >
          <Wrapper>
            <Background textAlign="center">
              <Circle1 size="110px" translate="translate(95%, 100%)" />
              <Circle2 size="130px" translate="translate(73%, -8%)" />
              <Circle3 size="150px" translate="translate(57%, -100%)" />
              <Line1Short height="24px" margin="-325px 0 0 173px" />
              <Line1Long height="56px" margin="-290px 0 0 173px" />
              <Line2 margin="-310px 0 0 183px" />
              <Line3 margin="-295px 0 0 193px" />
              <Messagebox>
                <TextBox
                  color="#363636"
                  fontWeight="700"
                  fontSize="14px"
                  padding="25px 0 0 15px"
                  lineHeight="2.0"
                >
                  {props.name1}
                  <br />
                  {props.name2}
                  <br />
                  {props.name3}
                </TextBox>
              </Messagebox>
            </Background>
          </Wrapper>
        </motion.div>
      ) : (
        <Navigate to={props.link} />
      )}
    </>
  );
};

export default MusicLoading;
