const cursor = document.querySelector(".cursor");
const targetBack = document.querySelector('.DetailPop');
const body = document.querySelector('body');
const mobileScreen = matchMedia("screen and (max-width: 740px)");

// 클릭 이벤트 str
function clickEven(BOX) {
  $('.HeaderMenu').on('touchmove mousewheel', function (e) {
    e.preventDefault();
  });

  $(BOX).toggleClass('active');

  $(".Menu ul li a").click(function () {
    $(".Menu").removeClass('active');
  });
}
// 클릭 이벤트 fin

// 팝업 str
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
// 팝업 fin

// 마우스 이벤트 str
function moveCursor(e) {
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.top = `${y}px`
  cursor.style.left = `${x}px`
  cursor.style.display = "block";
}
// 마우스 이벤트 fin

document.addEventListener("mousemove", moveCursor);

