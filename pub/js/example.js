var containeD = new ContaineD()

var userWebsite = document.getElementById("userWebsite")
var debugButton = document.getElementById("debugButton")
var creativeButton = document.getElementById("creativeButton")

containeD.selectMode()
containeD.displayHTMLText()
containeD.createHierarchy(userWebsite)

userWebsite.addEventListener("click", function a(e) {
	containeD.displayElement(e) // we call this function only when something gets clicked on, because when someone clicks on something, you'd wanna display that element
})

debugButton.addEventListener("click", function a(e) { // if someone clicks on this button, they want to be in debug mode, so that includes being able to click on HTML elements on see them.

})

