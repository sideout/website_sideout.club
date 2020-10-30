
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

function renderMenu(filter, level) {

  console.log(navigator.userAgent);
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    console.log("mobile_view:ON");
  }

  var index = '<li><a href="' + level + 'index.html">Home</a></li>';
  var winter = '<li><a href="' + level + 'winter.html">Winter at SideOut</a></li>';
  var membership = '<li><a href="' + level + 'membership.html">Membership</a></li>';
  var bookCourt = '<li><a href="' + level + 'book-a-court-leyton.html">Book a court</a></li>';
  var calendar = '<li><a href="' + level + 'calendar-leyton.html">Events Calendar</a></li>';
  var tournaments = '<li><a href="' + level + 'tournaments.html">Tournaments</a></li>';
  var camps = '<li><a href="' + level + 'camps-and-clinics.html">Camps & Clinics</a></li>';
  // var team = '<li><a href="' + level + 'meet-the-team.html">Meet the Team</a></li>';
  var shop = '<li><a href="' + level + 'shop.html">Online Store</a></li>';

  switch (filter) {
    case "index":
      index = '<li class="current-menu-item"><a href="' + level + 'index.html">Home</a></li>';
      break;
    case "winter":
      winter = '<li class="current-menu-item"><a href="' + level + 'winter.html">Winter at SideOut</a></li>';
      break;
    case "membership":
      // membership = '<li class="current-menu-item"><a href="' + level + 'membership-leyton.html">Membership</a></li>';
      membership = '<li class="current-menu-item"><a href="' + level + 'membership.html">Membership</a></li>';
      break;
    case "bookCourt":
      bookCourt = '<li class="current-menu-item"><a href="' + level + 'book-a-court-leyton.html">Book a court</a></li>';
      break;
    case "calendar":
      calendar = '<li class="current-menu-item"><a href="' + level + 'events-calendar.html">Events Calendar</a></li>';
      break;
    case "tournaments":
      tournaments = '<li class="current-menu-item"><a href="' + level + 'tournaments.html">Tournaments</a></li>';
      break;
    case "camps":
      camps = '<li class="current-menu-item"><a href="' + level + 'camps-and-clinics.html">Camps & Clinics</a></li>';
      break;
    // case "team":
    //   team = '<li class="current-menu-item"><a href="' + level + 'meet-the-team.html">Meet the Team</a></li>';
    //   break;
    case "shop":
      shop = '<li class="current-menu-item"><a href="' + level + 'shop.html">Online Store</a></li>';
      break;
    default:
    // buttonAll = "btn gradient-bg";
  }
  var links = index + winter + membership + bookCourt + calendar + tournaments + shop;

  //console.log(partOne(level));
  var menu = document.getElementById('mainMenu');
  menu.innerHTML = partOne(level) + links + PART2;


}
