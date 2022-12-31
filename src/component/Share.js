const url = "https://personal-onlyfe.pages.dev/";

const SetShare = () => {
  const shareTitle = "Personal";
  const shareDes = "지극히 개인적인, 나만의 감각을 찾아보세요";
  const shareImage =
    "https://inha-hackathon-personal-fe-2yi.pages.dev/logo.JPG";
  const shareURL = url;

  const Kakao = window.Kakao;
  if (!Kakao.isInitialized()) {
    Kakao.init(process.env.REACT_APP_KAKAO_KEY);
  }
  Kakao.Link.sendDefault({
    objectType: "feed",
    content: {
      title: shareTitle,
      description: shareDes,
      imageUrl: shareImage,
      link: {
        mobileWebUrl: shareURL,
        webUrl: shareURL,
      },
    },
    buttons: [
      {
        title: "검사하러 가기",
        link: {
          mobileWebUrl: shareURL,
          webUrl: shareURL,
        },
      },
    ],
  });
};

export default SetShare;
