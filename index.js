function position_scroll(scrollposition_1) {
  var scrollPosition = $(scrollposition_1).offset().top;

  $("html").animate(
    {
      scrollTop: scrollPosition,
    },
    500
  );
}
