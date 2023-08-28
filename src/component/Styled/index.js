import styled from "styled-components";

export const Button = styled.button`
  font-family: "Pretendard";
  cursor: ${(props) => props.cursor || "pointer"};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius || "90px"};
  border: ${(props) => props.border || "none"};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight || "normal"};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
  background: ${(props) => props.backgroundColor || "white"};
  color: ${(props) => props.color || "black"};
  float: ${(props) => props.float || "none"};
  box-shadow: ${(props) => props.boxShadow || "none"};
  width: ${(props) => props.width};
  &:hover {
    background: ${(props) => props.hoverBackgroundColor};
  }
`;
export const ButtonWrapper = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
`;

export const TextBox = styled.div`
  font-family: "Pretendard";
  color: ${(props) => props.color || "black"};
  font-weight: ${(props) => props.fontWeight || "normal"};
  font-size: ${(props) => props.fontSize || "10px"};
  float: ${(props) => props.float || "none"};
  padding: ${(props) => props.padding || "0"};
  line-height: ${(props) => props.lineHeight || "normal"};
  cursor: ${(props) => props.cursor || "auto"};
`;

export const Background = styled.div`
  background: #f5f5f5;
  border: none;
  position: absolute;
  width: 320px;
  max-width: 320px;
  height: ${(props) => props.height || "568px"};
  left: 50%;
  top: ${(props) => props.top || "50%"};
  transform: ${(props) => props.translate || "translate(-50%, -50%)"};
`;

export const Circle = styled.div`
  background: ${(props) => props.background};
  background-size: ${(props) => props.backgroundSize || "100% 100%"};
  border: ${(props) => props.border || "1px solid #D9D9D9"};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 50%;
  box-shadow: ${(props) => props.boxShadow || "none"};
`;

export const CardWrapper = styled.div`
  width: 100%;
  height: ${(props) => props.height};
  padding: ${(props) => props.padding || "0"};
  border-radius: 8px;
  margin-bottom: 10px;
  background-color: white;
  border: none;
`;

export const ColorImage = styled.div`
  width: 147px;
  height: 147px;
  border-radius: 50%;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  left: 50%;
  transform: translate(50%, 0);
  margin: 10px;
  overflow: hidden;
`;
export const MusicImage = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  overflow: hidden;
`;
export const NoteImage = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-image: url(${(props) => props.backgroundImage});
`;
export const SnsImage = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  float: left;
  margin: ${(props) => props.margin || "0"};
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  cursor: pointer;
  border: none;
`;

export const ShareInfoWrapper = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  justify-content: center;
  margin-top: 80px;
  flex-wrap: nowrap;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
