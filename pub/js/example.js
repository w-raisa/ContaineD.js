var gridElement = document.getElementById("containeD")
//gridElement.style.margin = "90px"

var containeD = new ContaineD(gridElement, {
	numContainers: 5,
	containerSize: [500, 500],
	columnSpacing: [100, 200],
	rowSpacing: [100, 100],
	repeatColumns: [3, 100],
	minColumnSize: 100,
	hasMinRowSize:  0,
	gridColumnGap: 20,
	gridRowGap: 20,
	isCentered: true, // default false
})

// do the following to get all triggers to have to same animation for their individual cards.
var triggerBox = document.querySelector(".containeD-trigger")
var cardBox1 = document.querySelector(".containeD-box1")
var cardBox2 = document.querySelector(".containeD-box2")
var cardBox3 = document.querySelector(".containeD-box3")
var cardBox4 = document.querySelector(".containeD-box4")
containeD.translatingCards(triggerBox, cardBox1, 300, 200, 200, 20)
containeD.translatingCards(triggerBox, cardBox2, 400, 100, 200, 20)
containeD.translatingCards(triggerBox, cardBox3, 600, 0, 200, 20)
containeD.translatingCards(triggerBox, cardBox4, 800, -100, 200, 20)


// do the following to change one card's animation of one trigger, developer using this library must provide ids.
// here we are changing card1 of 
var chosenTriggerBox = document.getElementById('containeD-trigger3');
var card1 = document.getElementById('containeD-box1-id');
containeD.translateCard(chosenTriggerBox, card1, 100, -100, 200, 360)



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





