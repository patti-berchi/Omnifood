//sticky navigation

$(document).ready(function() {
  $(".js--section-features").waypoint(
    function(direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "60px;"
    }
  );

  //mobile navigation

  $(".js--nav-icon").click(function() {
    var nav = $(".js--main-nav");
    var icon = $(".js--nav-icon ion-icon");

    nav.slideToggle(200);

    if (icon.attr("name") == "menu-outline") {
      icon.attr("name", "close-outline");
    } else {
      icon.attr("name", "menu-outline");
    }
  });
});
