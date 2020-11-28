function ContaineD() {
  this.domTree = document.getElementById("element-in-hierarchy")
}

ContaineD.prototype = { // prototype just declares functions 
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

  displayHTMLText: function () {
    var p = document.createElement("p")
    p.textContent = "HTML: "
    this.domTree.appendChild(p)
  },


  displayElement: function(e) {
    const target = e.target
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
      this.domTree.appendChild(para)

      // parent element of the element we are currently viewing
      var attributeString = ""
      for (var attribute of target.parentElement.attributes) {
        attributeString += " " + attribute.name + "=" + "\"" + attribute.value +  "\""
      }
      var para = document.createElement("para")
      para.textContent = "Direct parent: " + "<" + target.parentElement.tagName.toLowerCase() + attributeString + ">\n"
      para.setAttribute('id', 'elementDirectParent');
      this.domTree.appendChild(para)



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

      this.domTree.appendChild(div)
    }
  }






}

