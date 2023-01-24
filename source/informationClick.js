$(document).ready(function() {
  var $star = $(".star-input"),
    $result = $star.find("output>b");

  $(document)
    .on("focusin", ".star-input>.input",
      function() {
        $(this).addClass("focus");
      })
    .on("focusout", ".star-input>.input", function() {
      var $this = $(this);
      setTimeout(function() {
        if ($this.find(":focus").length === 0) {
          $this.removeClass("focus");
        }
      }, 100);
    })
    .on("change", ".star-input :radio", function() {
      $result.text($(this).next().text());
    })
    .on("mouseover", ".star-input label", function() {
      $result.text($(this).text());
    })
    .on("mouseleave", ".star-input>.input", function() {
      var $checked = $star.find(":checked");
      if ($checked.length === 0) {
        $result.text("0");
      } else {
        $result.text($checked.next().text());
      }
    });

    // "별점 주기" 버튼 누르면 발생하는 이벤트
  $("#input").click(function() {
    var $checked = $star.find(":checked");
    var str = localStorage.getItem("starScore");
    var nowScore = $checked.next().text();
    var storeId = localStorage.getItem("explain");
    alert(nowScore + "점 주시겠습니까?");
    nowScore *= 1;
    str *= 1;
    var val = (str + nowScore) / 2;
    remove(storeId);
    add(storeId, val);
    read(storeId);
  });
});
