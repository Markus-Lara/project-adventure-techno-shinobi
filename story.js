const storyContainer = document.getElementById("startexpo"); //the text box
var choice1=document.getElementById("choice1")
var choice2=document.getElementById("choice2")
var choice3=document.getElementById("choice3")



let story = ["intro"]; //sets a value for the whole array


const dialogue = {

    intro: {
text: 'So today, I opened a new manager position to work with Benjamin, since he has to watch over so much already. I put up some signs around the city looking for a new manager position, and just as I had hoped, three candidates came into the business. There\'s one Jessie Pinkman, who was so nervous I could see her shaking so much, which wasn\'t a great quality for the job here. There was one Rowan Todd, who seemed great at the inteerview but looking at his previous applications they usually ended on a sour note, which isn\'t good either. The the last participant James Loplin, however, seemed perfect. He answered every question about the job perfectly, and his qualifications and previous work places spoke highly of him. I decided that he would be the perfect candidate.',
},

firstchoice: {
    text: 'The three days goes by, and he\'s officially implemented in the job space. Everything was well at first: he\'s getting along with everyone, he is doing a good job managing not only employees but special requests as well, then I notice little inconsistencies. I notice how sometimes he calls off sick for days at a time, or when he thinks he\'s alone I hear him talking to himself. And during one of those sessions I hear the name Wanoba.\n It was the end of the day so I couldn\'t question, and when I got back home I did some research into the name. I couldn\'t find anything, so I had to pick up research tomorrow. Back at the business I\'m in my office, and the lights go out, so I go to investigate. Walking through the hallways, there was some whisperings and mumblings as I walked ot the back to fix the breaker. There was no light, so I had to stumble in the darkness for a second. I find he box, fix it, and head on my way back. I\'m about to leave, then I notice something in the corner of my eye. I look, and there is someone on the ground.\n "BEN!!" Before I can turn, I notice a dark figure shuffling in the dark, then they move in front of the breaker box. What am I gonna do?',
choices : [
    ["Run", "run"],
    ["Stand your ground", "hold"], //Array for choices
    ["Ask for questions", "investigate"]
    ]
},

run : {
    text: '',
},

run2: {
    text: '',
},

run3: {
    text: '',
},

hold : {
    text: '',
},

hold2 : {
    text: '',
},

hold3 : {
    text: '',
},

investigate : {
    text: '',
},

investigate2 : {
    text: '',
},

investigate3: {
    text: '',
},

citypath: {
text: '',
choices: ["Go left", "left",
    "Go middle", "middle",
    "Go right", "right"
]
},

finishcity1: {
    text: '',
    choices: ["Lamba Central", "city2",
        "Grumoda Jungle", "city3",
    ]
},

finishcity2: {
    text: '',
    choices: ["Frostveil City", "city1",
            "Grumoda Jungle", "city3"
    ]
},

finishcity3: {
    text: '',
    choices: ["Frostveil City", "city1",
        "Lambda Central", "city2"
    ]
},

mountainside: {
    text: ''
},

wanobafight: {
    text:''
},

Dantechoice: {
text: '',
choices: ["join him","ending1",
    "reject him", "dantefight"
]
},
};


storyContainer.addEventListener("click", function() {
    story.indexOf(dialogue.firstChoice)
    let presentStory = story[story.length-1] //presentStory is set to last index of history array
    if (dialogue[presentStory].choices) {
        choice1.innerHTML= dialogue[presentStory].choices[0][0]
        choice2.innerHTML= dialogue[presentStory].choices[1][0]
        choice3.innerHTML= dialogue[presentStory].choices[2][0]
      choice1.style.display='inline-block'
       choice2.style.display='inline-block'
    choice3.style.display='inline-block'
    }

    if (dialogue.[presentStory].intro) {
        story
    }
storyContainer.innerHTML = dialogue[presentStory].text; //sets text to the dialogue array, and looks inside the intro
});