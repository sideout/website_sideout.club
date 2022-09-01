
function partOne(level) {
  return '<div class="container">\
  <div class="row">\
      <div class="col-12 d-flex flex-wrap justify-content-between align-items-center">\
          <div class="site-branding d-flex align-items-center">\
              <a class="d-block" href="' + level + 'index.html" rel="home"><img class="d-block" src="' + level + 'images/logo150.png"\
                      alt="logo"></a>\
          </div><!-- .site-branding -->\
          <nav class="site-navigation d-flex justify-content-end align-items-center">\
              <ul class="d-flex flex-column flex-lg-row justify-content-lg-end align-content-center">';
}
const PART2 =

  '</ul>\
          </nav>\
          <div class="hamburger-menu d-lg-none">\
              <span></span>\
              <span></span>\
              <span></span>\
              <span></span>\
          </div>\
      </div>\
  </div>\
</div>';

function renderMenu(page, level) {

  console.log(navigator.userAgent);
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    console.log("mobile_view:ON");
  }

  var training = '<li><a href="' + level + 'index.html">Home</a></li>';
  var play = '<li><a href="' + level + 'play.html">Bespoke Events</a></li>';
  var tournaments = '<li><a href="' + level + 'tournaments.html">Coach Education</a></li>';
  var juniors = '<li><a href="' + level + 'juniors.html">Coaching</a></li>';
  

  switch (page) {
    case "training":
      training = '<li class="current-menu-item"><a href="' + level + 'training-leyton.html">Training</a></li>';
      break;
    case "play":
      play = '<li class="current-menu-item"><a href="' + level + 'play.html">Play</a></li>';
      break;
    case "tournaments":
      tournaments = '<li class="current-menu-item"><a href="' + level + 'tournaments.html">Tournaments</a></li>';
      break;
    case "juniors":
      juniors = '<li class="current-menu-item"><a href="' + level + 'juniors.html">Juniors</a></li>';
      break;
    default:

  }
  var links = training + play + tournaments + juniors ;
  var menu = document.getElementById('mainMenu');
  menu.innerHTML = partOne(level) + links + PART2;

}
