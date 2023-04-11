$(document).ready(function () {
  // scrollEven str
  scrollEven("section.AboutArea", "section.AboutArea .whiteBackground");
  scrollEven("section#PORTFOLIO", "section.PortfolioArea .PfWhite");
  scrollEven(".ChildLine");
  scrollEven(".light");
  // scrollEven fin
});

const introCursorBox = document.querySelector('.IntroArea');
const introCursor = document.querySelector('.IntroCursor');

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

function cursorOut() {
  introCursor.style.display = "none";
}

function cursorIn() {
  introCursor.style.display = "block";
}

function introMaincursro(e) {
  let introX = e.clientX - introCursorBox.offsetLeft;
  let introY = e.clientY - introCursorBox.offsetTop;

  let element = document.createElement('span');
  element.setAttribute('class', 'elementChild');
  element.style.left = `${introX}px`
  element.style.top = `${introY}px`

  introCursor.appendChild(element);
  setTimeout(() => {
    element.remove()
  }, 1000)
  if (mobileScreen.matches) {
    introCursor.style.display = "none";
  }
}

introCursorBox.addEventListener("mouseleave", cursorOut);
introCursorBox.addEventListener("mouseover", cursorIn);
introCursorBox.addEventListener("mousemove", introMaincursro);

