var best = localStorage.getItem("bestPlace");



//헤더 밑에 타이틀 부분 텍스트 바꿔주기
window.onload = function() {
  var str;
  if(best ==1)
  {
    str = '산책하기 좋은 공원 베스트 10곳';
  } else if(best == 2){
    str = '부담없이 가기 좋은 미술관 베스트 5곳';
  } else if(best == 3){
    str = '만화방&북카페 베스트 6곳';
  } else if(best == 4){
    str ='혼밥의 정석, 일식 베스트 7곳';
  } else if(best == 5){
    str = '안주가 맛있는 술집 베스트 7곳';
  } else if(best == 6){
    str = '분위기 좋은 카페 베스트 10곳';
  }
  document.getElementById("title").innerHTML = str;
}

// 해당 카테고리에 맞는 장소 코드를 information.html에서 뿌려주기 위해 storage에 저장하는 함수
function setValue(num){
  if(best ==1){
    //공원
    if(num==1){
      localStorage.setItem("explain", "613"); //한빛수목원
    }
    else if(num==2){
      localStorage.setItem("explain", "1314"); //금강로하스공원
    }
    else if(num==3){
      localStorage.setItem("explain", "2114"); // 엑스포과학공원
    }
    else if(num==4){
      localStorage.setItem("explain", "1212"); //유림공원
    }
    else if(num==5){
      localStorage.setItem("explain", "1912"); // 우암사적공원
    }
    else if(num==6){
      localStorage.setItem("explain", "712"); //남선공원
    }
    else if(num==7){
      localStorage.setItem("explain", "215"); //월평공원
    }
    else if(num==8){
      localStorage.setItem("explain", "2115"); //대동하늘공원
    }
    else if(num==9){
      localStorage.setItem("explain", "212"); //유성온천공원
    }
    else if(num==10){
      localStorage.setItem("explain", "412"); //갈마공원
    }
  }
  else if(best == 2){
    //미술관
    if(num==1){
      localStorage.setItem("explain", "513"); //대전시립미술관
    }
    else if(num==2){
      localStorage.setItem("explain", "1813"); //이응노미술관
    }
    else if(num==3){
      localStorage.setItem("explain", "2011"); //성암미술관
    }
    else if(num==4){
      localStorage.setItem("explain", "2311"); //대전 지질 박물관
    }
    else if(num==5){
      localStorage.setItem("explain", "2413"); //옛터민속박물관
    }
  }
  else if(best == 3){
    //북카페와 만화방
    if(num==1){
      localStorage.setItem("explain", "614"); //놀숲
    }
    else if(num==2){
      localStorage.setItem("explain", "312"); //삼층다락방
    }
    else if(num==3){
      localStorage.setItem("explain", "2215"); // 감성만화싸롱
    }
    else if(num==4){
      localStorage.setItem("explain", "2113"); // 벌툰
    }
    else if(num==5){
      localStorage.setItem("explain", "1211"); // 북적북적
    }
  }
  else if(best == 4){
    //일식
    if(num==1){
      localStorage.setItem("explain", "423"); //ato
    }
    else if(num==2){
      localStorage.setItem("explain", "2421"); // 스바라시라멘
    }
    else if(num==3){
      localStorage.setItem("explain", "1326"); //별리달리
    }
    else if(num==4){
      localStorage.setItem("explain", "1822"); //동백카츠
    }
    else if(num==5){
      localStorage.setItem("explain", "2021"); //킨토토
    }
    else if(num==6){
      localStorage.setItem("explain", "722"); //로얄라멘
    }
    else if(num==7){
      localStorage.setItem("explain", "1922"); //유우란
    }
  }
  else if(best == 5){
    //혼술
    if(num==1){
      localStorage.setItem("explain", "611"); //텐시
    }
    else if(num==2){
      localStorage.setItem("explain", "1615"); //묘월
    }
    else if(num==3){
      localStorage.setItem("explain", "1312"); //오호리준
    }
    else if(num==4){
      localStorage.setItem("explain", "511"); //어화
    }
    else if(num==5){
      localStorage.setItem("explain", "715"); //청담이상
    }
    else if(num==6){
      localStorage.setItem("explain", "2211"); //아카리
    }
    else if(num==7){
      localStorage.setItem("explain", "2212"); //하이보루
    }
  }
  else if(best == 6){
    //카페
    if(num==1){
      localStorage.setItem("explain", "635"); //에이트
    }
    else if(num==2){
      localStorage.setItem("explain", "1334"); //소신
    }
    else if(num==3){
      localStorage.setItem("explain", "1231"); //델빠네
    }
    else if(num==4){
      localStorage.setItem("explain", "1635"); //하치
    }
    else if(num==5){
      localStorage.setItem("explain", "1933"); //태양
    }
    else if(num==6){
      localStorage.setItem("explain", "1433"); //카페블로그
    }
    else if(num==7){
      localStorage.setItem("explain", "1832"); //공간태리
    }
    else if(num==8){
      localStorage.setItem("explain", "531"); //하프커피
    }
    else if(num==9){
      localStorage.setItem("explain", "331"); //여기소제
    }
    else if(num==10){
      localStorage.setItem("explain", "2131"); //삼삼카페
    }
  }

  // 객체로 구현하려 했으나 실패..
// /// best ==1
//   function Park(name, filePath, score){
//     this.name = name;
//     this.filePath = filePath;
//     this.score = score;
//   }
//   var park = [];
//   let park1 = new Park('한빛수목원' , "srcPicture/bestPark/한빛.jpg", 4.8);
//   let park2 = new Park('금강로하스공원',"srcPicture/bestPark/금강로하스.jpg", 4.6);
//   let park3 = new Park('엑스포과학공원',"srcPicture/bestPark/엑스포.jpg", 4.4);
//   let park4 = new Park('유림공원',"srcPicture/bestPark/유림공원.jpg", 4.2);
//   let park5 = new Park('우암사적공원',"srcPicture/bestPark/우암사적.jpg",4.0);
//   let park6 = new Park('남선공원',"srcPicture/bestPark/남선.jpg", 3.9);
//   let park7 = new Park('월평공원',"srcPicture/bestPark/월평.jpg",3.7);
//   let park8 = new Park('대동하늘공원',"srcPicture/bestPark/대동.jpg", 3.5);
//   let park9 = new Park('유성온천공원', "srcPicture/bestPark/유성온천공원.jpg", 3.3);
//   let park10 = new Park('갈마공원', "srcPicture/bestPark/갈마공원.jpg", 3.1);
//   park.push(park1);
//   park.push(park2);
//   park.push(park3);
//   park.push(park4);
//   park.push(park5);
//   park.push(park6);
//   park.push(park7);
//   park.push(park8);
//   park.push(park9);
//   park.push(park10);
//   sortPark = park.sort(function(a,b) {
//     return a.score - b.score;
//   });
//   for (var i = 0; i < sortPark.length; i++) {
//     document.getElementsByClassName('bestPlaceName')[i].innerHTML = sortPark[i].name;
//     document.getElementsByClassName('bestPlaceName')[i].setAttribute('src' , "sortPark[i].filePath");
//
//
//   }



};
