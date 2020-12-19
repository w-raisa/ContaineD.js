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


// do the following to get all triggers to have to same animation for their individual cards.
var triggerBox = document.querySelector(".containeD-trigger")
var cardBox1 = document.querySelector(".containeD-box1")
var cardBox2 = document.querySelector(".containeD-box2")
var cardBox3 = document.querySelector(".containeD-box3")
var cardBox4 = document.querySelector(".containeD-box4")
containeD.translatingCards(triggerBox, cardBox1, 300, "ease-in-out", 150, 100, 0, 0, 20)
containeD.backgroundColourTransition(cardBox1, "black", "yellow", 1)
containeD.translatingCards(triggerBox, cardBox2, 900, "cubic-bezier(1,-1.02,.13,.87)", 100, 210, 0, 0, 20)
containeD.translatingCards(triggerBox, cardBox3, 600, "ease-in-out", -50, 200, 0, 0, 20)
containeD.translatingCards(triggerBox, cardBox4, 800, "ease-in-out", -150, 150, 0, 0, 20)


// do the following to individually change the animation of cards of a single trigger, developer using this library must provide ids to the cards and the trigger.
// here we are changing the 1st card and the 4th card of trigger3.
// var chosenTriggerBox = document.getElementById('containeD-trigger3');
// var card1 = document.getElementById('containeD-box1-id');
// containeD.translateCard(chosenTriggerBox, card1, "linear", 100, -100, 200, 0, 0, 180)
// var card4 = document.getElementById('containeD-box4-id');
// containeD.translateCard(chosenTriggerBox, card4, "linear", 400, 200, 200, 0, 0, 180)

// changing the first card of trigger 2 only.
var chosenTriggerBox2 = document.getElementById('containeD-trigger2');
var card5 = document.getElementById('hehexd');
//containeD.translateCard(chosenTriggerBox2, card5, "linear", 400, 0, 200, 0, 0, 180)

containeD.backgroundColourTransition(card5, "black", "#c3268a", 1)
containeD.backgroundColourTransition(triggerBox, "pink", "red", 1)


var triggerBox3 = document.getElementById('containeD-trigger3');
var card1Trigger3 = document.getElementById('containeD-card1-id-3');
var card2Trigger3 = document.getElementById('containeD-card2-id-3');
containeD.translateCard(triggerBox3, card1Trigger3, 900, "linear", 0, 200, 0, 0, 0, 0)
containeD.translateCard(triggerBox3, card2Trigger3, 900, "linear", 200, 0, 0, 0, 0, 20)

var triggerBox4 = document.getElementById('containeD-trigger4');
var card1Trigger4 = document.getElementById('containeD-card1-id-4');
containeD.translateCard(triggerBox4, card1Trigger4, 300, "linear", 100, 100, 0, 0, 0, 0)


var card = document.querySelector(".containeD-dynamic-card")
var trigger = document.querySelector(".containeD-dynamic-trigger-card")
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
var animationSequence2 = {
	"0%": {
		"bottom": "0", 
		"background": "#d976c2",
		},
	"100%": {
		"bottom": "10%", 
		"background": "#c5c1fa",
		},
}
containeD.dynamicPausableCards(trigger, "ease-in-out", "infinite", 1, "alternate", animationSequence2, "running") // passed in animationPlayState is the state you want to begin in. if animationPlayState = "paused", then the box will start off paused, and on hover, it will be running.

var animationSequence3 = {
	"0%": {
		"bottom": "0", 
		"background": "pink",
		"opacity": "1",
		},
	"100%": {
		"bottom": "10%", 
		"background": "yellow",
		"opacity": "0",
		},
}


// change the animation of one single card
var uniqueDynamicCard = document.getElementById("dynamic-card-id-1")
var uniqueDynamicTrigger = document.getElementById("dynamic-trigger-id-1")
containeD.dynamicPausableCard(uniqueDynamicCard, "ease-in-out", "infinite", 1, "alternate", animationSequence2)
containeD.dynamicPausableCard(uniqueDynamicTrigger, "ease-in-out", "infinite", 1, "alternate", animationSequence3, "running")


var uniqueDynamicCard2 = document.getElementById("dynamic-card-id-2")
var uniqueDynamicTrigger2 = document.getElementById("dynamic-trigger-id-2")
containeD.dynamicPausableCard(uniqueDynamicCard2, "ease-in-out", "infinite", 1, "alternate", animationSequence2)
containeD.dynamicPausableCard(uniqueDynamicTrigger2, "ease-in-out", "infinite", 1, "alternate", animationSequence3, "running")


var uniqueDynamicCard3 = document.getElementById("dynamic-card-id-3")
var uniqueDynamicTrigger3 = document.getElementById("dynamic-trigger-id-3")
containeD.dynamicPausableCard(uniqueDynamicCard3, "ease-in-out", "infinite", 1, "alternate", animationSequence2)
containeD.dynamicPausableCard(uniqueDynamicTrigger3, "ease-in-out", "infinite", 1, "alternate", animationSequence3, "running")



var uniqueDynamicCard = document.getElementById("dynamic-card-id-1")
var uniqueDynamicTrigger = document.getElementById("dynamic-trigger-id-1")
containeD.dynamicPausableCard(uniqueDynamicCard, "ease-in-out", "infinite", 1, "alternate", animationSequence2)
containeD.dynamicPausableCard(uniqueDynamicTrigger, "ease-in-out", "infinite", 1, "alternate", animationSequence3, "running")


var uniqueDynamicCard2 = document.getElementById("dynamic-card-id-2")
var uniqueDynamicTrigger2 = document.getElementById("dynamic-trigger-id-2")
containeD.dynamicPausableCard(uniqueDynamicCard2, "ease-in-out", "infinite", 1, "alternate", animationSequence2)
containeD.dynamicPausableCard(uniqueDynamicTrigger2, "ease-in-out", "infinite", 1, "alternate", animationSequence3, "running")


var uniqueDynamicCard3 = document.getElementById("dynamic-card-id-3")
var uniqueDynamicTrigger3 = document.getElementById("dynamic-trigger-id-3")
containeD.dynamicPausableCard(uniqueDynamicCard3, "ease-in-out", "infinite", 1, "alternate", animationSequence2)
containeD.dynamicPausableCard(uniqueDynamicTrigger3, "ease-in-out", "infinite", 1, "alternate", animationSequence3, "running")






var uniqueDynamicCard4 = document.getElementById("dynamic-card-id-4")
var uniqueDynamicTrigger4 = document.getElementById("dynamic-trigger-id-4")
containeD.dynamicPausableCard(uniqueDynamicCard4, "ease-in-out", "infinite", 1, "alternate", animationSequence2)
containeD.dynamicPausableCard(uniqueDynamicTrigger4, "ease-in-out", "infinite", 1, "alternate", animationSequence3, "paused")


var uniqueDynamicCard5 = document.getElementById("dynamic-card-id-5")
var uniqueDynamicTrigger5 = document.getElementById("dynamic-trigger-id-5")
containeD.dynamicPausableCard(uniqueDynamicCard5, "ease-in-out", "infinite", 1, "alternate", animationSequence2)
containeD.dynamicPausableCard(uniqueDynamicTrigger5, "ease-in-out", "infinite", 1, "alternate", animationSequence3, "paused")


var uniqueDynamicCard6 = document.getElementById("dynamic-card-id-6")
var uniqueDynamicTrigger6 = document.getElementById("dynamic-trigger-id-6")
containeD.dynamicPausableCard(uniqueDynamicCard6, "ease-in-out", "infinite", 1, "alternate", animationSequence2)
containeD.dynamicPausableCard(uniqueDynamicTrigger6, "ease-in-out", "infinite", 1, "alternate", animationSequence3, "paused")


var animationSequence10 = {
	"0%": {
		"bottom": "0", 
		"background": "pink",
		"opacity": "0",
		},
	"100%": {
		"bottom": "10%", 
		"background": "#b4ffdc",
		"opacity": "1",
		},
}



var uniqueDynamicCard7 = document.getElementById("dynamic-card-id-7")
var uniqueDynamicTrigger7 = document.getElementById("dynamic-trigger-id-7")
containeD.dynamicPausableCard(uniqueDynamicCard7, "ease-in-out", "infinite", 1, "alternate", animationSequence2)
containeD.dynamicPausableCard(uniqueDynamicTrigger7, "ease-in-out", "infinite", 1, "alternate", animationSequence10)


var uniqueDynamicCard8 = document.getElementById("dynamic-card-id-8")
var uniqueDynamicTrigger8 = document.getElementById("dynamic-trigger-id-8")
containeD.dynamicPausableCard(uniqueDynamicCard8, "ease-in-out", "infinite", 1, "alternate", animationSequence2)
containeD.dynamicPausableCard(uniqueDynamicTrigger8, "ease-in-out", "infinite", 1, "alternate", animationSequence10)


var uniqueDynamicCard9 = document.getElementById("dynamic-card-id-9")
var uniqueDynamicTrigger9 = document.getElementById("dynamic-trigger-id-9")
containeD.dynamicPausableCard(uniqueDynamicCard9, "ease-in-out", "infinite", 1, "alternate", animationSequence2)
containeD.dynamicPausableCard(uniqueDynamicTrigger9, "ease-in-out", "infinite", 1, "alternate", animationSequence10)



var animationSequence4 = {
	"0%": { 
		"opacity": "1",
		},
	"100%": {
		"opacity": "0.5",
		},
}


var slideshowCard = document.getElementById("containeD-slideshow-card-id-1")
var imgNode4 = document.getElementById("containeD-slideshow-img-id-4")
var imgNode3 = document.getElementById("containeD-slideshow-img-id-3")
var imgNode2 = document.getElementById("containeD-slideshow-img-id-2")
var imgNode1 = document.getElementById("containeD-slideshow-img-id-1")
const imgNodes = [imgNode1,imgNode2,imgNode3, imgNode4] // first thing in the list is the last thing you want to show on the slide (it is the last image of the slide show, at the bottom of the deck)
containeD.slideshow(imgNodes, slideshowCard, "linear", "infinite", 1, "alternate", animationSequence4)


var slideshowCard2 = document.getElementById("containeD-slideshow-card-id-2")
var imgNode9 = document.getElementById("containeD-slideshow-img-id-9")
var imgNode8 = document.getElementById("containeD-slideshow-img-id-8")
var imgNode7 = document.getElementById("containeD-slideshow-img-id-7")
var imgNode6 = document.getElementById("containeD-slideshow-img-id-6")
var imgNode5 = document.getElementById("containeD-slideshow-img-id-5")
const imgNodes2 = [imgNode5,imgNode6,imgNode7, imgNode8,imgNode9] // first thing in the list is the last thing you want to show on the slide (it is the last image of the slide show, at the bottom of the deck)
containeD.slideshow(imgNodes2, slideshowCard2, "ease-in-out", "infinite", 1, "alternate", animationSequence4)

var slideshowCard3 = document.getElementById("containeD-slideshow-card-id-3")
var imgNode12 = document.getElementById("containeD-slideshow-img-id-12")
var imgNode11 = document.getElementById("containeD-slideshow-img-id-11")
var imgNode10 = document.getElementById("containeD-slideshow-img-id-10")
const imgNodes3 = [imgNode10, imgNode11,imgNode12] // first thing in the list is the last thing you want to show on the slide (it is the last image of the slide show, at the bottom of the deck)
containeD.slideshow(imgNodes3, slideshowCard3, "ease-in-out", "infinite", 1, "alternate", animationSequence4)








