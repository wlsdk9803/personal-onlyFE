import React, { Component } from "react";
import "./SharemyInfo.css";

class SharemyInfo extends Component {
  render() {
    return (
      <>
        <ul>
          <li id="sns">
            <a href="https://www.naver.com/" title="message" />
          </li>

          <li id="sns">
            <a href="https://www.naver.com/" title="kakao" />
          </li>
        </ul>
      </>
    );
  }
}

export default SharemyInfo;
