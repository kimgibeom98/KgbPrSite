$(document).ready(function () {
  // ClickEven str
  ClickEven(".MenuDefault", ".Menu");
  ClickEven(".Click", ".Check");
  ClickEven(".Click", ".Opacity");
  // ClickEven fin

  // ScrollEven str
  ScrollEven("section.AboutArea", "section.AboutArea .whiteBackground");
  ScrollEven("section.SkillArea", "section.SkillArea .WhiteBackground");
  ScrollEven("section.PortfolioArea", "section.PortfolioArea .PfWhite");
  // ScrollEven fin
});

// ClickEven str
function ClickEven(Click, BOX) {
  $('.HeaderMenu').on('touchmove mousewheel', function (e) {
    e.preventDefault();
  });

  $(Click).click(function (e) {
    e.preventDefault();
    $(BOX).toggleClass('active');
  });
  $(".Menu ul li a").click(function () {
    $(".Menu").removeClass('active');
  });
}
// ClickEven fin

// ScrollEven str
function ScrollEven(Scroll, BOX) {
 

  $(window).scroll(function () {
    console.log(123)
    var divOffsetTop = $(Scroll).offset().top;
    var scrollTop = $(window).scrollTop() + ($(window).height() / 1.5);
    var divH = $(Scroll).height();
    if (scrollTop > divOffsetTop) {
      var hiddenHeight = divH - (scrollTop - divOffsetTop);
      $(BOX).css({
        height: hiddenHeight
      });
    } else if (scrollTop < divOffsetTop) {
      $(BOX).css({
        "height": "100%"
      });
    }
  })

  // $(window).scroll(function () {
  //   $('.Bar2').each(function () {
  //     if ($(window).scrollTop() > $(this).offset().top - ($(window).height() / 1.5)) {
  //       $(this).addClass('active');
  //     } else {
  //       $(this).removeClass('active');
  //     }
  //   })
  // });

  // $(window).scroll(function () {
  //   if ($(window).scrollTop() > $('.TransImg').offset().top - ($(window).height() / 2.5)) {
  //     $('.TransImg').addClass('active');
  //   } else {
  //     $('.TransImg').removeClass('active');
  //   }
  // });

  // $(window).scroll(function () {
  //   if ($(window).scrollTop() > $('.TransImg2').offset().top - ($(window).height() / 2.5)) {
  //     $('.TransImg2').addClass('active');
  //   } else {
  //     $('.TransImg2').removeClass('active');
  //   }
  // });

  // $(window).scroll(function () {
  //   if ($(window).scrollTop() > $('.TransImg3').offset().top - ($(window).height() / 2.5)) {
  //     $('.TransImg3').addClass('active');
  //   } else {
  //     $('.TransImg3').removeClass('active');
  //   }
  // });
}
    // ScrollEven fin
