/* Declare variables below to save the different sections (divs) of your story*/

let StoryPart2HarryPotter = document.querySelector(".option-one-screen");
let StoryPart2Voldemort = document.querySelector(".option-two-screen");
let StoryPart3HarryPotter = document.querySelector(".option-one-end");
let StoryPart3Voldemort = document.querySelector(".option-two-end");
let HarryPotterButton = document.querySelector(".option-one");
let VoldemortButton = document.querySelector(".option-two");
let Picture = document.querySelector(".Harrypiture");
let photo = document.querySelector(".voldemortpicture");
// When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!

VoldemortButton.onclick=function(){
StoryPart2Voldemort.style.display="block";
    StoryPart2HarryPotter.style.display="none";
};


HarryPotterButton.onclick=function(){
StoryPart2HarryPotter.style.display="block";
    StoryPart2Voldemort.style.display="none";
};



Picture.onclick=function(){
StoryPart3HarryPotter.style.display="block";
 StoryPart3Voldemort.style.display="none";
     StoryPart2Voldemort.style.display="none";
    StoryPart2HarryPotter.style.display="none";
};

photo.onclick=function(){
StoryPart3Voldemort.style.display="block";
StoryPart3HarryPotter.style.display="none";    
    StoryPart2Voldemort.style.display="none";
    StoryPart2HarryPotter.style.display="none";
    
};
