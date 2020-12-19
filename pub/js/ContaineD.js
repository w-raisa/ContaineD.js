function ContaineD(triggerBoxes) {
  var containeD_containeR = document.querySelector(".containeD-containeR")
  var order = triggerBoxes.length
  for (var i = 0; i < (triggerBoxes.length - 1); i++) {
    triggerBoxes[i].style.zIndex = `${order}`
    order -= 1
  }
  this.webkitKeyframeNames = []
}

ContaineD.prototype = { // prototype just declares functions 

  //translatingCards: function(triggerBox, cardBox, speed, translateX, translateY, endX, endY, rotationDeg) { // get all triggers to have the same animation over all cards
  translatingCards: function(triggerBox, cardBox, speed, timeFunction, translateX, translateY, endX, endY, rotationDeg) { // get all triggers to have the same animation over all cards
    $(`.${cardBox.className}`).css("transition", `transform ${speed}ms ${timeFunction}`) 
    $(".containeD-trigger").hover(
    function() {
      $(this).find(`.${cardBox.className}`).css("transform", `translate(${translateX}px, ${translateY}px) rotate(${rotationDeg}deg)`)
    },
    function() { // this gets triggered when we are no longer hovering on elements with class .containeD-trigger 
      $(this).find(`.${cardBox.className}`).css("transform", `translate(${endX}px, ${endY}px)`)
      // $( this ).fadeOut( 100 );
      // $( this ).fadeIn( 200 );
    });
  },

  translateCard: function(triggerBox, cardBox, speed, timeFunction, translateX, translateY, endX, endY, rotationDeg) { // change one card's animation of one trigger
    $(`#${cardBox.id}`).css("transition", `transform ${speed}ms ${timeFunction}`) 
    $(`#${triggerBox.id}`).hover(
    function() {
      $(this).find(`#${cardBox.id}`).css("transform", `translate(${translateX}px, ${translateY}px) rotate(${rotationDeg}deg)`)
    },
    function() { // this gets triggered when we are no longer hovering on elements with class .containeD-trigger 
      $(this).find(`#${cardBox.id}`).css("transform", `translate(${endX}px, ${endY}px)`)
    });
  },

  backgroundColourTransition: function(box, startingColour, endingColour, speed) {
    const randomlength = Math.floor((Math.random() * 52) + 1);
    const randomWebkitName = this.createWebkitName(randomlength)
    var animationSeq = {"0": {"background-color": `${startingColour}`},
                    "100": {"background-color": `${endingColour}`},
                  }
    box.style.animation = `${randomWebkitName} ${speed}s infinite alternate`;
    this.formatWebKitAnimationStr(randomWebkitName, animationSeq, box)
  },

  dynamicPausableCards: function(card, timeFunction, iterationCount, speed, animationDirection, animationSeq, animationPlayState=null) { 
    /* 
    use this to get all cards to have this animation. no card will have a unique animation if using this. all cards will have the same animation
    cards are moving, but upon hovering/clicking the card, it will stop moving, it will pause 
    */

    const randomlength = Math.floor((Math.random() * 52) + 1);
    const webkitName = this.createWebkitName(randomlength)

    this.formatWebKitAnimationStr(webkitName, animationSeq, card)
    if (animationPlayState === null) {
      $(`.${card.className}`).off("mouseleave mouseenter") // need to take off any hover event from this card.
      $(`.${card.className}`).css("animation", `${webkitName} ${timeFunction} ${speed}s ${iterationCount} ${animationDirection}`) 
      return
    }
    else {
      $(`.${card.className}`).css("animation", `${webkitName} ${timeFunction} ${speed}s ${iterationCount} ${animationDirection} ${animationPlayState}`) 
    }

    this.hoverHandler(`.${card.className}`, animationPlayState)
  },


  dynamicPausableCard: function(card, timeFunction, iterationCount, speed, animationDirection, animationSeq, animationPlayState=null) { 
    /* 
    use this to get one card to have this animation. no other card will have this animation if using this. all cards other will have a different animation.
    cards are moving, but upon hovering/clicking the card, it will stop moving, it will pause 
    */
    const randomlength = Math.floor((Math.random() * 52) + 1);
    const webkitName = this.createWebkitName(randomlength)

    this.formatWebKitAnimationStr(webkitName, animationSeq, card)
    if (animationPlayState === null) {
      $(`#${card.id}`).off("mouseleave mouseenter") // need to take off any hover event from this card.
      $(`#${card.id}`).css("animation", `${webkitName} ${timeFunction} ${speed}s ${iterationCount} ${animationDirection}`)
      return
    }
    else {
      $(`#${card.id}`).css("animation", `${webkitName} ${timeFunction} ${speed}s ${iterationCount} ${animationDirection} ${animationPlayState}`) 
    }
    this.hoverHandler(`#${card.id}`, animationPlayState)
  },

  hoverHandler: function(cardSelector, animationPlayState) {
    var onHoverPlayState = "paused" // if animationPlayState is not paused, then the animationPlayState = "running", so on hover, we would want to pause.
    if (animationPlayState === "paused") {
      onHoverPlayState = "running"
    }
    if( animationPlayState === null) {
      return 
    }

    $(`${cardSelector}`).hover(
      function() {
        //$(".containeD-containeR").find(`.${cardSelector}`).css("animationPlayState", `${onHoverPlayState}`) // do this if you want ALL cards to be affected
        $(this).css("animationPlayState", `${onHoverPlayState}`) // do this if you want a this single card to be affected
      },
      function() { // this gets triggered when we are no longer hovering on elements with class .containeD-trigger 
        //$(".containeD-containeR").find(`.${cardSelector}`).css("animationPlayState", `${animationPlayState}`) // do this if you want ALL cards to be affected
        $(this).css("animationPlayState", `${animationPlayState}`) // do this if you want a this single card to be affected
      });
  },


  slideshow: function(imgNodes, slideshowCard, timeFunction, iterationCount, speed, animationDirection, animationSeq) {
    const randomLength = Math.floor((Math.random() * 52) + 1);
    const webkitName = this.createWebkitName(randomLength)
    this.formatWebKitAnimationStr(webkitName, animationSeq, slideshowCard)

    for (var i = 0; i < imgNodes.length; i++) {
      imgNodes[i].style.zIndex = i + 2
    }

    $(`#${slideshowCard.id}`).click(
      function() {
        $(this).css('animation', `${webkitName} ${timeFunction} ${speed}s ${iterationCount} ${animationDirection}`)
        for (var i = 0; i < imgNodes.length; i++) {
          $(`#${imgNodes[i].id}`).click (
            function(i) {
              $(this).css("z-index", 1)
            }
          )
        }
        var imgNodesZIndex1 = [] // holds all the images with zIndex = 1
        for (var i = 0; i < imgNodes.length; i++) {
          if (imgNodes[i].style.zIndex == 1) {
            imgNodesZIndex1.push(imgNodes[i])
          }
        }
        if (imgNodesZIndex1.length === imgNodes.length) {
          for (var i = 0; i < imgNodes.length; i++) {
            imgNodes[i].style.zIndex = i + 2
          }
        }
      })
  },

  formatWebKitAnimationStr: function(x, animationSeq, card = null) {
    var cssAnimation2 = document.createElement('style')
    cssAnimation2.type = 'text/css'
    var dummystr = `@-webkit-keyframes ${x} {`;
    for (var key in animationSeq) {
      dummystr += ` ${key}% {`
      for (var animationStepKey in animationSeq[key]) {
        dummystr += `${animationStepKey}: ${animationSeq[key][animationStepKey]}; ` 
      }
      dummystr += `}`
    }
    dummystr += `}`

    var rules2 = document.createTextNode(dummystr)

    cssAnimation2.appendChild(rules2);
    if (card === null) {
      return
    }
    card.appendChild(cssAnimation2);
  },

  createWebkitName: function (length) { // got this function from https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript it just generates a random string.
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    if (this.webkitKeyframeNames.includes(result)){
      this.createWebkitName(length)
    }
    else {
      this.webkitKeyframeNames.push(result)
    }
    return result;
  },
}

