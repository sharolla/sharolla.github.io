//参考：http://www.webopixel.net/javascript/538.html

$(function() {
                  var topBtn = $(&#39;#page-top&#39;);
                  topBtn.hide();
                  //スクロールが100に達したらボタン表示
                  $(window).scroll(function () {
                      if ($(this).scrollTop() &gt; 100) {
                          topBtn.fadeIn();
                      } else {
                          topBtn.fadeOut();
                      }
                  });
                  //スクロールしてトップ
                  topBtn.click(function () {
                      $(&#39;body,html&#39;).animate({
                          scrollTop: 0
                      }, 500);
                      return false;
                  });
              });
