const url = 'https://catbutlertest.netlify.app/';

function setShare() {
  var resultImg = document.querySelector('#resultImg');
  var resultAlt = resultImg.firstElementChild.alt;
  const shareTitle = '집사 자격 테스트 결과'
  const shareDesc = infoList[resultAlt].name;
  const shareImage = url + 'img/image-' + resultAlt + '.jpg';
  const shareURL = url + 'page/result-' + resultAlt + '.html';

  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: shareTitle,
      description: shareDesc,
      imageUrl: shareImage,
      link: {
        mobileWebUrl: shareURL,
        webUrl: shareURL,
      },
    },

    buttons: [{
        title: '결과 확인하기',
        link: {
          mobileWebUrl: shareURL,
          webUrl: shareURL,
        },
      },
    ]
  });
}
