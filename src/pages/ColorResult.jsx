import React from "react";
import Gaonuri from "./ColorResult/Gaonuri";
import Dubitnarae from "./ColorResult/Dubitnarae";
import FlowerCloud from "./ColorResult/FlowerCloud";
import Gaongil from "./ColorResult/Gaongil";
import Heyum from "./ColorResult/Heyum";
import Laonjena from "./ColorResult/Laonjena";
import Mirr from "./ColorResult/Mirr";
import Onsaemiro from "./ColorResult/Onsaemiro";
import { useLocation } from "react-router-dom";

const ColorResult = () => {
  let resultNumber = 9;
  const location = useLocation();
  console.log(location);

  let colorRed = location.state.CQ1 + location.state.CQ2;
  let colorGreen = location.state.CQ3 + location.state.CQ4;
  let colorBlue = location.state.CQ5 + location.state.CQ6;

  if (colorRed >= 6 && colorGreen < 6 && colorBlue < 6) {
    resultNumber = 4;
  } else if (colorRed >= 6 && colorGreen >= 6 && colorBlue < 6) {
    resultNumber = 6;
  } else if (colorRed >= 6 && colorGreen < 6 && colorBlue >= 6) {
    resultNumber = 1;
  } else if (colorRed < 6 && colorGreen < 6 && colorBlue >= 6) {
    resultNumber = 5;
  } else if (colorRed < 6 && colorGreen >= 6 && colorBlue >= 6) {
    resultNumber = 7;
  } else if (colorRed < 6 && colorGreen >= 6 && colorBlue < 6) {
    resultNumber = 8;
  } else if (colorRed >= 6 && colorGreen >= 6 && colorBlue >= 6) {
    resultNumber = 2;
  } else if (colorRed < 6 && colorGreen < 6 && colorBlue < 6) {
    resultNumber = 3;
  }

  if (resultNumber === 9) return;
  switch (resultNumber) {
    case 1:
      return (
        <>
          <Dubitnarae />
        </>
      );
    case 2:
      return (
        <>
          <FlowerCloud />
        </>
      );
    case 3:
      return (
        <>
          <Gaongil />
        </>
      );
    case 4:
      return (
        <>
          <Gaonuri />
        </>
      );
    case 5:
      return (
        <>
          <Heyum />
        </>
      );
    case 6:
      return (
        <>
          <Laonjena />
        </>
      );
    case 7:
      return (
        <>
          <Mirr />
        </>
      );
    case 8:
      return (
        <>
          <Onsaemiro />
        </>
      );
    default:
      break;
  }
};

export default ColorResult;
