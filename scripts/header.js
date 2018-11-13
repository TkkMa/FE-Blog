// Add a function to listen for clicks on the ANCHORS
$('#switcher li a').on('click', function(e) {
  let indexClick = $("#switcher a").index(e.target);
  let liId = `.slideshow li:nth-child(${indexClick+1})`; // '.slideshow li:nth-child(' + indexClick+1 + ')'
  let pLiId = `#switcher li:nth-child(${indexClick+1}) a.active`;

  //-- Restart animation of slideshow
  $('.slideshow li').css("animation", "none");
  $('#switcher a').toggleClass('active')
  setTimeout(function() {
    $('.slideshow li').css("animation", "");
    $('#switcher a').toggleClass('active')
  }, 10);

  //-- set animation-delay to 0s for the clicked option
  //-- Cycle forward through the remaining slides with +10s
  setTimeout(function() {
    $(liId).css("animation-delay", "0s");
    $(pLiId).css("animation-delay", "0s");
    let len = $(".slideshow").children().length; //5
    let iLoop;
    for (let i = 0; i < len - 1; i++) {
      iLoop = ((i + indexClick + 1) % len) + 1;
      $(`.slideshow li:nth-child(${iLoop})`).css("animation-delay", `${(i+1)*10}s`);
      $(`#switcher li:nth-child(${iLoop}) a.active`).css("animation-delay", `${(i+1)*10}s`);
    }
  }, 50);
})