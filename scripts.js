$(document).ready(function () {

  //resize panel so always full height and width
  var resize = $(".full-slide");

  function resizeWindow() {
    var viewportWidth = $(window).width();
    var viewportHeight = $(window).height();

    $(resize).css('min-height', viewportHeight + 'px');
    $(resize).css('width', viewportWidth + 'px');
  };

  resizeWindow();

  $(window).resize(function () {
    resizeWindow();
  });

  //Call scroll js
  (function ($) {
    $(window).load(function () {

      $("#nav-menu a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
        highlightSelector: "#nav-menu a"
      });

      $("a[rel='next']").click(function (e) {
        e.preventDefault();
        var to = $(this).parent().parent("section").next().attr("id");
        $.mPageScroll2id("scrollTo", to);
      });

    });
  })(jQuery);
});