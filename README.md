# Welcome to ContaineD.js, a JavaScript library that allows you to make beautiful CSS animations in only a few lines of code. 
## Official ContaineD.js website: https://tranquil-lake-94651.herokuapp.com/

### Getting Started
1. Link the ContaineD.js file to your HTML: ```<script type="text/javascript" src="js/ContaineD.js"></script>```
2. Import the CSS file: ```<link rel="stylesheet" href="css/containeD.css">```
3. Import ContaineD.js dependencies (just jQuery): ```<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>```
4. Write HTML markup to get ContaineD.js elements onto your page:
- If you would like to use the Translating Deck of Cards (as seen on the Examples page), incorporate the following into your HTML:
```
<div class="containeD-containeR">
    <div class="containeD-trigger"> 
      <div class="containeD-box1">
      </div>
      <div class="containeD-box2">
      </div>
      <div class="containeD-box3">
      </div>
      <div class="containeD-box4">
      </div>
    </div>
</div>
```

- If you would like to use the Dynamic Pausable Cards (as seen on the Examples page), incorporate the following into your HTML:
```
<div class="containeD-containeR-dynamic">
    <div class="containeD-dynamic-trigger-card" id="dynamic-trigger-id-1">
      <div class="containeD-dynamic-card" id="dynamic-card-id-1">
      </div>
    </div>
</div>
```

- If you would like to use Slideshow (as seen on the Examples page), incorporate the following into your HTML:
```
<div class="containeD-slideshow-containeR">
  <div class="containeD-slideshow-card" id="containeD-slideshow-card-id-1">
  </div>
</div>
```

5. Create an instance of the library in JavaScript:
```
var triggerBoxes = document.querySelectorAll(".containeD-trigger")
var containeD = new ContaineD(triggerBoxes)
```

6. Make DOM manipulations in JavaScript using methods provided by ContaineD.js

- If you would like to manipulate the Translating Deck of Cards (as seen on the Examples page), incorporate the following into your JavaScript:
```
var triggerBox = document.querySelector(".containeD-trigger")
var cardBox1 = document.querySelector(".containeD-box1")
var triggerBox = document.querySelector(".containeD-trigger")
var cardBox1 = document.querySelector(".containeD-box1")
var cardBox2 = document.querySelector(".containeD-box2")
var cardBox3 = document.querySelector(".containeD-box3")
var cardBox4 = document.querySelector(".containeD-box4")
containeD.translatingCards(cardBox1, 300, "ease-in-out", 150, 100, 0, 0, 20)
containeD.translatingCards(cardBox2, 900, "cubic-bezier(1,-1.02,.13,.87)", 100, 210, 0, 0, 20)
containeD.translatingCards(cardBox3, 600, "ease-in-out", -50, 200, 0, 0, 20)
containeD.translatingCards(cardBox4, 800, "ease-in-out", -150, 150, 0, 0, 20)
```

- If you would like to manipulate the Dynamic Pausable Cards (as seen on the Examples page), incorporate the following into your JavaScript:
```
var uniqueDynamicCard = document.getElementById("dynamic-card-id-1")
var uniqueDynamicTrigger = document.getElementById("dynamic-trigger-id-1")
containeD.dynamicPausableCard(uniqueDynamicCard, "ease-in-out", "infinite", 1, "alternate", animationSequence2)
containeD.dynamicPausableCard(uniqueDynamicTrigger, "ease-in-out", "infinite", 1, "alternate", animationSequence3, "running")
```

- If you would like to manipulate the Slideshow (as seen on the Examples page), incorporate the following into your JavaScript:
```
var slideshowCard = document.getElementById("containeD-slideshow-card-id-1")
var imgNode4 = document.getElementById("containeD-slideshow-img-id-4") // please note that you will have to add in a <img> tag in the HTML from step 4 with this id in order for this work. You are free to change up id names however you want
var imgNode3 = document.getElementById("containeD-slideshow-img-id-3")
var imgNode2 = document.getElementById("containeD-slideshow-img-id-2")
var imgNode1 = document.getElementById("containeD-slideshow-img-id-1")
const imgNodes = [imgNode1,imgNode2,imgNode3, imgNode4] // first imgNode in the list is the last image you want to show on the slide (it is the last image of the slide show)
containeD.slideshow(imgNodes, slideshowCard, "linear", "infinite", 1, "alternate", animationSequence4)
```

As seen in step 6, you can manipulate various DOM elements using ContaineD.js, and there are methods as part of the library that will help you do this.

Official ContaineD.js documentation: https://tranquil-lake-94651.herokuapp.com/api.html













