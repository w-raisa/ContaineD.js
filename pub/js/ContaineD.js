function ContaineD(triggerBoxes) {
  this.domTree = document.getElementById("element-in-hierarchy")
  // if (options.hasOwnProperty('speed')) { 
  //   this.speed = options.speed
  // }
  var containeD_containeR = document.querySelector(".containeD-containeR")
  console.log("triggerBoxes: ", triggerBoxes)
  var order = triggerBoxes.length
  for (var i = 0; i < (triggerBoxes.length - 1); i++) {
    triggerBoxes[i].style.zIndex = `${order}`
    order -= 1
  }
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

  backgroundColourTransition: function(box, startingColour, endingColour, speed, x) {
    box.style.animation = `${x} ${speed}s infinite`;
    var cssAnimation = document.createElement('style')
    cssAnimation.type = 'text/css'
    var rules = document.createTextNode(
      `@-webkit-keyframes ${x} {` +
        `0% {background-color: ${startingColour};}` +
        `50% {background-color: ${endingColour};}` +
        `100% {background-color: ${startingColour};}` +
      "}"
    );
    cssAnimation.appendChild(rules);
    box.appendChild(cssAnimation);
  },

  dynamicPausableCards: function(card, timeFunction, iterationCount, speed, animationDirection, animationSeq, x, animationPlayState=null) { 
    /* 
    use this to get all cards to have this animation. no card will have a unique animation if using this. all cards will have the same animation
    cards are moving, but upon hovering/clicking the card, it will stop moving, it will pause 
    */
    this.formatWebKitAnimationStr(x, animationSeq)
    if (animationPlayState === null) {
      $(`.${card.className}`).css("animation", `${x} ${timeFunction} ${speed}s ${iterationCount} ${animationDirection}`) 
      return
    }
    else {
      $(`.${card.className}`).css("animation", `${x} ${timeFunction} ${speed}s ${iterationCount} ${animationDirection} ${animationPlayState}`) 
    }

    this.hoverHandler(`.${card.className}`, animationPlayState)
  },


  dynamicPausableCard: function(card, timeFunction, iterationCount, speed, animationDirection, animationPlayState, animationSeq, x) { 
    /* 
    use this to get one card to have this animation. no other card will have this animation if using this. all cards other will have a different animation.
    cards are moving, but upon hovering/clicking the card, it will stop moving, it will pause 
    */
    this.formatWebKitAnimationStr(x, animationSeq)
    $(`#${card.id}`).css("animation", `${x} ${timeFunction} ${speed}s ${iterationCount} ${animationDirection} ${animationPlayState}`) 
    this.hoverHandler(`#${card.id}`, animationPlayState)
  },

  hoverHandler: function(cardSelector, animationPlayState) {
    var onHoverPlayState = "paused" // if animationPlayState is not paused, then the animationPlayState = "running", so on hover, we would want to pause.
    if (animationPlayState === "paused") {
      onHoverPlayState = "running"
    }

    console.log("cardSelector: ", cardSelector)

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


  formatWebKitAnimationStr: function(x, animationSeq) {
    var cssAnimation2 = document.createElement('style')
    cssAnimation2.type = 'text/css'
    var dummystr = `@-webkit-keyframes ${x} {`;
    for (var key in animationSeq) {
      dummystr += ` ${key} {`
      for (var animationStepKey in animationSeq[key]) {
        dummystr += `${animationStepKey}: ${animationSeq[key][animationStepKey]}; ` 
      }
      dummystr += `}`
    }
    dummystr += `}`
    console.log("dummystr: ", dummystr)

    var rules2 = document.createTextNode(dummystr)

    cssAnimation2.appendChild(rules2);
    card.appendChild(cssAnimation2);
  },







  selectMode: function () { // select whether to be in debug mode or creative mode

    var modeDiv = document.createElement("div")
    modeDiv.id = "modeSelectionDiv"
    modeDiv.style.margin = "12px";
    this.domTree.append(modeDiv)

    var debugButton = document.createElement("BUTTON")
    debugButton.id = "debugButton"
    debugButton.textContent = "Debug Mode"
    modeDiv.append(debugButton)

    var creativeButton = document.createElement("BUTTON")
    creativeButton.id = "creativeButton"
    creativeButton.textContent = "Creative Mode"
    creativeButton.style.margin = "7px"
    modeDiv.append(creativeButton)

  },


  createHierarchy: function (element) { // from line 7 to line 15, this is not my code, I got it from https://jsfiddle.net/nkys3jrL/10/, the function walkElement() which are from line 14 to line 28
    var span = document.createElement("span")
    span.textContent = "<" + element.tagName.toLowerCase() + ">" + "\n"
    span.attachedElement = element
    element.attachedDomTreeElement = span

    span.className = "element-in-hierarchy"

    for (var child of element.children) {
      this.createHierarchy(child)
    }
  },

  displayHTMLText: function (str) {
    var HTMLDivTag = document.createElement("div")
    HTMLDivTag.id = "HTMLDivTag"
    this.domTree.appendChild(HTMLDivTag)

    var p = document.createElement("p")
    p.id = "HTMLTextDisplay"
    p.textContent = str
    HTMLDivTag.appendChild(p)

  },


  displayElement: function(e, viewCSSButton) {
    const target = e.target
    var HTMLDivTag = document.getElementById("HTMLDivTag")

    console.log("target: ", target)
    if (target.attachedDomTreeElement) {

      var toRemove = document.getElementById("elementCurrentlyViewing") // id is just one thing u need class.
      if (toRemove) {
        toRemove.remove();
      }

      var toRemove = document.getElementById("elementDirectParent") // id is just one thing u need class.
      if (toRemove) {
        toRemove.remove();
      }

      var toRemove = document.getElementById("elementDirectChildren") // id is just one thing u need class.
      if (toRemove) {
        toRemove.remove();
      }

      // currently viewing
      var attributeString = ""
      for (var attribute of target.attributes) {
        attributeString += " " + attribute.name + "=" + "\"" + attribute.value +  "\""
      }
      var para = document.createElement("para")
      para.textContent = "Currently viewing: " + "<" + target.tagName.toLowerCase() + attributeString + ">\n"
      para.setAttribute('id', 'elementCurrentlyViewing');
      HTMLDivTag.appendChild(para)
      console.log("CSS of currently viewing: ", target.style)

      // parent element of the element we are currently viewing
      var attributeString = ""
      for (var attribute of target.parentElement.attributes) {
        attributeString += " " + attribute.name + "=" + "\"" + attribute.value +  "\""
      }
      var para = document.createElement("para")
      para.textContent = "Direct parent: " + "<" + target.parentElement.tagName.toLowerCase() + attributeString + ">\n"
      para.setAttribute('id', 'elementDirectParent');
      HTMLDivTag.appendChild(para)



      var div = document.createElement("div")
      div.setAttribute('id', 'elementDirectChildren');

      let children = target.children; // HTMLCollection object



      if (children.length > 0) {
        for (let i = 0; i < children.length; i++) {
          var attributeString = ""
          for (var attribute of children[i].attributes) {
            attributeString += " " + attribute.name + "=" + "\"" + attribute.value +  "\"" 
      
          }
          const childTag = "<" + children[i].tagName.toLowerCase() + attributeString + ">\n" 
          var para = document.createElement("para")
          
          if (i == 0){
            para.textContent = "Direct children: " + childTag
            div.appendChild(para)
          }
          else {
            para.textContent = "                 " + childTag
            div.appendChild(para)
          }
        }
      }
      else {
        var para = document.createElement("para")
        para.textContent = "Direct children: No children\n"
        div.appendChild(para)
      }

      HTMLDivTag.appendChild(div)
    }

    console.log("view CSS : ", viewCSSButton)

    viewCSSButton.id = "viewCSSButton"
    viewCSSButton.style.marginTop = "10px"
    
    viewCSSButton.textContent = "Change CSS"
    HTMLDivTag.append(viewCSSButton)
    return target
  },

}

