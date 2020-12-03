var mainCtr = $("#main-ctr"),
    hello = $(".hello"),
    eyeLeft = $("#eye-left"),
    eyeRight = $("#eye-right"),
    eyeToLeft = $("#eye-to-left"),
    eyeToRight = $("#eye-to-right"),
    wink = $("#wink"),
    smileUp = $("#smile-up"),
    smileDown = $("#smile-down"),
    smile = $("#smile");

var tl = new TimelineMax({
  repeat: -1,
  repeatDelay: .3,
  delay: .3
});

TweenMax.set([mainCtr, hello], {
  opacity: 0
});

tl
  .to(mainCtr, .3, {
    opacity: 1
  })
  .to(smileDown, .3, {
    opacity:0
  })
  .to(smileUp, .3, {
    opacity:1
  })
  .to(smile, .3, {
    rotation: -30,
    transformOrigin: "center center",
    ease: Circ.ease
  })
  .to(smile, .9, {
    rotation: 900,
    transformOrigin: "center center",
    ease: Circ.easeInOut
  })
 .to(eyeLeft, .3, {
    opacity:0,
  })
.to(eyeRight, .3, {
    opacity:0,
  })
.to(eyeToLeft, .3, {
    opacity: 1,
    ease: Power2.ease
  }, "-=.3")
.to(eyeToRight, .3, {
    opacity: 1,
    ease: Power2.ease
  }, "-=.3")
  .to(eyeToRight, .1, {
    scaleY: .25,
    transformOrigin: "center center"
  })
  .to(eyeToRight, .1, {
    scaleY: 1
  })
  .to(hello, .3, {
    opacity: 1
  }, "-=.3")
  .to(mainCtr, .6, {
    delay: 1,
    opacity: 0
  })(jQuery);
