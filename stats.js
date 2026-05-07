export const dialogue = {


    intro: {
        text: 'So today, I opened a new manager position to work with Benjamin, since he has to watch over so much already. I put up some signs around the city looking for a new manager position, and just as I had hoped, three candidates came into the business. There\'s one Jessie Pinkman, who was so nervous I she was shaking like an active jackhammer, which wasn\'t a great quality for the job here. There was one Rowan Todd, who seemed great at the interview, but looking at his previous applications they usually ended on a sour note, which isn\'t good either. The the last participant James Loplin, however, seemed perfect. He answered every question about the job perfectly, and his qualifications and previous work places spoke highly of him. I decided that he would be the perfect candidate.',
    },


    hiring: {
        text: 'The three days goes by, and he\'s officially implemented in the job space. Everything was well at first: he\'s getting along with everyone, he is doing a good job managing not only employees but special requests as well, then I notice little inconsistencies. I notice how sometimes he calls off sick for days at a time, or when he thinks he\'s alone I hear him talking to himself. And during one of those sessions I hear the name Wanoba.\n It was the end of the day so I couldn\'t question, and when I got back home I did some research into the name. I couldn\'t find anything, so I had to pick up research tomorrow. Back at the business I\'m in my office, and the lights go out, so I go to investigate.',
    },


    firstchoice: {
        text: 'Walking through the hallways, there was some whisperings and mumblings as I walked to the back to fix the breaker. There was no light, so I had to stumble in the darkness for a second. I find he box, fix it, and head on my way back. I\'m about to leave, then I notice something in the corner of my eye. I look, and there is someone on the ground.\n "BEN!!" Before I can turn, I notice a dark figure shuffling in the dark, then they move in front of the breaker box. What am I gonna do?',
        choices: [
            ["Run", "run"],
            ["Stand your ground", "hold"], //Array for choices
            ["Ask for questions", "investigate"]
        ]
    },


    run: {
        text: 'I spot a fully covered figure with a sword and immediately run. The figure chases me, getting closer as everyone else around me ignores the chaos. I reach the exit, hear a shing, and sprint outside. When I look back, the attacker is gone—but my right arm is missing, leaving only a bloody wound. I keep running until I collapse. I wake up later, bandaged, and return to my workplace—only to find it completely destroyed. Devastated, I go home and cry myself to sleep. My dreams replay happier memories, but quickly turn into the same traumatic attack. I wake up shaken and furious, realizing I can\'t ignore what happened.',
    },


    run2: {
        text: 'Over the next few weeks, I plan and build a high-tech prosthetic arm with an AI named Junior. After gathering parts and working nonstop, I complete it. Once attached, Junior activates as a hologram and introduces itself, insisting I train before heading out. After a month of training, Junior confirms I\'m ready and gives me a map. I prepare to leave the city for Frostveil.',
    },


    run3: {
        text: 'Before leaving, an old man named Roujin stops me. He reveals he\'s been waiting for me and challenges me to a fight. After I win, Roujin confirms I\'m ready and explains the truth: the one who took my arm is Wanabo, a general under Dante, and a major threat. Roujin warns me that I must defeat Wanabo to prevent disaster and tells me about three key locations: Grumoda Jungle, Frostveil City, and Lambda Central. With this knowledge, I set off on my journey alongside Junior.',
    },


    hold: {
        text: 'Searing with rage, I charge at the figure, fists raised and in a defensive stance. The first swing almost connects, but he still dodges with speed I have never before seen in a human or cyborg. I quickly close the distance again, taking a mean uppercut. Again, he dodges, but something felt off. MY ARM! The arm is cleanly cut, right from the shoulder, and the shock of truth caused me to stumble. I notice him slowly walkign towards me, but the sounds of approaching people seemed to scare him off, as he dissappeared into a vent.The assassin vanishes into the ductwork, leaving only the sound of approaching boots. I felt my body become lighter, and I could hear my coworkers yelling encouragement for em to continue pushing. I finally reach outside the building, but when I do, my eyes become too heavy and I am knocked out.',
    },


    hold2: {
        text: 'I wake up later, bandaged, and return to my workplace only to find it completely destroyed. Devastated, I go home and cry myself to sleep. My dreams show happier memories at first, but then turn into the same traumatic attack. I wake up shaken and furious, realizing I can\'t let it go. Over the next few weeks, I build a high-tech prosthetic arm with an AI named Junior. After gathering the parts and working nonstop, I finish it. Once attached, Junior appears as a hologram and tells me I must train before heading out.',
    },


    hold3: {
        text: 'After a month of training, Junior confirms I\'m ready and gives me a map. I prepare to leave for Frostveil. Before I can go, an old man named Roujin stops me and challenges me to a fight. After I win, Roujin reveals the truth: the one who took my arm is Wanabo, one of Dante\'s generals, and a serious threat. Roujin warns me that I must defeat Wanabo to prevent disaster and tells me about three key locations: Grumoda Jungle, Frostveil City, and Lambda Central. With Junior by my side, I begin my journey.',
    },


    investigate: {
        text: 'I\'m frightened and full of questions after Wanabo kills my friend. I try to stall by asking who he is and what he wants, but Wanabo demands the valuable technology I have. When I lie, Wanabo attacks again and threatens both me and the factory. Seconds later, the building starts to collapse, and I barely escape before the roof comes down on me. I fall unconscious and wake up a month later in the hospital, where I learn I lost my arm and the facility was destroyed. A coworker gives me an augmentable arm, and when I attach it, an AI named Junior activates.',
    },


    investigate2: {
        text: 'I return to the ruined building and ask Junior to scan for clues. Junior identifies the attacker as a dangerous assassin tied to a larger wave of tech crimes and points me toward an old man who might help.',
    },


    investigate3: {
        text: 'I follow the lead, meet Roujin, and eventually agree to train with him. During training, I learn that Wanabo is one of Dante\'s generals and is searching for powerful technology called the Fabricator. After two months, Roujin challenges me to a final fight. I win, and Roujin tells me I am ready to face Dante\'s forces. He warns me that Wanabo must be stopped and gives me three locations on the map: Grumoda Jungle, Frostveil City, and Lambda Central. With Junior by my side, I set out on my journey.',
    },


    junior: {                               //junior interactions
        text: 'On his way to the first city, Jason realizes that it is just him and Junior, and he asks how he never got used, despite his one-of-a-kind personality, literally. He tells Jason that it was Jason\'s first creation, which created that spark that drove him to making his business in the first place. He intended to show the rest of the world, but Jason placed Junior in an office, and while working on another project Jason had, one of his older workers, Derek, thought he was scrapped and decided to put him in the backrooms, in a hard to see spot. Jason is irritated by that name, for Derek has always been well-meaning but just couldn\'t bother to think a little deeper. How will Jason decide to treat Junior now that he knows his backstory?',
        choices: [
            ["Treat Junior Nicely", "nice"],
            ["Treat Junior Badly", "mean"]
        ]
    },


    juniornice: {
        text: 'Junior feels a companionship growing, and decides to help Jason through his story via healing him after battles.'
    },


    juniormean: {
        text: 'Junior is sad about his existence as being just a tool, since his one of a kind sentience is just being thrown away. He still talks, but doesn\'t feel like Jason needs the help from him(No healing after battles and no tips).'
    },


    items: {
        text: 'Hey! There\'s some shiny things here! I should go get those real quick! (0/5)'
    },


    enterfrostveil: {                   //city and their enemy objects
        text: 'Jason decides to brave the cold and travel to Frostveil city. The cold hits him before the sight, but when he finally reaches it, the city is beautiful to look at. It is serene with snow peppered all around, with icicles hanging from overhangs. Jason is glad he finally made it, and upon entering the gate, he has three options: to the left, there is a flickering light, to the middle there seems to be nothing down the street, and the right has a figure he can\'t make out in the distance.',
        choices: [
            ["Go Left", "left"],
            ["Go Middle", "middle"],
            ["Go Right", "right"]
        ]
    },


    penguinja: {
        text: 'Jason finds a dimly lit figure across the way. "I was told that you would come, and here you are. You will not interfere with the master!" And he charges at Jason. Seeing him in the alternating street lights, Jason sees what seems to be...a penguin? Charging at Jason. Jason notices a blue light speeding towards him, and he narrowly avoids the attack, spotting it to be a kunai made of ice. His feet and his flippers are clearly a mix of both flesh and frost, but the end of his flippers seem to be showing a hole in them, as this may be how he conjures his kunai. "C\'mon now, I also heard you trained with Roujin, right?" Jason is now in combat with the penguinja.'
    },


    polarbearer: {
        text: 'Jason enters a pitch dark path. Due to this, Junior shines some light for visibility. As Jason travels down this path, BAM! Jason gets encountered by a beefy shieldsman, the shield made of both medal scraps and covered in ice. The figure comes closer to view, and Jason sees the augmented arm and visor on a standing polar bear. "You look pretty frail! I thought I would be getting someone more...intimidating." He charges at Jason with a striking force but he evades and the battle initiates! Jason is now battling Polar Bearer.'
    },


    sealion: {
        text: 'Jason enters a noticeably lit alleyway when he gets attacked from the side. Beware! A sea lion having strikes as swift as a barracuda, and kicks that hit as hard as bruce lee, which Jason notes seems to be coming from springs in his tail area and his fins look more metallic than they do a mix of both, as if he had his whole fin replaced. "Who are ya? What business do you have here and most importantly with our boss huh!?!?" He charges at Jason and initiates a fight! Jason is now facing a Sea Lion.'
    },


    hans: {
        text: 'Jason pushes through the freezing city, but he notices another figure in the distance, and they seem human. Jason cautiously approaches, but he gets a sense that they are not hostile, judging by their hurt posture and slow movements. He greets the human-figure, and he realizes that the person seems hurt. What will you do?',
        choices: [
            ["Help the figure", "Ally"],
            ["Don\'t help the figure", "No Ally"]
        ]
    },


    hanshelp: {
        text: 'Jason notices he is ready to collapse, and he remembers he has his arm, so maybe he can help him. Jason dashes to the figure, catching him before he falls and uses his arm to administer first aid. The figure thanks Jason, and announces himself as Hans. He says he has nowhere else to go, and Jason explains what his mission is. Hans lights up, and he yells on about how he hates Wanabo, and he joins him for his mission in taking down Wanabo. (New Member Acquired)'
    },


    hansnohelp: {
        text: 'Jason decides that it\'s best to stay safe and prepared, so he continues his journey through the city alone.'
    },


    kamiron: {
        text: 'I ponder where the map piece is, when I am pushed back by some…force. I land on my foot and knee, stabbing my blade into the ground. The fog clears, and I notice a lumbering figure, standing there with two axes made of ice. His hands have a ventilation system, which seems to be how he creates his twin axes, and he looks human, but is clearly a robot. “I hoped my augmented animals may stop or slow you down, but I have to do the job myself! Have at you!”'
    },


    enterlambda: {
        text: 'Jason decides to take the path to Lambda central. The scenery changes wildly as he goes however, and he enters the dunes and eventually reaches a gateway. Looking past the gates, he sees the buildings are ruined and covered in sand. It\'s everywhere, but just enough to see that there are three paths. Jason looks to the right and the sand obscures his vision as to what\'s there, going forward puts Jason to a figure in the distance he can\'t make out and the left street seems just fine, but there seems to be an unshakeable feeling something is there. Which path does Jason take?',
        choices: [
            ["Go Left", "left"],
            ["Go Middle", "middle"],
            ["Go Right", "right"]
        ]
    },


    mab: {
        text: 'I approach the figure, thinking it might be someone I can help—or someone who can help me. But as I get closer, I see the same glowing red eyes as Dante\'s grunts. There\'s a red band wrapped around its head, and its right arm is massive—too massive. Before I can back away, it notices me and charges like a wild animal. That\'s when I realize its “arm” isn\'t an arm at all—it\'s a giant club. Now I’m face to face with the M.A.B — the Mad Abandoned Berserker.'
    },


    asr: {
        text: 'I move through the deserted buildings, wondering how any of them are still standing after all this time. Everything feels wrong—too quiet, too untouched. Then, from the corner of a distant structure, something moves. A robot—but not like the others. Its head is gone, and sparks burst from the open neck, flickering violently. And then, without hesitation, it charges straight at me, like it can still see—like it can track me. It won\'t stop, so I have no choice—I have to scrap this rogue machine. I\'m now fighting the A.S.R — the Abandoned Headless Guard.'
    },


    ahg: {
        text: 'I cross the street and notice a cyborg body lying further down the road. One of its arms is missing, and it looks completely deactivated—harmless, or so I think. Curious, I step closer and pick up the spear beside it. A sudden buzz crackles to life: “YYYYYou touUUUched my prized poSSSSession… You shall diIIIIie!” The corpse jolts, and I\'m already stepping back as it reactivates. Now I\'m in combat with the A.H.G — the Abandoned Spear Ruiner. I go through this process three more times.'
    },


    bridgette: {
        text: 'Continuing through this desert, I spot a massive figure standing over a pile of other broken robots. Her presence alone is intimidating, and alarms are blaring in my head. What do I do?',
        choices: [
            ["Approach the pile", "Ally"],
            ["Play it safe", "No Ally"]
        ]
    },


    bridgettejoin: {
text: 'Despite what my senses tell me, I approach the giant pile of broken parts, curious yet fearful of what may occur now. The huge figure turns her head and notices me, then she slides down. "Hey there! Didn\'t know there was anyone else out here! I\'m Bridgette, always looking for the next battle! From what it looks like, you seems liek you are on a journey. Do tell me, what is it?" I tell Bridgette my story, and who I\'m after, and her face darkens a bit. "Wanoba, huh? I\'ve got some history with him too. I\'ll join you." (New Member Acquired)'
    },


bridgettenojoin: {
text: '"Something tells me that whoever that is, they are dangerous. I should go before they notice me. With that, I push on.'
},


boomera: {
    text: 'I approach what seems to be the end of the ruined city, and as I approach the gate, I notice a figure walking in from the right side of the street in front of the gate. "Halt, who goes there!" says the figure. I  notice that the figure is feminine, and she looks damaged, so maybe if I just pass bye without saying anything..."Hey, you aren\'t getting past this point, and for trying to do so you will face my wrath!"'
},


    entergrumoda: {
        text: 'As he travels through this path, he ends up in this serene atmosphere, surrounded by organized plant colonies and beautiful lakes. It\'s almost peaceful…a strikingly different contrast from the previous places. Jason is now in the Grumoda Jungle. Despite the peaceful scenery, it is filled with deadly plant cyborg fighters, willing to defend their colonies to the death! Within this jungle Jason has three paths to choose from, which will he choose?',
        choices: [
            ["Go Left", "left"],
            ["Go Middle", "middle"],
            ["Go Right", "right"]
        ]
    },


    weedwhip: {
        text: 'As I choose this path, I end up in an area surrounded by sunlight and a beautiful, clear blue lake. For a moment, I stop to take it all in—but suddenly, BAM, a massive plant whip lashes straight toward me. I barely dodge it and try to make sense of what just happened. "Huh? You actually dodged that?! You got lucky... because I won\'t make that same mistake again. Face the power of my green whips! They were blessed by nature herself!!" Looks like I\'ve just initiated a battle with a Weedwhip.'
    },


    attackerfloresta: {
        text: 'As I choose this path, I end up in a dimly lit area, surrounded by dense trees and blooming flowers. It\'s quiet—too quiet. Suddenly, a figure rushes at me, wielding double batons. Their strikes come fast—too fast—and I barely manage to evade them. "Hmph... you\'re fast. Maybe I\'ll increase the tempo... Who are you, and what\'s your business here? If you have business with my boss, you might as well quit, because you\'ll be six feet under in a few minutes!" I guess I\'ve just initiated a battle with Attacker Floresta.'
    },


    bomberregy: {
        text: 'As I choose this path, I find myself in a swamp-like area. It\'s easily the least appealing part of this jungle, surrounded by thick mud and poisonous plants. I move carefully, trying not to step on anything dangerous, when suddenly a massive mud bomb launches toward me. I barely dodge it as it explodes nearby. Whatever fired that wasn\'t natural. "Hehehe... lucky. The next bomb that comes out of my makeshift cannon will blow you away... literally. You\'re not getting anywhere near my boss, punk!" Looks like I\'ve just initiated a battle with Bomber Regy!'
    },


    clerica: {
        text: 'As I progress through the jungle, I come across a small clearing—almost like a plaza from a village. As I walk past, I notice a robed figure wandering nearby. Do I approach them?',
        choices: [
            ["Talk to Clerica", "Ally"],
            ["Don\'t talk to Clerica", "No Ally"]
        ]
    },


    clericatalk: {
        text: 'I approach the robed figure, and they greet me warmly. "Hello! My name is Clerica. I\'m skilled in both tech repair and medical assistance—I provide healing to those in need. Now… what brings you here?" I nod. "Nice to meet you. I\'m Jason. I\'m looking for someone—an assassin. He\'s the reason my arm ended up like this… have you seen anyone like that?" Clerica pauses, pacing slightly as she thinks, before something clicks. "Y\'know… I did run into someone like that. He was wandering around the village, looking at the local flora and fauna. I didn’t tell him where anything was. Because of that, he destroyed my personal workspace… but he didn\'t harm me or my church." With our shared experiences, Clerica decides to join me on my journey.'
    },


    clericanotalk: {
        text: 'I decide not to approach the figure. Something about them feels off, and I don\'t want to get involved in something risky right now.'
    },


    knucklesandshieva: {
        text: 'As I continue through the jungle, I arrive at a breathtaking area filled with vibrant flowers, crystal-clear lakes, and the only waterfall I\'ve seen here. It feels like the end of this path. But as I move forward, a sharp war fan suddenly flies toward me. I barely react in time—it grazes my skin, leaving a thin cut. "Hmph… I could have easily taken your head. You\'re luckier than you think." A woman steps forward, the lower half of her face covered by a teal mask, her body suited for swift, precise movement. The war fan returns to her hand—and I realize she has two. Then another voice cuts in, low and husky: "He won\'t be so lucky when I smash his skull!" Looks like I don\'t have a choice—I have to fight',
    },
    //city and their enemy objects end


cityprogression: {
    text: 'I continue through the area, looking for the end of this labryinth. Where will I continue now?',
choices: [
    ["Go Left", "left"],
    ["Go Middle", "middle"],
    ["Go Right", "right"]
]
},


    finishfrostveil: {                      //end city objects
        text: '"Phew, that was an intense fight" says I as I go to inspect the now deactivated cyborg body, but as I head over to grab what seems to be a disk in his chest compartment, the ice ends up cracking. I hurredly move past the gates, but I am reminded that I need that map piece to find the fabricator! I am ready to dive back in there, but Junior stops me, saying that he downloaded the copy of the disk, and we can continue on',
        choices: [
            ["Lamba Central", "city2"],
            ["Grumoda Jungle", "city3"]
        ]
    },


    finishlambda: {
        text: 'Phew… that was an intense fight," I mutter as I step over the pile of scrap metal that used to be a fully functioning cyborg. The city around me hums faintly, like it\'s still alive somehow. I kneel down to inspect the body, noticing a faint glow coming from a panel in its chest. As I reach in to pull out what looks like a data disk, the ground beneath me suddenly shifts—metal plates grinding and sinking like the whole street is unstable. I quickly jump back and make it past a nearby structure before anything collapses, but I stop, realizing I still need that map piece to find the fabricator. I\'m about to head back when Junior cuts in, telling me he already copied the disk\'s data. Guess we\'re good to move on.',
        choices: [
            ["Frostveil City", "city1"],
            ["Grumoda Jungle", "city3"]
        ]
    },


    finishgrumoda: {
        text: 'Phew… that was an intense fight," I say under my breath, wiping sweat off my face as I step toward the fallen enemy. The jungle feels alive again now that it\'s over—leaves rustling, distant sounds echoing all around me. I crouch down and spot something embedded in the creature\'s remains, a small disk partially covered by vines. As I reach for it, the ground suddenly gives slightly beneath me, and I hear a low rumble—like something beneath the soil is waking up. I quickly pull back and move to safer ground, but I hesitate, knowing I need that map piece to reach the fabricator. Just as I\'m about to risk it, Junior stops me, saying he already scanned and downloaded everything from it. That saves me the trouble—we can keep going.',
        choices: [
            ["Frostveil City", "city1"],
            ["Lambda Central", "city2"]
        ]
    },                                  //end city objects end
    mountainside: {
        text: 'Through completing the three cities, I finally unlock the pathway to the mountainside on my virtual map. When I arrive at the base of the mountain, I spot an entrance up ahead—it looks like some kind of laboratory. As I step inside, I\'m immediately met by enemies I\'ve faced before, but something\'s different. They\'re grouped together in mixed pairs, combining forces from each of the cities.'
    },

    toothandnail: {
        text: 'As I continue down the path through the laboratory, I start to feel a presence—something much stronger than the enemies I\'ve faced before. Suddenly, a man lunges out at me, nearly striking me with his dual-wield tekko-kagi. “Wow… you\'re a swift little one, aren\'t ya? So you\'re the one my boss was telling me about.” I steady myself and respond, “Your boss? Who do you work for?” He grins and says, “The one who made your arm disappear… should ring a bell, hmm?!” I take a step back, studying him more closely. He\'s wearing tight purple pants, a red robe, and black flats, with golden hair braided down his back and a white mask covering his eyes. “Enough talking…” he says, shifting into stance. “It\'s time for you to meet your maker. Come on!'
    },

    wanobafight: {
        text: 'As I continue down the path, I start to feel something… something familiar. A shallow, heavy presence settles around me, and I can feel myself getting nervous. Then, sudden laughter echoes through the hallway, and my heart drops. “It\'s him…” I mumble under my breath. In an instant, the assassin from before drops down from the ceiling. “Miss me?” he says. I freeze, but Clerica, Bridgette, and Hans quickly notice and start cheering me on. “C\'mon, Jason—we\'ve made it through entire cities and even tougher bosses. We can take this one!” Hearing them helps—I start to steady myself, even if the fear hasn\'t fully gone away. The assassin tilts his head slightly. “I see you\'ve made some friends. Not that it matters… this time, I won\'t just take your arm.” He pauses, then smirks. “I\'ll take your head instead.”'
    },

    wanobafighttwo: {
        text: 'Jason and his allies defeat Wanoba, but as the battle ends, I notice something out of the corner of my eye. “Huh? What is this?” Behind his body, I find a high-tech fabricator, and Junior seems almost drawn to it. “Bzzzzz… bzzzzz… I—nee-d device!” There\'s clearly some kind of connection between Junior and the fabricator, so I decide to merge them by attaching it to my augmented arm. With that, I can craft any item I want during battle. After defeating every enemy in the lab, I start to think it\'s finally over—but it isn\'t. As I leave, I still have to get through two more simple battles outside the lab, each one against three enemies.'
    },

    defeatwanoba: {
        text: 'As I finish the mini-battles, everyone finally starts to relax. “We did it! We defeated that horrible creature!” Clerica says, and everyone laughs. Bridgette adds, “Without teamwork, we wouldn\'t have done this, eh?” Hans nods and says, “That is correct. Each of us brought something important to the fight. We should be proud of ourselves.” I smile and say, “Thank you, everyone… really. Without your help, I don\'t know what I would have done. I\'m glad I got to go on this adventure with you guys! :>” We all share a group hug, then decide to head back home. Before leaving, I use the fabricator I just got to make a teleportation device, so if anything happens, I can bring my allies to me with a single click.'
    },


    Dantechoice: {
        text: 'After a long journey alone, I finally make it home and arrive at the gates of my hometown. At the entrance, I see a hulking man covered in cybernetic augmentation—legs, arms, torso, even his head. He\'s massive, blond, and has two blades strapped behind him. Dante looks at me and says, “I see you\'ve defeated my two closest generals. You\'ve got potential, and with that fabricator, you can do anything you want. Anything. Infinite food? A repair tool? Something to defend yourself? It\'s all right there in the palm of your hand. Join me, give up the fabricator, and I\'ll repay all the damage my generals caused. I\'ll set you up for life—in a mansion, with anything you need. What do you say?”',
        choices: [
            ["join him", "ending1"],
            ["reject him", "dantefight"]
        ]
    },

    joindante: {
        text: 'As I hear Dante\'s promise, I start to give in. I\'m tired of fighting, and knowing he\'s offering to fix the damage and give me a better life, I decide to hand over the fabricator and join him. Dante smiles wickedly, thanks me for it, and says my payment and facility will arrive in a week. So I wait. One week passes, then another, and nothing comes. My hope for his promise fades, and the world sinks deeper into darkness. With the fabricator in his hands, Dante uses it to threaten and corrupt political offices, and because of my cowardice, Junior won\'t even talk to me anymore. I\'m left with nothing. I\'ve reached a bad ending.'
    },

    Dantefight: {
        text: 'I refuse to give up something I earned to someone like you… I\'d rather die. Then I remember the teleporter I built weeks ago and call for help. Through the portals, Clerica, Bridgette, and Hans arrive. I tell them Dante wants the Fabricator and that we can’t let him have it. Hans steps forward and says we\'ve got this, and Dante just laughs and threatens us all. Jason has now initiated the final battle with Dante, and the Fabricator option appears, letting him create a gunslinger that fires a powerful beam at the boss.'
    },

    Dantedefeatoption: {
        text: 'I\'ve defeated the final boss of the game, and my allies and I cheer. “We did it! We defeated this big ole meanie!” Clerica says. Bridgette laughs and adds, “Hell yeah we did! I knew we were going to win anyway, since kicking monster butt is like second nature to us.” Everyone laughs, and then Hans speaks up. “I\'m glad to be back together, but now that we\'ve defeated the evil… what do we do now? Jason, matter of fact, what do you plan to do?”',
        choices: [
            ["Rebuild Facility?", "goodending1"],
            ["Create home?", "goodending2"]
        ]
    },

    Rebuildfacility: {
        text: 'After thinking long and hard, I decide that I want to rebuild the facility, which would allow me to go back to my normal life. I won\'t have the same employees as before, but I\'ll still be able to rebuild my previous life brick by brick. I would also make technological advancements with my Fabricator, helping make the world a better place and improving many people\'s lives. I have achieved the neutral ending.'
    },

    Createhome: {
        text: '“How would you guys feel if I created a home for us? It would be a place where people could visit us and see the one and only Fabricator. We could do a lot of good if we let people use it for the right things.” Everyone nods in agreement. Clerica says she wouldn\'t mind living with her battle mates, though Bridgette jokes that they probably shouldn\'t manifest any new evil. Everyone laughs. Hans then asks if they\'re all in this together and puts his hand in. “I\'m in,” he says. “You can count me in as well!” Bridgette adds, followed by Clerica saying, “Me three!” I smile and put my hand in too, and we all cheer, “YEAH!” I have achieved a good ending 2!'
    },
};


export const protagonist = {


    jason: {
        maxhealth: 100,
        doubledamage: 'Jason does double damage this turn!',
        attacks: [
            { text: 'Jason slashed his opponent for 15 damage!', damage: 150 },
            { text: 'Jason slashes twice and does 30 damage!', damage: 30 },
            { text: 'Jason uses the combined move: Fan Knuckles and does 35 damage!', damage: 35 },
            { text: 'Jason uses Frost Axe Throw and does 35 damage!', damage: 35 },
            { text: 'Jason uses Boomera\'s technique: Boomer Throw and does a whopping 35 damage!', damage: 35 },
            { text: 'Jason uses Tooth Nailing to slash his opponent so fast it ws like a claw, which does 45 damage!', damage: 45 },
            { text: 'Jason uses the Fabricator and lasers the enemy for a whopping 80 damage!', damage: 80 },
        ]
    },


    bridgette: {
        attacks: [
            { text: 'Bridgette hammered into the opponent for 10 damage!', damage: 10 },
            { text: 'Bridgette spiral spins into the opponent for 20 damage!', damage: 20 }
        ]
    },


    hans: {
        attacks: [
            { text: 'Hans pummelled his opponent for 20 damage!', damage: 20 },
            { text: 'Hans bicycle kicks the opponent for 30 damage!', damage: 30 }
        ]
    },


    clerica: {
        attacks: [
            {text: 'Clerica heals the party for 20 hp!', heal: 20}
    ]}
};


export const enemies = {


    sealion: {
        name: 'sealion',
        maxhealth: 75,
        attacks: [
            { text: 'Sealion roundhouse kicks for 12 damage!', damage: 12, }
        ]
    },


    polarbearer: {
        name: 'polarbearer',
        maxhealth: 120,
        attacks: [
            { text: 'Polarbearer slammed his shield and did 8 damage!', damage: 8 }
        ]
    },


    penguinja: {
        name: 'penguinja',
        maxhealth: 100,
        attacks: [
            { text: 'Opposing penguinja threw a kunai and did 10 damage!', damage: 10, }]


    },


    kamiron: {
        name: 'kamiron',
        maxhealth: 150,
        attacks: [
            { text: 'Kamiron strikes you for 15 damage!', damage: 15 },
            { text: 'Kamiron throws an ice axe at you for 30 damage!', damage: 30 },
        ]
    },


    mab: {
        name: 'M.A.B',
        maxhealth: 120,
        attacks: [
            { text: 'M.A.B swings his arm and deals 8 damage!', damage: 8 }
        ]
    },


    asr: {
        name: 'A.S.R',
        maxhealth: 75,
        attacks: [
            { text: 'A.S.R stabs you with his spear and did 12 damage!', damage: 12 }


        ]
    },


    ahg: {
        name: 'A.H.G',
        maxhealth: 100,
        attacks: [
            { text: 'Opposing A.H.G threw a sai and did 10 damage!', damage: 10 }
        ]
    },


    boomera: {
        name: 'Boomera',
        maxhealth: 150,
        attacks: [
            { text: 'Boomera cartwheel kicks you for 15 damage!', damage: 15 },
            { text: 'Boomera throws her boomerang and damages you for 30 damage!', damage: 30 },
        ]
    },


    weedwhip: {
        name: 'Weed Whip',
        maxhealth: 100,
        attacks: [
            { text: 'WeedWhip whips for 10 damage!', damage: 10 }
        ]
    },


    attackerfloresta: {
        name: 'Attacker Floresta',
        maxhealth: 75,
        attacks: [
            { text: 'Attacker Floresta handstand spin kicks you and did 12 damage!', damage: 12 }]
    },


    bomberregy: {
        name: 'Bomber Regy',
        maxhealth: 120,
        attacks: [
            { text: 'Bomber Regy fires his cannon and does 8 damage!', damage: 8 }]
    },


    knucklesandshieva: {
        name: 'Brass Knuckles and Shieva',
        maxhealth: 150,
        attacks: [
            { text: 'Boss Shieva and Brass Knuckles attack you for 15 damage!', damage: 15 },
            { text: 'Boss Shieva and Brass Knuckles use a combined move: Fan Knuckles and damages you for 30 damage!', damage: 30 },]
    },


    toothandnail: {
        name: 'Tooth and Nail',
        maxhealth: 150,
        attacks: [
            { text: 'Tooth and Nail slashes you for 15 damage!', damage: 15 },
            { text: 'Tooth and Nail uses his backflip kick attack and damages you for 30 damage!', damage: 30 },
        ]
    },


    wanoba: {
        name: 'Wanoba',
        maxhealth: 150,
        attacks: [
            { text: 'Wanoba slashes with his Kitana for 25 damage!', damage: 25 },
            { text: 'Wanoba does a multi flash slash and damages you for 40 damage!', damage: 40 },
        ]
    },


    dante: {
        name: 'Dante',
        maxhealth: 150,
        attacks: [
            { text: 'Dante strikes for 30 damage!', damage: 30 },
            { text: 'Dante unleashes his rapid, high speed thrusting palm strikes which damage you for a whopping 50 damage!', damage: 50 },
        ]
    }
};




export const items = {


    heal: {
        text: 'Jason takes the bottle and heals 50 hp!'
    },


    doubledamage: {
        text: 'Jason takes the bottle and will deal double damage next turn!'
    },
};



