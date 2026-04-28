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
    text: 'I spot a fully covered figure with a sword and immediately run. The figure chases me, getting closer as everyone else around me ignores the chaos. I reach the exit, hear a shing, and sprint outside. When I look back, the attacker is gone—but my right arm is missing, leaving only a bloody wound. I keep running until I collapse. I wake up later, bandaged, and return to my workplace—only to find it completely destroyed. Devastated, I go home and cry myself to sleep. My dreams replay happier memories, but quickly turn into the same traumatic attack. I wake up shaken and furious, realizing I can\'t ignore what happened.',
},

run2: {
    text: 'Over the next few weeks, I plan and build a high-tech prosthetic arm with an AI named Junior. After gathering parts and working nonstop, I complete it. Once attached, Junior activates as a hologram and introduces itself, insisting I train before heading out. After a month of training, Junior confirms I\'m ready and gives me a map. I prepare to leave the city for Frostveil.',
},

run3: {
    text: 'Before leaving, an old man named Roujin stops me. He reveals he\'s been waiting for me and challenges me to a fight. After I win, Roujin confirms I\'m ready and explains the truth: the one who took my arm is Wanabo, a general under Dante, and a major threat. Roujin warns me that I must defeat Wanabo to prevent disaster and tells me about three key locations: Grumoda Jungle, Frostveil City, and Lambda Central. With this knowledge, I set off on my journey alongside Junior.',
},

hold : {
    text: 'I spot a fully covered figure with a sword and immediately run. The figure chases me while everyone else keeps going about their work. I reach the exit, hear a shing, and sprint outside. When I look back, the attacker is gone—but my right arm is missing, leaving only a bloody wound. I keep running until I collapse.',
},

hold2 : {
    text: 'I wake up later, bandaged, and return to my workplace only to find it completely destroyed. Devastated, I go home and cry myself to sleep. My dreams show happier memories at first, but then turn into the same traumatic attack. I wake up shaken and furious, realizing I can\'t let it go. Over the next few weeks, I build a high-tech prosthetic arm with an AI named Junior. After gathering the parts and working nonstop, I finish it. Once attached, Junior appears as a hologram and tells me I must train before heading out.',
},

hold3 : {
    text: 'After a month of training, Junior confirms I\'m ready and gives me a map. I prepare to leave for Frostveil. Before I can go, an old man named Roujin stops me and challenges me to a fight. After I win, Roujin reveals the truth: the one who took my arm is Wanabo, one of Dante\'s generals, and a serious threat. Roujin warns me that I must defeat Wanabo to prevent disaster and tells me about three key locations: Grumoda Jungle, Frostveil City, and Lambda Central. With Junior by my side, I begin my journey.',
},

investigate : {
    text: 'I\'m frightened and full of questions after Wanabo kills my friend. I try to stall by asking who he is and what he wants, but Wanabo demands the valuable technology I have. When I lie, Wanabo attacks again and threatens both me and the factory. Seconds later, the building starts to collapse, and I barely escape before the roof comes down on me. I fall unconscious and wake up a month later in the hospital, where I learn I lost my arm and the facility was destroyed. A coworker gives me an augmentable arm, and when I attach it, an AI named Junior activates.',
},

investigate2 : {
    text: 'I return to the ruined building and ask Junior to scan for clues. Junior identifies the attacker as a dangerous assassin tied to a larger wave of tech crimes and points me toward an old man who might help. I follow the lead, meet Roujin, and eventually agree to train with him. During training, I learn that Wanabo is one of Dante\'s generals and is searching for powerful technology called the Fabricator. After two months, Roujin challenges me to a final fight. I win, and Roujin tells me I am ready to face Dante\'s forces. He warns me that Wanabo must be stopped and gives me three locations on the map: Grumoda Jungle, Frostveil City, and Lambda Central. With Junior by my side, I set out on my journey.',
},

Junior: {
    text: 'On his way to the first city, Jason realizes that it is just him and Junior, and he asks how he never got used, despite his one-of-a-kind personality, literally. He tells Jason that it was Jason\'s first creation, which created that spark that drove him to making his business in the first place. He intended to show the rest of the world, but Jason placed Junior in an office, and while working on another project Jason had, one of his older workers, Derek, thought he was scrapped and decided to put him in the backrooms, in a hard to see spot. Jason is irritated by that name, for Derek has always been well-meaning but just couldn\'t bother to think a little deeper. How will Jason decide to treat Junior now that he knows his backstory?',
    choices: ["Be Nice", "nice",
        "Be Mean", "mean"
    ]
},

JuniorMad: {
    text: 'Junior is sad about his existence as being just a tool, since his one of a kind sentience is just being thrown away. He still talks, but doesn\'t feel like Jason needs the help from him(No healing after battles and no tips).'
},

JuniorHappy: {
    text: 'Junior feels a companionship growing, and decides to help Jason through his story via healing him after battles and giving Jason hints during battle.'
},

EnterFrostVeil: {
text: 'Jason decides to brave the cold and travel to Frostveil city. The cold hits him before the sight, but when he finally reaches it, the city is beautiful to look at. It is serene with snow peppered all around, with icicles hanging from overhangs. Jason is glad he finally made it, and upon entering the gate, he has three options: to the left, there is a flickering light, to the middle there seems to be nothing down the street, and the right has a figure he can\'t make out in the distance.',
choices: ["Go left", "left",
    "Go middle", "middle",
    "Go right", "right"
]
},

Sealion: {
    text: 'Jason enters a noticeably lit alleyway when he gets attacked from the side. Beware! A sea lion having strikes as swift as a barracuda, and kicks that hit as hard as bruce lee, which Jason notes seems to be coming from springs in his tail area and his fins look more metallic than they do a mix of both, as if he had his whole fin replaced. "Who are ya? What business do you have here and most importantly with our boss huh!?!?" He charges at Jason and initiates a fight! Jason is now facing a Sea Lion.'
},

PolarBearer: {
    text: 'Jason enters a pitch dark path. Due to this, Junior shines some light for visibility. As Jason travels down this path, BAM! Jason gets encountered by a beefy shieldsman, the shield made of both medal scraps and covered in ice. The figure comes closer to view, and Jason sees the augmented arm and visor on a standing polar bear. "You look pretty frail! I thought I would be getting someone more...intimidating." He charges at Jason with a striking force but he evades and the battle initiates! Jason is now battling Polar Bearer.'
},

Penginja: {
    text: 'Jason finds a dimly lit figure across the way. "I was told that you would come, and here you are. You will not interfere with the master!" And he charges at Jason. Seeing him in the alternating street lights, Jason sees what seems to be...a penguin? Charging at Jason. Jason notices a blue light speeding towards him, and he narrowly avoids the attack, spotting it to be a kunai made of ice. His feet and his flippers are clearly a mix of both flesh and frost, but the end of his flippers seem to be showing a hole in them, as this may be how he conjures his kunai. "C\'mon now, I also heard you trained with Roujin, right?" Jason is now in combat with the penguinja.'
},

Hans: {
    text: 'Jason pushes through the freezing city, but he notices another figure in the distance, and they seem human. Jason cautiously approaches, but he gets a sense that they are not hostile, judging by their hurt posture and slow movements. He greets the human-figure, and he realizes that the person seems hurt. What will you do?',
    choices: ["Help Hans", "Ally",
        "Don\'t help Hans", "No Ally"
    ]
},

HansHelp: {
    text: ' Jason notices he is ready to collapse, and he remembers he has his arm, so maybe he can help him. Jason dashes to the figure, catching him before he falls and uses his arm to administer first aid. The figure thanks Jason, and announces himself as Hans. He says he has nowhere else to go, and Jason explains what his mission is. Hans lights up, and he yells on about how he hates Wanabo, and he joins him for his mission in taking down Wanabo. (New Member Acquired)'
},

HansNoHelp: {
    text: 'Jason decides that it\'s best to stay safe and prepared, so he continues his journey through the city alone.'
},

Kamiron: {
    description: 'Jason is pondering where the map piece is, when he is pushed back by some…force. He lands on his foot and knee, stabbing his blade into the ground. The fog clears, and Jason notices a lumbering figure, standing there with two axes made of ice. His hands have a ventilation system, which seems to be how he creates his twin axes, and he looks human, but is clearly a robot.',
    text: '“I hoped my augmented animals may stop or slow you down, but I have to do the job myself! Have at you!”'
},

EnterGrumodaJungle: {
    text: 'As he travels through this path, he ends up in this serene atmosphere, surrounded by organized plant colonies and beautiful lakes. It\'s almost peaceful…a strikingly different contrast from the previous places. Jason is now in the Grumoda Jungle. Despite the peaceful scenery, it is filled with deadly plant cyborg fighters, willing to defend their colonies to the death! Within this jungle Jason has three paths to choose from, which will he choose?',
    choices: ["Go left", "left",
        "Go middle", "middle",
        "Go right", "right"
    ]
    },

WeedWhip: {
    text: 'As Jason chooses the left path, he ends up in the area where the place is surrounded by sunlight and a beautiful clear, blue lake. As he takes the time to admire the scenery, *BAM,* a large plant arm whip charges at him. Jason dodged it and wondered what that was. "Huh? You actually dodged that?! You got lucky...cause I won\'t make that same mistake again. Face the power of my green whips! They were blessed by nature herself!!" Jason has initiated a battle with a Weedwhip! '
},
    
AttackFloresta: {
    text: 'As Jason chooses the middle path, he ends up in an area that is very dimly lit. However, it is surrounded with lovely trees and flowers. A figure charges at him with double batons in each hand. They strike Jason swiftly, he barely evades each of their strikes! "Hmph...you\'re fast, maybe I\'ll increase the tempo...who are you and what\'s your business here? If you have business with my boss, you might as well quit because you\'ll be 6 feet under in a few minutes!" Jason has initiated a battle with Attacker Floresta.'
},
    
BomberRegy: {
    text: 'As Jason chooses the right path, he ends up in a swampy-like area. It seems to be the least visually appealing area within the jungle. It\'s surrounded by mud and poisonous plants. As he carefully maneuvers around a massive mud bomb gets shot out near him which he quickly dodges. It seems to have been caused by some poisonous explosion within the near area. "Hehehe...lucky. The next bomb that comes out of my makeshift cannon will blow you away...literally. You\'re not getting anywhere near my boss punk!" Jason has initiated a battle with bomber Regy!'
},
    
Clerica: {
    text: 'As Jason progresses through the jungle, he finds a small clearing, likely a small plaza for a village. As he passes on by, he notices a robed figure walking around. Has Jason approached the figure?',
    choices: ["Talk to Clerica", "Ally",
        "Don\'t talk to Clerica", "No Ally"
    ]
},
    
ClericaTalk: {
    text: 'Jason approaches the clothed figure, and they greet him happily. Clerica: “Hello! My name is Clerica. I\'m skilled in both tech repair and medical assistance. I provide important healings to others. Now…what brings you here? Jason: “Nice to meet you. My name is Jason. I\'m trying to find this person. He\'s an assassin and he was the reason why my arm is where it\'s at…have you had any interactions with this person? Clerica walks around for a bit trying to think before she remembers. Clerica: “Y,know, I was in a pickle when this assassin looking person was wandering around the village, looking at the local flora flauna. I didn\'t tell him where the plants were. Due to this though, he ended up destroying my personal work space since he didn\'t hurt me or my church.” Due to these similar experiences, Clerica joins you on your adventure.'
},
    
ClericaNoTalk: {
    text: 'Jason decides to not interact with the figure, they seem sketchy and he doesn\'t want to be part of that.'
},
    
ShievaAndBrassKnuckles: {
    description: 'As Jason progresses through the jungle, he makes it to this beautiful area filled with a dynamic range of flowers and multiple crystal clear lakes with the only waterfall in the jungle. This also seems to be the end of the path of the jungle. However, as he walks towards the end of the path, a war fan with sharp blades seems to charge at him quickly, it grazes his skin, making him slightly bleed.',
    text: '"Hmph...I could have easily gotten your head...the amount of luck you must have."',
    description: 'The figure appears to be a woman, covering the bottom of her face with a teal mask. She wears a flexible body suit, fit for assassinating. Her war fan comes back to her, only for it to be revealed that she has two war fans. Another figure with a low and husky voice says back,',
    text: ''
},

EnterLambdaCentral: {
    text: 'Jason decides to take the path to Lambda central. The scenery changes wildly as he goes however, and he enters the dunes and eventually reaches a gateway. Looking past the gates, he sees the buildings are ruined and covered in sand. It\'s everywhere, but just enough to see that there are three paths. Jason looks to the right and the sand obscures his vision as to what\'s there, going forward puts Jason to a figure in the distance he can\'t make out and the left street seems just fine, but there seems to be an unshakeable feeling something is there. Which path does Jason take?',
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
