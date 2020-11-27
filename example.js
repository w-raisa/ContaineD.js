var containeD = new ContaineD()

var userWebsite = document.getElementById("userWebsite")

containeD.displayHTMLText()
containeD.createHierarchy(userWebsite)

userWebsite.addEventListener("click", function a(e) {
	containeD.displayElement(e)
})



