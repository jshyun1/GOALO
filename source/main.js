// 외부가 전체적으로 이미지 슬라이드가 되게 해주는 거면 사용자가 좌우 혹은 image를 선택했을 때 옵션을 정해 돌아가게 작동
// 참고 : https://eomcheon.tistory.com/90
  $(document).ready(function() {
    $("#content-slider").lightSlider({
      loop: true,
      keyPress: true
    });
    $('#image-gallery').lightSlider({
      gallery: true,
      item: 1,
      thumbItem: 9,
      slideMargin: 0,
      speed: 500,
      auto: true,
      loop: true,
      onSliderLoad: function() {
        $('#image-gallery').removeClass('cS-hidden');
      }
    });
  });


    // 베스트 페이지로 넘어갈 때 코드를 저장하고, 산책하기 좋은 공원 베스트10이면 별점 읽기 함수 실행
    function sendBestPlace(num) {
      localStorage.clear();
      localStorage.setItem("bestPlace", num);
    }
