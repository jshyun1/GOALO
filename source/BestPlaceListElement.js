$(document).ready(function() {

  // 산책하기 좋은 공원일때
  if (best == 1) {
    $('#bestPlaceImg1').attr('src', "srcPicture/bestPark/한빛.jpg");
    $('#bestPlaceImg2').attr('src', "srcPicture/bestPark/금강로하스.jpg");
    $('#bestPlaceImg3').attr('src', "srcPicture/bestPark/엑스포.jpg");
    $('#bestPlaceImg4').attr('src', "srcPicture/bestPark/유림공원.jpg");
    $('#bestPlaceImg5').attr('src', "srcPicture/bestPark/우암사적.jpg");
    $('#bestPlaceImg6').attr('src', "srcPicture/bestPark/남선.jpg");
    $('#bestPlaceImg7').attr('src', "srcPicture/bestPark/월평.jpg");
    $('#bestPlaceImg8').attr('src', "srcPicture/bestPark/대동.jpg");
    $('#bestPlaceImg9').attr('src', "srcPicture/bestPark/유성온천공원.jpg");
    $('#bestPlaceImg10').attr('src', "srcPicture/bestPark/갈마공원.jpg");
            $('#bestPlaceName1').text('한빛수목원');
            $('#bestPlaceName2').text('금강로하스공원');
            $('#bestPlaceName3').text('엑스포과학공원');
            $('#bestPlaceName4').text('유림공원');
            $('#bestPlaceName5').text('우암사적공원');
            $('#bestPlaceName6').text('남선공원');
            $('#bestPlaceName7').text('월평공원');
            $('#bestPlaceName8').text('대동하늘공원');
            $('#bestPlaceName9').text('유성온천공원');
            $('#bestPlaceName10').text('갈마공원');
  }
// 미술관 베스트 5곳
  else if (best == 2) {
    $('#bestPlaceImg1').attr('src', "srcPicture/bestMuseum/대전시립.jpg");
    $('#bestPlaceImg2').attr('src', "srcPicture/bestMuseum/이응노.jpg");
    $('#bestPlaceImg3').attr('src', "srcPicture/bestMuseum/성암.jpg");
    $('#bestPlaceImg4').attr('src', "srcPicture/bestMuseum/기감.jpg");
    $('#bestPlaceImg5').attr('src', "srcPicture/bestMuseum/옛터민속박물관.jpg");

    $('#bestPlaceImg6').css('display', 'none');
    $('#bestPlaceImg7').css('display', 'none');
    $('#bestPlaceImg8').css('display', 'none');
    $('#bestPlaceImg9').css('display', 'none');
    $('#bestPlaceImg10').css('display', 'none');
    $('#bestPlaceName1').text('대전시립미술관');
  $('#bestPlaceName2').text('이응노미술관');
  $('#bestPlaceName3').text('성암미술관');
  $('#bestPlaceName4').text('대전 지질 박물관');
  $('#bestPlaceName5').text('옛터민속박물관');
    // 별 모양 안보이게 하기
    $('#starImg6').css('display', 'none');
    $('#starImg7').css('display', 'none');
    $('#starImg8').css('display', 'none');
    $('#starImg9').css('display', 'none');
    $('#starImg10').css('display', 'none');
    //숫자 안 뜨게 하기
    $('#rank6').css('display', 'none');
    $('#rank7').css('display', 'none');
    $('#rank8').css('display', 'none');
    $('#rank9').css('display', 'none');
    $('#rank10').css('display', 'none');
    //별점
    $('#1').text('4.6');
    $('#2').text('4.3');
    $('#3').text('4.2');
    $('#4').text('4.1');
    $('#5').text('4.0');
    $('#6').css('display', 'none');
    $('#7').css('display', 'none');
    $('#8').css('display', 'none');
    $('#9').css('display', 'none');
    $('#10').css('display', 'none');


  } else if (best == 3) {

    // 만화방 & 북카페 베스트 5곳
    $('#bestPlaceImg1').attr('src', "srcPicture/bestBook/놀숲.jpg");
    $('#bestPlaceImg2').attr('src', "srcPicture/bestBook/삼층다락방.jpg");
    $('#bestPlaceImg3').attr('src', "srcPicture/bestBook/감성.jpg");
    $('#bestPlaceImg4').attr('src', "srcPicture/bestBook/벌툰.jpg");
    $('#bestPlaceImg5').attr('src', "srcPicture/bestBook/북적.jpg");

    $('#bestPlaceImg6').css('display', 'none');
    $('#bestPlaceImg7').css('display', 'none');
    $('#bestPlaceImg8').css('display', 'none');
    $('#bestPlaceImg9').css('display', 'none');
    $('#bestPlaceImg10').css('display', 'none');
    $('#bestPlaceName1').text('놀숲');
      $('#bestPlaceName2').text('삼층다락방');
      $('#bestPlaceName3').text('감성만화싸롱');
      $('#bestPlaceName4').text('벌툰');
      $('#bestPlaceName5').text('북적북적');

    // 별 모양 안보이게 하기
    $('#starImg6').css('display', 'none');
    $('#starImg7').css('display', 'none');
    $('#starImg8').css('display', 'none');
    $('#starImg9').css('display', 'none');
    $('#starImg10').css('display', 'none');

    //숫자 안 뜨게 하기
    $('#rank6').css('display', 'none');
    $('#rank7').css('display', 'none');
    $('#rank8').css('display', 'none');
    $('#rank9').css('display', 'none');
    $('#rank10').css('display', 'none');

    //별점
    $('#1').text('4.6');
    $('#2').text('4.3');
    $('#3').text('4.2');
    $('#4').text('4.1');
    $('#5').text('4.0');
    $('#6').css('display', 'none');
    $('#7').css('display', 'none');
    $('#8').css('display', 'none');
    $('#9').css('display', 'none');
    $('#10').css('display', 'none');
  } else if (best == 4) {
    // 일식 베스트 7곳

    $('#bestPlaceImg1').attr('src', "srcPicture/bestJapan/Ato.jpg");
    $('#bestPlaceImg2').attr('src', "srcPicture/bestJapan/스바라시라멘.jpg");
    $('#bestPlaceImg3').attr('src', "srcPicture/bestJapan/별리달리.jpg");
    $('#bestPlaceImg4').attr('src', "srcPicture/bestJapan/동백카츠.jpg");
    $('#bestPlaceImg5').attr('src', "srcPicture/bestJapan/킨토토.jpg");
    $('#bestPlaceImg6').attr('src', "srcPicture/bestJapan/로얄라멘.jpg");
    $('#bestPlaceImg7').attr('src', "srcPicture/bestJapan/요우란.jpg");
    $('#bestPlaceImg8').css('display', 'none');
    $('#bestPlaceImg9').css('display', 'none');
    $('#bestPlaceImg10').css('display', 'none');
    $('#bestPlaceName1').text('Ato');
      $('#bestPlaceName2').text('스바라시라멘');
      $('#bestPlaceName3').text('별리달리');
      $('#bestPlaceName4').text('동백카츠');
      $('#bestPlaceName5').text('킨토토');
      $('#bestPlaceName6').text('로얄라멘');
      $('#bestPlaceName7').text('요우란');

    // 별 모양 안보이게 하기
    $('#starImg8').css('display', 'none');
    $('#starImg9').css('display', 'none');
    $('#starImg10').css('display', 'none');

    //숫자 안 뜨게 하기
    $('#rank8').css('display', 'none');
    $('#rank9').css('display', 'none');
    $('#rank10').css('display', 'none');

    //별점
    $('#1').text('4.6');
    $('#2').text('4.3');
    $('#3').text('4.2');
    $('#4').text('4.1');
    $('#5').text('4.0');
    $('#6').text('3.8');
    $('#7').text('3.0');
    $('#8').css('display', 'none');
    $('#9').css('display', 'none');
    $('#10').css('display', 'none');
  } else if (best == 5) {

    // 술집 베스트 7곳

    $('#bestPlaceImg1').attr('src', "srcPicture/bestBeer/텐시.jpg");
    $('#bestPlaceImg2').attr('src', "srcPicture/bestBeer/묘월.jpg");
    $('#bestPlaceImg3').attr('src', "srcPicture/bestBeer/오호리준.jpg");
    $('#bestPlaceImg4').attr('src', "srcPicture/bestBeer/어화.jpg");
    $('#bestPlaceImg5').attr('src', "srcPicture/bestBeer/청담이상.jpg");
    $('#bestPlaceImg6').attr('src', "srcPicture/bestBeer/아카리.jpg");
    $('#bestPlaceImg7').attr('src', "srcPicture/bestBeer/하이보루.jpg");


    $('#bestPlaceImg8').css('display', 'none');
    $('#bestPlaceImg9').css('display', 'none');
    $('#bestPlaceImg10').css('display', 'none');
    $('#bestPlaceName1').text('텐시');
    $('#bestPlaceName2').text('묘월');
    $('#bestPlaceName3').text('오호리준');
    $('#bestPlaceName4').text('어화');
    $('#bestPlaceName5').text('청담이상');
    $('#bestPlaceName6').text('아카리');
    $('#bestPlaceName7').text('하이보루');

    // 별 모양 안보이게 하기
    $('#starImg8').css('display', 'none');
    $('#starImg9').css('display', 'none');
    $('#starImg10').css('display', 'none');

    //숫자 안 뜨게 하기
    $('#rank8').css('display', 'none');
    $('#rank9').css('display', 'none');
    $('#rank10').css('display', 'none');
    //별점
    $('#1').text('4.6');
    $('#2').text('4.3');
    $('#3').text('4.2');
    $('#4').text('4.1');
    $('#5').text('4.0');
    $('#6').text('3.8');
    $('#7').text('3.0');
    $('#8').css('display', 'none');
    $('#9').css('display', 'none');
    $('#10').css('display', 'none');
  } else if (best == 6) {
    // 카페 베스트 10곳
    $('#bestPlaceImg1').attr('src', "srcPicture/bestCafe/에이트.jpg");
    $('#bestPlaceImg2').attr('src', "srcPicture/bestCafe/소신.jpg");
    $('#bestPlaceImg3').attr('src', "srcPicture/bestCafe/델파네.jpg");
    $('#bestPlaceImg4').attr('src', "srcPicture/bestCafe/하치.jpg");
    $('#bestPlaceImg5').attr('src', "srcPicture/bestCafe/태양.jpg");
    $('#bestPlaceImg6').attr('src', "srcPicture/bestCafe/공간태리.jpg");
    $('#bestPlaceImg7').attr('src', "srcPicture/bestCafe/하프.jpg");
    $('#bestPlaceImg8').attr('src', "srcPicture/bestCafe/여기소제.jpg");
    $('#bestPlaceImg9').attr('src', "srcPicture/bestCafe/오슬로.jpg");
    $('#bestPlaceImg10').attr('src', "srcPicture/bestCafe/삼삼.jpg");

    //이름 뿌리기
    $('#bestPlaceName1').text('에이트');
    $('#bestPlaceName2').text('소신');
    $('#bestPlaceName3').text('델 빠네');
    $('#bestPlaceName4').text('하치카페');
    $('#bestPlaceName5').text('태양커피');
    $('#bestPlaceName6').text('공간태리');
    $('#bestPlaceName7').text('하프커피');
    $('#bestPlaceName8').text('여기소제');
    $('#bestPlaceName9').text('오슬로의 시간');
    $('#bestPlaceName10').text('삼삼카페');
    //별점
    $('#1').text('4.6');
    $('#2').text('4.3');
    $('#3').text('4.2');
    $('#4').text('4.1');
    $('#5').text('4.0');
    $('#6').text('3.8');
    $('#7').text('3.0');
    $('#8').text('3.0');
    $('#9').text('3.0');
    $('#10').text('3.0');
  }
});
