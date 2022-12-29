import React from "react";
import Violin from "./MusicResult/Violin";
import Piano from "./MusicResult/Piano";
import Bassoon from "./MusicResult/Bassoon";
import Cello from "./MusicResult/Cello";
import Marimba from "./MusicResult/Marimba";
import Oboe from "./MusicResult/Oboe";
import Organ from "./MusicResult/Organ";
import Timpani from "./MusicResult/Timpani";
import { useLocation } from "react-router-dom";

const MusicResult = () => {
  let resultNumber = 9;
  const location = useLocation();
  console.log(location);

  let musicRed = location.state.MQ1 + location.state.MQ2;
  let musicGreen = location.state.MQ3 + location.state.MQ4;
  let musicBlue = location.state.MQ5 + location.state.MQ6;

  if (musicRed < 6 && musicGreen < 6 && musicBlue < 6) {
    resultNumber = 1;
  } else if (musicRed < 6 && musicGreen < 6 && musicBlue >= 6) {
    resultNumber = 6;
  } else if (musicRed < 6 && musicGreen >= 6 && musicBlue < 6) {
    resultNumber = 5;
  } else if (musicRed < 6 && musicGreen >= 6 && musicBlue >= 6) {
    resultNumber = 2;
  } else if (musicRed >= 6 && musicGreen < 6 && musicBlue < 6) {
    resultNumber = 3;
  } else if (musicRed >= 6 && musicGreen < 6 && musicBlue >= 6) {
    resultNumber = 8;
  } else if (musicRed >= 6 && musicGreen >= 6 && musicBlue < 6) {
    resultNumber = 7;
  } else if (musicRed >= 6 && musicGreen >= 6 && musicBlue >= 6) {
    resultNumber = 4;
  }

  if (resultNumber === 9) return;
  switch (resultNumber) {
    case 1:
      return (
        <>
          <Bassoon />
        </>
      );
    case 2:
      return (
        <>
          <Cello />
        </>
      );
    case 3:
      return (
        <>
          <Marimba />
        </>
      );
    case 4:
      return (
        <>
          <Oboe />
        </>
      );
    case 5:
      return (
        <>
          <Organ />
        </>
      );
    case 6:
      return (
        <>
          <Piano />
        </>
      );
    case 7:
      return (
        <>
          <Timpani />
        </>
      );
    case 8:
      return (
        <>
          <Violin />
        </>
      );
    default:
      break;
  }
};

export default MusicResult;
