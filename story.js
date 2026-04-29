const storyContainer = document.getElementById("startexpo"); //the text box
var choice1 = document.getElementById("choice1")
var choice2 = document.getElementById("choice2")
var choice3 = document.getElementById("choice3")
const scene= document.getElementById("prologue")
var playerpath = ""
var juniorpath = ""
var dmgpotioncount = 0
var healpotioncount = 0


let story = ["intro"]; //sets a value for the whole array


const dialogue = {


    intro: {
text: 'So today, I opened a new manager position to work with Benjamin, since he has to watch over so much already. I put up some signs around the city looking for a new manager position, and just as I had hoped, three candidates came into the business. There\'s one Jessie Pinkman, who was so nervous I could see her shaking so much, which wasn\'t a great quality for the job here. There was one Rowan Todd, who seemed great at the inteerview but looking at his previous applications they usually ended on a sour note, which isn\'t good either. The the last participant James Loplin, however, seemed perfect. He answered every question about the job perfectly, and his qualifications and previous work places spoke highly of him. I decided that he would be the perfect candidate.The three days goes by, and he\'s officially implemented in the job space. Everything was well at first: he\'s getting along with everyone, he is doing a good job managing not only employees but special requests as well, then I notice little inconsistencies. I notice how sometimes he calls off sick for days at a time, or when he thinks he\'s alone I hear him talking to himself. And during one of those sessions I hear the name Wanoba.\n It was the end of the day so I couldn\'t question, and when I got back home I did some research into the name. I couldn\'t find anything, so I had to pick up research tomorrow. Back at the business I\'m in my office, and the lights go out, so I go to investigate.',
},


firstchoice: {
    text: 'Walking through the hallways, there was some whisperings and mumblings as I walked to the back to fix the breaker. There was no light, so I had to stumble in the darkness for a second. I find he box, fix it, and head on my way back. I\'m about to leave, then I notice something in the corner of my eye. I look, and there is someone on the ground.\n "BEN!!" Before I can turn, I notice a dark figure shuffling in the dark, then they move in front of the breaker box. What am I gonna do?',
choices : [
    ["Run", "run"],
    ["Stand your ground", "hold"], //Array for choices
    ["Ask for questions", "investigate"]
    ]
},


run : {
    text: 'I am running',
},


run2: {
    text: 'I continue running',
},


run3: {
    text: 'I must continue running',
},


hold : {
    text: 'I am standing my ground',
},


hold2 : {
    text: 'I continue holding my ground',
},


hold3 : {
    text: 'I must continue holding my ground',
},


investigate : {
    text: 'I ask questions',
},


investigate2 : {
    text: 'I continue to ask questions',
},


investigate3: {
    text: 'I must continue asking questions',
},


junior: {                               //junior interactions
    text: 'Treat Junior nicely?',
    choices: [
        ["Treat Junior Nicely", "nice"],
        ["Treat Junior Badly", "mean"]
]
},


juniornice: {
    text: 'that was nice'
},


juniormean: {
    text: 'that was mean of you'
},



enterfrostveil: {                   //city and their enemy objects
text: 'The next step',
choices: [
    ["Go Left", "left"],
    ["Go Middle", "middle"],
    ["Go Right", "right"]
]
},


penguinja: {
    text:'Hello dere'
},


polarbearer: {
    text:'why you little'
},


sealion: {
    text: 'you like jazz?'
},


enterlambda: {
    text: 'Got somwhere',
    choices: [
        ["Go Left", "left"],
        ["Go Middle", "middle"],
        ["Go Right", "right"]
    ]
    },


        mab: {
text: 'Suddenly'
        },


        asr: {
text: 'getting better'
        },


        ahg: {
text: 'getting better'
        },


    entergrumoda: {
        text: 'Keep going',
        choices: [
            ["Go Left", "left"],
            ["Go Middle", "middle"],
            ["Go Right", "right"]
        ]
        },                          //city and their enemy objects end


finishcity1: {                      //end city objects
    text: '',
    choices: [
        ["Lamba Central", "city2"],
        ["Grumoda Jungle", "city3"]
    ]
},


finishcity2: {
    text: '',
    choices: [
        ["Frostveil City", "city1"],
            ["Grumoda Jungle", "city3"]
    ]
},


finishcity3: {
    text: '',
    choices: [
        ["Frostveil City", "city1"],
        ["Lambda Central", "city2"]
    ]
},                                  //end city objects end


mountainside: {
    text: ''
},


wanobafight: {
    text:''
},


Dantechoice: {
text: '',
choices: [
    ["join him","ending1"],
    ["reject him", "dantefight"]
]
},
};


var presentStory = story[story.length-1] //presentStory is set to last index of story array


storyContainer.addEventListener("click", function() {
    presentStory = story[story.length-1]
    storyContainer.innerHTML = dialogue[presentStory].text; //sets text to the dialogue array, and looks inside the intro
   
    if (presentStory==="intro")  //if text is displaying intro in the dialogue object, it runs to the firstchoice object
        {story.push("firstchoice")
            scene.style.backgroundImage = 'url(images/hallwayprologue.png)'
storyContainer.innerHTML = dialogue[presentStory].text }


else if (presentStory==="firstchoice")
{scene.style.backgroundImage = 'url(images/wanobaprologue.png)' }
   
    else if(presentStory==="run")                                  //run scene
    {story.push("run2")
        scene.style.backgroundImage = 'url(images/runmentor.png)'
        scene.style.backgroundPosition = 'center'
        presentStory = story[story.length-1]
storyContainer.innerHTML = dialogue[presentStory].text
    }


    else if(presentStory==="run2")
    {story.push("run3")
        presentStory = story[story.length-1]
        storyContainer.innerHTML = dialogue[presentStory].text
     }


    else if(presentStory==="run3")
    {story.push("junior")
        scene.style.backgroundImage = 'url(images/junior.png)'
        scene.style.backgroundPosition = 'center'
        presentStory = story[story.length-1]
storyContainer.innerHTML = dialogue[presentStory].text
}


else if(presentStory==="hold")                                  //Prologue Wanabo encounter scene
    {story.push("hold2")
        scene.style.backgroundImage = 'url(images/normalmentor.png)'
        presentStory = story[story.length-1]
storyContainer.innerHTML = dialogue[presentStory].text
    }


    else if(presentStory==="hold2")
    {story.push("hold3")
        scene.style.backgroundImage = 'url(images/normalmentor.png)'
        presentStory = story[story.length-1]
        storyContainer.innerHTML = dialogue[presentStory].text
     }


    else if(presentStory==="hold3")
    {story.push("junior")
     scene.style.backgroundImage = 'url(images/junior.png)'
     scene.style.backgroundPosition = 'center'
        presentStory = story[story.length-1]
storyContainer.innerHTML = dialogue[presentStory].text
    }


    else if(presentStory==="investigate")                        //investigate scene
    {story.push("investigate2")
        scene.style.backgroundImage = 'url(images/normalmentor.png)'
        presentStory = story[story.length-1]
storyContainer.innerHTML = dialogue[presentStory].text
    }


    else if(presentStory==="investigate2")
    {story.push("investigate3")
        scene.style.backgroundImage = 'url(images/normalmentor.png)'
        presentStory = story[story.length-1]
        storyContainer.innerHTML = dialogue[presentStory].text
     }


    else if(presentStory==="investigate3")
    {story.push("junior")
        scene.style.backgroundImage = 'url(images/junior.png)'
        scene.style.backgroundPosition = 'center'
        presentStory = story[story.length-1]
storyContainer.innerHTML = dialogue[presentStory].text
    }


    else if(presentStory === "junior") {                        //junior scene
    scene.style.backgroundImage = 'url(images/junior.png)'
    presentStory = story[story.length-1]
    storyContainer.innerHTML = dialogue[presentStory].text
}


if (presentStory === "juniornice") {                               //junior nice
if (playerpath === "run") {
    story.push("enterfrostveil")
    scene.style.backgroundImage = 'url(images/FrostveilCity.png)'
    presentStory = story[story.length-1]
storyContainer.innerHTML = dialogue[presentStory].text
}


else if(playerpath === "hold") {
    story.push("enterlambda")
    scene.style.backgroundImage = 'url(images/LambdaCentral.png)'
    presentStory = story[story.length-1]
storyContainer.innerHTML = dialogue[presentStory].text
}


else if(playerpath === "investigate"){
    story.push("entergrumoda")
    scene.style.backgroundImage = 'url(images/GrumodaJungle.png)'
    presentStory = story[story.length-1]
storyContainer.innerHTML = dialogue[presentStory].text
}
presentStory = story[story.length-1]
storyContainer.innerHTML = dialogue[presentStory].text
}


if (presentStory === "juniormean") {                            //junior mean
    if (playerpath === "run") {
        story.push("enterfrostveil")
        scene.style.backgroundImage = 'url(images/FrostveilCity.png)'
        presentStory = story[story.length-1]
    storyContainer.innerHTML = dialogue[presentStory].text
    }
   
    else if(playerpath === "hold") {
        story.push("enterlambda")
        scene.style.backgroundImage = 'url(images/LambdaCentral.png)'
        presentStory = story[story.length-1]
    storyContainer.innerHTML = dialogue[presentStory].text
    }
   
    else if(playerpath === "investigate"){
        story.push("entergrumoda")
        scene.style.backgroundImage = 'url(images/GrumodaJungle.png)'
        presentStory = story[story.length-1]
    storyContainer.innerHTML = dialogue[presentStory].text
    }
    presentStory = story[story.length-1]
    storyContainer.innerHTML = dialogue[presentStory].text
}


    if (dialogue[presentStory].choices) { //checks current array index for choices


if (dialogue[presentStory].choices.length === 3) {
        choice1.innerHTML= dialogue[presentStory].choices[0][0]
        choice2.innerHTML= dialogue[presentStory].choices[1][0]
        choice3.innerHTML= dialogue[presentStory].choices[2][0]
      choice1.style.display='inline-block'
       choice2.style.display='inline-block'
    choice3.style.display='inline-block'
    }




    else if (dialogue[presentStory].choices.length === 2) {
        choice1.innerHTML= dialogue[presentStory].choices[0][0]
        choice2.innerHTML= dialogue[presentStory].choices[1][0]
      choice1.style.display='inline-block'
       choice2.style.display='inline-block'
    choice3.style.display='none'
    }
}


else {
        choice1.style.display='none'
        choice2.style.display='none'
     choice3.style.display='none'
    }
});


choice1.addEventListener("click", function() {       //choice 1 function
 if (presentStory === "firstchoice"){
    story.push("run")
    playerpath = "run"}


else if (presentStory === "junior") {
story.push("juniornice")
juniorpath = "nice"  
}




if (presentStory === "enterfrostveil") {
        story.push("penguinja")
    }


 presentStory = story[story.length-1]
    choice1.style.display='none'
       choice2.style.display='none'
    choice3.style.display='none'
    storyContainer.innerHTML = dialogue[presentStory].text
    });


    choice2.addEventListener("click", function() { //choice 2 function
        if (presentStory === "firstchoice") {
    story.push("hold")
    playerpath = "hold"}


 else if (presentStory === "junior") {
story.push("juniormean")
juniorpath = "mean"
    }


else if(playerpath === "hold") {                                //checks playerpath based on previous choices
story.push("enterlambda")
scene.style.backgroundImage = 'url(images/LambdaCentral.png)'
presentStory = story[story.length-1]
storyContainer.innerHTML = dialogue[presentStory].text
    }


else if (presentStory === "enterfrostveil") {
        story.push("polarbearer")
    }


    presentStory = story[story.length-1]
        choice1.style.display='none'
       choice2.style.display='none'
    choice3.style.display='none'
    storyContainer.innerHTML = dialogue[presentStory].text
    });


    choice3.addEventListener("click", function() { //choice 3 function
       if (presentStory === "firstchoice") {
        story.push("investigate")
    playerpath = "investigate"
}


else if (playerpath === "investigate") {                    //checks playerpath based on previous choices
story.push("entergrumoda")
scene.style.backgroundImage = 'url(images/GrumodaJungle.png)'
presentStory = story[story.length-1]
storyContainer.innerHTML = dialogue[presentStory].text
    }


else if(presentStory === "enterfrostveil") {
        story.push("sealion")
    }
        presentStory = story[story.length-1]
        choice1.style.display='none'
       choice2.style.display='none'
    choice3.style.display='none'
    storyContainer.innerHTML = dialogue[presentStory].text
    });



