// var triggerBox = document.querySelector(".containeD-trigger")
var triggerBoxes = document.querySelectorAll(".containeD-trigger")
var containeD = new ContaineD(triggerBoxes)

var animationSequence2 = {
	"0%": {
		"bottom": "0", 
		"background": "pink",
		},
	"100%": {
		"bottom": "10%", 
		"background": "black",
		},
}

var animationSequence3 = {
	"0%": {
		"bottom": "0", 
		"background": "black",
		"opacity": "1",
		},
	"100%": {
		"bottom": "5%", 
		"background": "pink",
		"opacity": "1",
		},
}

// change the animation of one single card

// landing page

// says ContaineD.js on it
var uniqueDynamicCard = document.getElementById("dynamic-card-id-1")
var uniqueDynamicTrigger = document.getElementById("dynamic-trigger-id-1")
containeD.dynamicPausableCard(uniqueDynamicCard, "ease-in-out", "infinite", 1.5, "alternate", animationSequence2)
containeD.dynamicPausableCard(uniqueDynamicTrigger, "ease-in-out", "infinite", 1.5, "alternate", animationSequence3)

// says Examples on it
var uniqueDynamicCard = document.getElementById("dynamic-card-id-3")
var uniqueDynamicTrigger = document.getElementById("dynamic-trigger-id-3")
containeD.dynamicPausableCard(uniqueDynamicCard, "ease-in-out", "infinite", 1.5, "alternate", animationSequence2)
containeD.dynamicPausableCard(uniqueDynamicTrigger, "ease-in-out", "infinite", 1.5, "alternate", animationSequence3, "running")

// says GitHub on it
var uniqueDynamicCard2 = document.getElementById("dynamic-card-id-4")
var uniqueDynamicTrigger2 = document.getElementById("dynamic-trigger-id-4")
containeD.dynamicPausableCard(uniqueDynamicCard2, "ease-in-out", "infinite", 1.5, "alternate", animationSequence2)
containeD.dynamicPausableCard(uniqueDynamicTrigger2, "ease-in-out", "infinite", 1.5, "alternate", animationSequence3, "running")

//library descriptions on this
var triggerBox = document.querySelector(".containeD-trigger")
var cardBox1 = document.querySelector(".containeD-box1")
var cardBox2 = document.querySelector(".containeD-box2")
var cardBox3 = document.querySelector(".containeD-box3")
var cardBox4 = document.querySelector(".containeD-box4")
containeD.translatingCards(triggerBox, cardBox1, 900, "ease-in-out", 190, 80, 0, 0, 0)
containeD.backgroundColourTransition(cardBox1, "black", "pink", 7, "ll")
containeD.translatingCards(triggerBox, cardBox2, 900, "ease-in-out", -190, -80, 0, 0, 0)
containeD.backgroundColourTransition(cardBox2, "pink", "black", 7, "llp")








// do the following to get all triggers to have to same animation for their individual cards.
//var triggerBox = document.querySelector(".containeD-trigger")
// var cardBox1 = document.querySelector(".containeD-box1")
// var cardBox2 = document.querySelector(".containeD-box2")
// var cardBox3 = document.querySelector(".containeD-box3")
// var cardBox4 = document.querySelector(".containeD-box4")
// containeD.translatingCards(triggerBox, cardBox1, 300, "ease-in-out", 200, 200, 0, 0, 20)
// containeD.backgroundColourTransition(cardBox1, "black", "yellow", 1, "ll")
// containeD.translatingCards(triggerBox, cardBox2, 900, "cubic-bezier(1,-1.02,.13,.87)", 100, 200, 0, 0, 20)
// containeD.translatingCards(triggerBox, cardBox3, 600, "ease-in-out", 0, 200, 0, 0, 20)
// containeD.translatingCards(triggerBox, cardBox4, 800, "ease-in-out", -100, 200, 0, 0, 20)


// // do the following to individually change the animation of cards of a single trigger, developer using this library must provide ids to the cards and the trigger.
// // here we are changing the 1st card and the 4th card of trigger3.
// var chosenTriggerBox = document.getElementById('containeD-trigger3');
// var card1 = document.getElementById('containeD-box1-id');
// containeD.translateCard(chosenTriggerBox, card1, "linear", 100, -100, 200, 0, 0, 180)
// var card4 = document.getElementById('containeD-box4-id');
// containeD.translateCard(chosenTriggerBox, card4, "linear", 400, 200, 200, 0, 0, 180)

// // changing the first card of trigger 2 only.
// var chosenTriggerBox2 = document.getElementById('containeD-trigger2');
// var card5 = document.getElementById('hehexd');
// containeD.translateCard(chosenTriggerBox2, card5, "linear", 400, 0, 200, 0, 0, 180)

// containeD.backgroundColourTransition(card5, "orange", "green", 1, "kk")
// containeD.backgroundColourTransition(triggerBox, "pink", "red", 1, "cc")


// var card = document.querySelector(".containeD-dynamic-card")
// var trigger = document.querySelector(".containeD-dynamic-trigger-card")
// // var animationSequence1 = [
// // 	"20% {height: 100px;}", 
// // 	"40% {height: 200px;}", 
// // 	"60% {height: 300px;}", 
// // 	"80% {height: 325px;}", 
// // 	"100% {height: 350px;}",
// // 	"0% {transform: scale(0)}",
// // 	"100% {transform: scale(1)}",
// // 	"100% {opacity: 1}",
// // 	"50% {opacity: 0}",
// // 	]
// var animationSequence2 = {
// 	"0%": {
// 		"bottom": "0", 
// 		"background": "red",
// 		},
// 	"100%": {
// 		"bottom": "10%", 
// 		"background": "lightblue",
// 		},
// }
// containeD.dynamicPausableCards(trigger, "ease-in-out", "infinite", 1, "alternate", animationSequence2, "running") // passed in animationPlayState is the state you want to begin in. if animationPlayState = "paused", then the box will start off paused, and on hover, it will be running.

// var animationSequence3 = {
// 	"0%": {
// 		"bottom": "0", 
// 		"background": "black",
// 		"opacity": "1",
// 		},
// 	"100%": {
// 		"bottom": "10%", 
// 		"background": "orange",
// 		"opacity": "0",
// 		},
// }


// // change the animation of one single card
// var uniqueDynamicCard = document.getElementById("dynamic-card-id-1")
// var uniqueDynamicTrigger = document.getElementById("dynamic-trigger-id-1")
// containeD.dynamicPausableCard(uniqueDynamicCard, "ease-in-out", "infinite", 1, "alternate", animationSequence2)
// containeD.dynamicPausableCard(uniqueDynamicTrigger, "ease-in-out", "infinite", 1, "alternate", animationSequence3, "paused")


var animationSequence4 = {
	"0%": { 
		"left": "0",
		"opacity": "1",
		},
	"100%": {
		"left": "10%",
		"opacity": "0.5",
		},
}


// var slideshowCard = document.getElementById("containeD-slideshow-card-id-1")
// var imgNode4 = document.getElementById("containeD-slideshow-img-id-4")
// var imgNode3 = document.getElementById("containeD-slideshow-img-id-3")
// var imgNode2 = document.getElementById("containeD-slideshow-img-id-2")
// var imgNode1 = document.getElementById("containeD-slideshow-img-id-1")
// const imgNodes = [imgNode1,imgNode2,imgNode3, imgNode4] // first thing in the list is the last thing you want to show on the slide (it is the last image of the slide show, at the bottom of the deck)
// containeD.slideshow(imgNodes, slideshowCard, "linear", "infinite", 1, "alternate", animationSequence4)
//containeD.slideshow(imgNode2, slideshowCard, 3)
//containeD.slideshow(imgNode1, slideshowCard, 2)



// var gridElement1 = document.getElementById("grid-item grid-item-1")
// //containeD.openCoverEffect(gridElement1, gridElement)


// var gridElement2 = document.getElementById("grid-item grid-item-2")
// const content = "hehexddd"
// //containeD.setGridElementContent(gridElement2, content)
// imgPath = "a.jpg"
// containeD.setGridCellImage(gridElement2, imgPath)
// containeD.backgroundColourTransitionEffect(gridElement2, "pink", "lightblue", 1, "kk")


// var gridElement3 = document.getElementById("grid-item grid-item-3")
// const startingRow = 1 // user wants the cell to begin at Row 1, 
// const endingRow = 2 // the Row user wants this cell to end at. they want it to end at Row 3 here, if this value is allowed to exceed number of Rows.
// containeD.setGridCellRowPositioning(gridElement3, startingRow, endingRow)

// const startingColumn = 2 // user wants the cell to begin at Row 1, 
// const endingColumn = 3 // the Row user wants this cell to end at. they want it to end at Row 3 here, if this value is allowed to exceed number of Rows.
// containeD.setGridCellColumnPositioning(gridElement3, startingColumn, endingColumn)

// imgPath = "b.jpg"
// containeD.setGridCellImage(gridElement3, imgPath)

// containeD.backgroundColourTransitionEffect(gridElement3, "pink", "blue", 3, "pp")


// var gridElement5 = document.getElementById("grid-item grid-item-5")
// const startColumn = 2
// const endColumn = 3
// containeD.setGridCellColumnPositioning(gridElement5, startColumn, endColumn)


// containeD.selectMode()

// var userWebsite = document.getElementById("userWebsite")
// var debugButton = document.getElementById("debugButton")
// var creativeButton = document.getElementById("creativeButton")
// var viewCSSButton = document.createElement("BUTTON")

// // containeD.displayHTMLText()
// // containeD.createHierarchy(userWebsite)
// var target = null
// userWebsite.addEventListener("click", function a(e) {
// 	target = containeD.displayElement(e, viewCSSButton) // we call this function only when something gets clicked on, because when someone clicks on something, you'd wanna display that element

// })
// console.log("target: ", target)


// debugButton.addEventListener("click", function a(e) { // if someone clicks on this button, they want to be in debug mode, so that includes being able to click on HTML elements on see them.
// 	document.getElementById("debugButton").disabled = true;
// 	document.getElementById("creativeButton").disabled = false;

// 	var toRemove = document.getElementById("HTMLDivTag") // this is here so that when you click on the button, everything that was in the container will disappear.
// 	if (toRemove) {
// 		toRemove.remove();
// 	}

// 	containeD.displayHTMLText("HTML: ")
// 	containeD.createHierarchy(userWebsite)

// })

// viewCSSButton.addEventListener("click", function a(e) { 
// 	console.log("CSS view button clicked")
// 	containeD.viewCSS(target)
// })

// creativeButton.addEventListener("click", function a(e) { // if someone clicks on this button, they want to be in debug mode, so that includes being able to click on HTML elements on see them.
// 	document.getElementById("creativeButton").disabled = true;
// 	document.getElementById("debugButton").disabled = false;

// 	var toRemove = document.getElementById("HTMLDivTag") 
// 	if (toRemove) {
// 		toRemove.remove();
// 	}
	
// 	containeD.displayHTMLText("Creative Mode")
// 	//containeD.createHierarchy(userWebsite)
// 	//containeD.gridMaker()
// })





