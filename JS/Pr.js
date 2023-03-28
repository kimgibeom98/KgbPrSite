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

  $(window).scroll(function () {
    $('.ChildLine').each(function () {
      if ($(window).scrollTop() > $(this).offset().top - ($(window).height() / 1.5)) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    })
  });

  $(window).scroll(function () {
    $('.light').each(function () {
      if ($(window).scrollTop() > $(this).offset().top - ($(window).height() / 1.5)) {
        $(this).addClass('on');
      } else {
        $(this).removeClass('on');
      }
    })
  });
}
    // ScrollEven fin

  const cursor = document.querySelector(".cursor");
  document.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;
    cursor.style.top = `${y}px`
    cursor.style.left = `${x}px`
    cursor.style.display = "block";
  })
  document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
  })


  function openPop(target) {
    const body = document.querySelector('body');
    const targetPopup = document.querySelector(`.${target}`);
    console.log(body)
    body.style.overflow = "hidden";
  }

