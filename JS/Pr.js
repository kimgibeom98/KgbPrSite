$(document).ready(function () {

  // clickEven str
  clickEven(".MenuDefault", ".Menu");
  clickEven(".Click", ".Check");
  clickEven(".Click", ".Opacity");
  // clickEven fin

  // scrollEven str
  scrollEven("section.AboutArea", "section.AboutArea .whiteBackground");
  scrollEven("section.PortfolioArea", "section.PortfolioArea .PfWhite");
  scrollEven(".ChildLine");
  scrollEven(".light");
  // scrollEven fin
});

// clickEven str
function clickEven(Click, BOX) {
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
// clickEven fin

// scrollEven str
function scrollEven(Scroll, BOX) {
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
    $(Scroll).each(function () {
      if ($(window).scrollTop() > $(this).offset().top - ($(window).height() / 1.5)) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    })
  });
}
// scrollEven fin

const cursor = document.querySelector(".cursor");
const targetBack = document.querySelector('.DetailPop');
const body = document.querySelector('body');


function openPop(target) {
  const targetPopup = document.querySelector(`.${target}`);
  targetBack.style.display = "block"
  targetPopup.style.display = "block"
  body.style.overflow = "hidden";
}

function closePop() {
  const detailMainbox = document.querySelectorAll('.DetailPop > div');
  for (let i = 0; i < detailMainbox.length; i++) {
    detailMainbox[i].style.display = 'none';

  }
  body.style.overflow = "auto";
  targetBack.style.display = 'none';
}

function moveCursor(e) {
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.top = `${y}px`
  cursor.style.left = `${x}px`
  cursor.style.display = "block";
}

function cursorOut() {
  cursor.style.display = "none";
}

document.addEventListener("mousemove", moveCursor);
document.addEventListener("mouseout", cursorOut);
