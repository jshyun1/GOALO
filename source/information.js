var temtOpen = window.open("store.html", "data", "option");
setTimeout('temtOpen.close()', 1000);

  $(document).ready(function() {
    var FILE_KEY = "data.json";
    var retrievedObject = localStorage.getItem(FILE_KEY);
    console.log('retrievedObject: ', JSON.parse(retrievedObject));
    var DataJSON = JSON.parse(retrievedObject);
    var html = "";
    var image = "";
    //해당 가게마다 코드를 정해놓은걸 storage에서 뽑아오기
    var storeId = localStorage.getItem("explain");
    storeId *= 1; //var 형식인 storeId 변수 숫자로 변환
    var id = storeId;
    $.each(DataJSON, function(index, entry) {
      if (id != entry.id)
        return true;
//json 내 정보를 불러와 데이터를 뿌린다.
      html += '<h2 class="stname">';
      html += entry.name;
      html += '</h2>';
      html += '<table class="information">';
      html += '<tr class="WH">';
      html += '<th class="th_style">위치</th>';
      html += '<td class="td_style">';
      html += entry.address;
      html += '</td></tr>';
      html += '<tr class="PN">';
      html += '<th class="th_style">전화번호</th>';
      html += '<td class="td_style">';
      html += entry.phone;
      html += '</td></tr>';
      html += '<tr class="OT">';
      html += '<th class="th_style">영업시간</th>';
      html += '<td class="td_style">';
      html += entry.runTime;
      html += '</td></tr>';
      html += '<tr class="MENU">';
      html += '<th class="th_style">가격정보</th>';
      html += '<td class="td_style">';
      html += entry.menu;
      html += '</td>';
      html += '</tr></table>';

      $.each(entry.imageURL, function(index, ele) {
        image += '<img src=';
        image += ele;
        image += ' width="20%" height="295px"  />';
      });

// 지도 불러오고 json text 내에 있는 위도,경도 불러와 지도에 마커 넣기
      initMap = function() {
        var myLatLng = {
          lat: entry.lat,
          lng: entry.lng
        };

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: myLatLng
        });

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: entry.name
        });
      }
      return false;
    });
    initMap();
    $('#page-wrapper').html(html);
    $('.taste').html(image);

  });
