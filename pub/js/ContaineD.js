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
    //document.body.appendChild(triggerBox)
    var cardBoxClassName = `.${cardBox.className}`
    //triggerBox.appendChild(cardBox) // the first one appended appears at the bottom of the deck. last one appended is at the top of the deck. the last one appended will overlap all.

    //var containeD_containeR = document.querySelector(".containeD-containeR")
    //containeD_containeR.appendChild(triggerBox)

    $(cardBoxClassName).css("transition", `transform ${speed}ms ${timeFunction}`) 

    $(".containeD-trigger").hover(
    function() {
      $(this).find(cardBoxClassName).css("transform", `translate(${translateX}px, ${translateY}px) rotate(${rotationDeg}deg)`)
    },
    function() { // this gets triggered when we are no longer hovering on elements with class .containeD-trigger 
      $(this).find(cardBoxClassName).css("transform", `translate(${endX}px, ${endY}px)`)
      // $( this ).fadeOut( 100 );
      // $( this ).fadeIn( 200 );
    });
  },

  translateCard: function(triggerBox, cardBox, speed, timeFunction, translateX, translateY, endX, endY, rotationDeg) { // change one card's animation of one trigger
    //triggerBox.appendChild(cardBox) // the first one appended appears at the bottom of the deck. last one appended is at the top of the deck. the last one appended will overlap all.
    //var containeD_containeR = document.querySelector(".containeD-containeR")
    //containeD_containeR.appendChild(triggerBox)
    $(`#${cardBox.id}`).css("transition", `transform ${speed}ms ${timeFunction}`) 

    $(`#${triggerBox.id}`).hover(
    function() {
      $(this).find(`#${cardBox.id}`).css("transform", `translate(${translateX}px, ${translateY}px) rotate(${rotationDeg}deg)`)
    },
    function() { // this gets triggered when we are no longer hovering on elements with class .containeD-trigger 
      $(this).find(`#${cardBox.id}`).css("transform", `translate(${endX}px, ${endY}px)`)
      // $( this ).fadeOut( 100 );
      // $( this ).fadeIn( 200 );
    });
  },

  backgroundColourTransition: function(box, startingColour, endingColour, speed, x) {
    box.style.animation = `${x} ${speed}s infinite`;
    var cssAnimation = document.createElement('style')
    cssAnimation.type = 'text/css'
    var rules = document.createTextNode(
      `@-webkit-keyframes ${x} {` +
      `0% { background-color: ${startingColour}; }` +
      `50% { background-color: ${endingColour}; }` +
      `100% { background-color: ${startingColour}; }` +
      "}"
      );
    cssAnimation.appendChild(rules);
    box.appendChild(cssAnimation);
  },

  createGrid: function(gridElement, numContainers, containerSize) {
    for (var i = 1; i <= numContainers; i++) {
      const gridContainer = document.createElement("div") // create a div container
      gridContainer.style.wordWrap = "break-word"
      gridContainer.id = "grid-item grid-item-" + i 
      gridContainer.textContent = "Grid-Item " + i
      gridContainer.style.border = "solid black 1px"
      gridContainer.style.overflow = "auto"
      gridElement.append(gridContainer)
    }
  },

  applyColumnSpace: function(gridElement, columnSpacing) {
    var s = ""
    for (var i = 0; i < columnSpacing.length; i++) { 
      if (i == (columnSpacing.length - 1)) {
        s += columnSpacing[i] + "px" 
      }
      else {
        s += columnSpacing[i] + "px "
      }
    }
    gridElement.style.gridTemplateColumns = s
  },

  applyMinColumnSize: function(gridElement, minColumnSize) {
    gridElement.style.gridAutoColumns = `minmax(${minColumnSize}px, auto)`
  },

  applyRepeatedColumns: function(gridElement, repeatColumns) {
    gridElement.style.gridTemplateColumns = `repeat(${repeatColumns[0]}, ${repeatColumns[1]}px)`
  },

  applyColumnGap: function(gridElement, columnGap) {
    gridElement.style.gridColumnGap = columnGap + "px"
  },

  applyRowGap: function(gridElement, rowGap) {
    gridElement.style.gridRowGap = rowGap + "px"
  },

  applyCentered: function(gridElement) {
    gridElement.style.justifyContent = "center"
  },

  setGridCellColumnPositioning: function(gridElement, start, end) {
    gridElement.style.gridColumnStart = start
    gridElement.style.gridColumnEnd = end + 1 // must do +1 because it isn't obv to user otherwise
  },

  setGridCellRowPositioning: function(gridElement, start, end) {
    gridElement.style.gridRowStart = start
    gridElement.style.gridRowEnd = end + 1 // must do +1 because it isn't obv to user otherwise
  },

  setGridCellImage: function(gridElement, imagePath) {
    var img = document.createElement("img"); 
    img.src = imagePath;
    img.style.maxWidth = "100%"
    img.style.maxHeight = "100%"
    img.style.display = "block"
    gridElement.style.objectFit = "end"
    gridElement.appendChild(img);
  },

  setGridElementContent: function(gridElement, content) {
    gridElement.textContent = content
  },

  openCoverEffect: function(gridCell, gridElement) {
    gridCell.classList.add("triggerOpenCoverEffect");
    
    var triggerDiv = document.createElement("div")
    triggerDiv.classList.add("triggerOpenCoverEffect");


    var dummyDiv = document.createElement("div")
    dummyDiv.style.backgroundColor = "pink"
    dummyDiv.style.height = "100px"
    dummyDiv.style.width = "100px"
    dummyDiv.classList.add("openCoverEffect");
    gridElement.append(dummyDiv)


    gridElement.style.height = "500px"
    gridElement.style.width = "500px"

    //gridElement.appendChild(dummyDiv)
    console.log("height: ", gridElement.style.height)
    console.log("width: ", gridElement.style.width)
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

  // creative mode.
  gridMaker: function(numContainers, columnSpacing, rowSpacing, repeatColumns = [], hasMinColumnSize = 0, hasMinRowSize = 0, gridColumnGap=0, gridRowGap=0) { // takes in: number of containers (num), spacing btw columns (array), rowSpacing (array), whether row sizes should have a min value (initially 0)
    // create a grid with numContainers amount of containers. You can also allocate the grid into columns, and the sizes of the columns can be listed
    // in an array and passed in as columnSpacing. The number of columns is the length of the array columnSpacing. Similarly for rowSpacing. hasMinRowSize is
    // default 0, this argument lets you set a minimum row size and allow elements in the grid to grow to any size based on its contents. If rowSpacing is passed in,
    // hasMinRowSize will override it. gridcolumnGap is the amount of spacing between columns (int), default is set to 0. Similarly for gridRowGap.

    console.log("in grid mode")
    // tell the user to drop this HTML in their code, then tell them to call this function.
    const containeDDiv = document.getElementById("containeD")
    containeDDiv.style.display = "grid"

    if (hasMinColumnSize > 0) { // hasMinColumnSize overrides columnSpacing
      console.log("repeatColumns: ", repeatColumns)
      if (repeatColumns.length > 0) { 
        containeDDiv.style.gridTemplateColumns = `repeat(${repeatColumns[0]}, ${repeatColumns[1]}px)`
      }
      console.log("hasMinColumnSize: ", hasMinColumnSize)
      containeDDiv.style.gridAutoColumns = `minmax(${hasMinColumnSize}, auto)`
    }
    else if (repeatColumns.length == 0) { // repeatColumns overrides columnSpacing 
      var s = ""
      for (var i = 0; i < columnSpacing.length; i++) { 
        if (i == (columnSpacing.length - 1)) {
          s += columnSpacing[i] + "px" 
        }
        else {
          s += columnSpacing[i] + "px "
        }
      }
      containeDDiv.style.gridTemplateColumns = s
    }
    else if (repeatColumns.length > 0) {
      containeDDiv.style.gridTemplateColumns = `repeat(${repeatColumns[0]}, ${repeatColumns[1]}px)`
    }
    

    if (hasMinRowSize > 0) {
      containeDDiv.style.gridAutoRows = `minmax(${hasMinRowSize}, auto)`
    }
    else {
      var s = ""
      for (var i = 0; i < rowSpacing.length; i++) { 
        if (i == rowSpacing.length - 1) {
          s += rowSpacing[i] + "px" 
        }
        else {
          s += rowSpacing[i] + "px "
        }
      }
      console.log("R: ", s)
      containeDDiv.style.gridTemplateRows = s
    }

    containeDDiv.style.gridColumnGap = gridColumnGap + "px"
    containeDDiv.style.gridRowGap = gridRowGap + "px"


    // for (var i = 1; i <= numContainers; i++) {
    //   const gridContainer = document.createElement("div") // create a div container
    //   gridContainer.style.wordWrap = "break-word"
    //   gridContainer.id = "grid-item grid-item-" + i 
    //   gridContainer.textContent = "Grid-Item " + i + "hehehehe Lorem50 xdaouighv iasdjhjk asihdba ksjdsdjhvgjhvagj "
    //   gridContainer.style.border = "solid black 1px"
    //   containeDDiv.append(gridContainer)
    //   console.log("i: ", i)
    // }



  }


}

