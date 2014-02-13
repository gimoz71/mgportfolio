$(document).ready(function(){
  $("#content-slider").slider({
    animate: true,
    change: handleSliderChange,
    slide: handleSliderSlide
  });
});

function handleSliderChange(e, ui)
{
  var maxScroll = $(".scroll").attr("scrollWidth") - $(".scroll").width();
  $(".scroll").animate({scrollLeft: ui.value * (maxScroll / 100) }, 250);
}

function handleSliderSlide(e, ui)
{
  var maxScroll = $(".scroll").attr("scrollWidth") - $(".scroll").width();
  $(".scroll").attr({scrollLeft: ui.value * (maxScroll / 100) });
}