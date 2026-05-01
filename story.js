import { dialogue, protagonist, enemies, items } from "./stats.js"
const storyContainer = document.getElementById("startexpo"); //the text box

var choice1 = document.getElementById("choice1")

var choice2 = document.getElementById("choice2")

var choice3 = document.getElementById("choice3")

var item1 = document.getElementById("item1")

var item2 = document.getElementById("item2")

var item3 = document.getElementById("item3")

var enemy1 = document.getElementById("enemy1")

var enemy2 = document.getElementById("enemy2")

var enemy3 = document.getElementById("enemy3")

const slash = document.getElementById("slash")

const inventory = document.getElementById("inventory")

const skills = document.getElementById("skills")

const fabricator = document.getElementById("fabricator")

const scene = document.getElementById("prologue")

const jasonhp = document.getElementById("jasonhp")

const hanshp = document.getElementById("hanshp")

const bridgettehp = document.getElementById("bridgettehp")

const clerica = document.getElementById("clericahp")

const enemy1hp = document.getElementById("enemy1hp")

const enemy2hp = document.getElementById("enemy2hp")

const enemy3hp = document.getElementById("enemy3hp")

const healitembutton = document.getElementById("healing")

const damageitembutton = document.getElementById("damage")

var playerpath = ""

var juniorpath = ""

var healingpotioncount = 0

var dmgpotioncount = 0

var gathereditems = 0

var hasfabricator = false

var battleactive = false

var dmgmodifier = false

var playerturn = true

var enemytype;

var remainingenemyhp;

var jasonspa;

var jasonhealth = protagonist["jason"].maxhealth

var hanshealth = protagonist["hans"].maxhealth

var bridgettehealth = protagonist["bridgette"].maxhealth

var clericahealth = protagonist["clerica"].maxhealth

let story = ["intro"]; //sets a value for the whole array

var presentStory = story[story.length - 1] //presentStory is set to last index of story array



storyContainer.addEventListener("click", function () {
    presentStory = story[story.length - 1]
    storyContainer.innerHTML = dialogue[presentStory].text; //sets text to the dialogue array, and looks inside the intro
    scene.style.backgroundImage = 'url(images/(images/hallwayprologue.png)'
    if (presentStory === "intro") {  //if text is displaying intro in the dialogue object, it runs to the firstchoice object
        story.push("hiring")
        scene.style.backgroundImage = 'url(images/desk.png)'
        storyContainer.innerHTML = dialogue[presentStory].text
    }

    else if (presentStory === "hiring") {
        story.push("firstchoice")
        presentStory = story[story.length - 1]
        scene.style.backgroundImage = 'url(images/wanobaprologue.png)'
        storyContainer.innerHTML = dialogue[presentStory].text
    }

    else if (presentStory === "firstchoice") {
        scene.style.backgroundImage = 'url(images/wanobaprologue.png)'
    }

    else if (presentStory === "run") {                                 //run scene
        story.push("run2")
        scene.style.backgroundImage = 'url(images/runmentor.png)'
        scene.style.backgroundPosition = 'center'
        presentStory = story[story.length - 1]

        storyContainer.innerHTML = dialogue[presentStory].text
    }

    else if (presentStory === "run2") {
        story.push("run3")
        presentStory = story[story.length - 1]

        storyContainer.innerHTML = dialogue[presentStory].text
    }

    else if (presentStory === "run3") {
        story.push("junior")
        scene.style.backgroundImage = 'url(images/junior.png)'
        presentStory = story[story.length - 1]

        storyContainer.innerHTML = dialogue[presentStory].text
    }

    else if (presentStory === "hold") {                                //Prologue Wanabo encounter scene
        story.push("hold2")
        scene.style.backgroundImage = 'url(images/normalmentor.png)'
        presentStory = story[story.length - 1]

        storyContainer.innerHTML = dialogue[presentStory].text
    }

    else if (presentStory === "hold2") {
        story.push("hold3")
        scene.style.backgroundImage = 'url(images/normalmentor.png)'
        presentStory = story[story.length - 1]

        storyContainer.innerHTML = dialogue[presentStory].text
    }

    else if (presentStory === "hold3") {
        story.push("junior")
        scene.style.backgroundImage = 'url(images/junior.png)'
        presentStory = story[story.length - 1]

        storyContainer.innerHTML = dialogue[presentStory].text
    }

    else if (presentStory === "investigate") {                       //investigate scene
        story.push("investigate2")
        scene.style.backgroundImage = 'url(images/normalmentor.png)'
        presentStory = story[story.length - 1]

        storyContainer.innerHTML = dialogue[presentStory].text
    }

    else if (presentStory === "investigate2") {
        story.push("investigate3")
        scene.style.backgroundImage = 'url(images/normalmentor.png)'
        presentStory = story[story.length - 1]

        storyContainer.innerHTML = dialogue[presentStory].text
    }

    else if (presentStory === "investigate3") {
        story.push("junior")
        scene.style.backgroundImage = 'url(images/junior.png)'
        presentStory = story[story.length - 1]

        storyContainer.innerHTML = dialogue[presentStory].text
    }

    else if (presentStory === "junior") {                        //junior scene
        scene.style.backgroundImage = 'url(images/junior.png)'
        presentStory = story[story.length - 1]

        storyContainer.innerHTML = dialogue[presentStory].text
    }

    if (presentStory === "sealion") {                               ///start battles
        story.push("battlestart")
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
        enemy1hp.style.display = 'inline-block'
        jasonhp.style.display = 'inline-block'
        slash.style.display = 'inline-block'
        inventory.style.display = 'inline-block'
        skills.style.display = 'inline-block'
        if (hasfabricator === false)
            fabricator.style.display = 'none'
        else {
            fabricator.style.display = 'inline-block'
        }
        enemy1.src = "images/sealion.png"
        enemy1.style.height = "300px"
    }

    else if (presentStory === "polarbearer") {
        story.push("battlestart")
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
        enemy1hp.style.display = 'inline-block'
        jasonhp.style.display = 'inline-block'
        slash.style.display = 'inline-block'
        inventory.style.display = 'inline-block'
        skills.style.display = 'inline-block'
        if (hasfabricator == false)
            fabricator.style.display = 'none'
        else {
            fabricator.style.display = 'inline-block'
        }
        enemy1.src = "images/polarbearer.png"
        enemy1.style.height = "300px"
    }

    else if (presentStory === "penguinja") {
        story.push("battlestart")
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
        enemy1hp.style.display = 'inline-block'
        jasonhp.style.display = 'inline-block'
        slash.style.display = 'inline-block'
        inventory.style.display = 'inline-block'
        skills.style.display = 'inline-block'
        if (hasfabricator === false)
            fabricator.style.display = 'none'
        else {
            fabricator.style.display = 'inline-block'
        }
        enemy1.src = "images/penguinja.png"
        enemy1.style.height = "300px"
    }

    else if (presentStory === "juniornice") {                               //junior nice
        if (playerpath === "run") {
            story.push("items")
            scene.style.backgroundImage = 'url(images/FrostveilCity.png)'
            presentStory = story[story.length - 1]

            storyContainer.innerHTML = dialogue[presentStory].text
        }

        else if (playerpath === "hold") {
            story.push("items")
            scene.style.backgroundImage = 'url(images/LambdaCentral.png)'
            presentStory = story[story.length - 1]

            storyContainer.innerHTML = dialogue[presentStory].text
        }

        else if (playerpath === "investigate") {
            story.push("items")
            scene.style.backgroundImage = 'url(images/GrumodaJungle.png)'
            presentStory = story[story.length - 1]

            storyContainer.innerHTML = dialogue[presentStory].text
        }
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
    }

    if (presentStory === "juniormean") {                            //junior mean
        if (playerpath === "run") {
            story.push("items")
            scene.style.backgroundImage = 'url(images/FrostveilCity.png)'
            presentStory = story[story.length - 1]

            storyContainer.innerHTML = dialogue[presentStory].text
        }

        else if (playerpath === "hold") {
            story.push("items")
            scene.style.backgroundImage = 'url(images/LambdaCentral.png)'
            presentStory = story[story.length - 1]

            storyContainer.innerHTML = dialogue[presentStory].text
        }


        else if (playerpath === "investigate") {
            story.push("items")
            scene.style.backgroundImage = 'url(images/GrumodaJungle.png)'
            presentStory = story[story.length - 1]

            storyContainer.innerHTML = dialogue[presentStory].text
        }
        presentStory = story[story.length - 1]

        storyContainer.innerHTML = dialogue[presentStory].text
    }

    if (battleactive) {
        storyContainer.disabled
    }


    if (gathereditems === 3) {
        if (playerpath === "run") {
            story.push("enterfrostveil")
            presentStory = story[story.length - 1]
            storyContainer.innerHTML = dialogue[presentStory].text
        }
        else if (playerpath === "hold") {
            story.push("enterlambda")
            presentStory = story[story.length - 1]
            storyContainer.innerHTML = dialogue[presentStory].text
        }
        else if (playerpath === "investigate") {
            story.push("entergrumoda")
            presentStory = story[story.length - 1]
            storyContainer.innerHTML = dialogue[presentStory].text
        }
        gathereditems = 0
        console.log("gathereditems", gathereditems)
    }

    else if (presentStory === "items")

        if (presentStory === "items") {                              //items function
            item1.style.visibility = 'visible'
            item2.style.visibility = 'visible'
            item3.style.visibility = 'visible'
        }


    if (dialogue[presentStory].choices) { //checks current array index for choices
        if (dialogue[presentStory].choices.length === 3) {
            choice1.innerHTML = dialogue[presentStory].choices[0][0]
            choice2.innerHTML = dialogue[presentStory].choices[1][0]
            choice3.innerHTML = dialogue[presentStory].choices[2][0]

            choice1.style.display = 'inline-block'
            choice2.style.display = 'inline-block'
            choice3.style.display = 'inline-block'
        }

        else if (dialogue[presentStory].choices.length === 2) {

            choice1.innerHTML = dialogue[presentStory].choices[0][0]
            choice2.innerHTML = dialogue[presentStory].choices[1][0]

            choice1.style.display = 'inline-block'
            choice2.style.display = 'inline-block'
            choice3.style.display = 'none'
        }
    }

    else {
        choice1.style.display = 'none'
        choice2.style.display = 'none'
        choice3.style.display = 'none'
    }
});



choice1.addEventListener("click", function () {       //choice 1 function
    if (presentStory === "firstchoice") {
        story.push("run")
        playerpath = "run"
        console.log("run path chosen")
    }

    else if (presentStory === "junior") {
        story.push("juniornice")
        juniorpath = "nice"
        console.log("Junior will remember this")
    }

    if (presentStory === "enterfrostveil") {
        story.push("penguinja")
        presentStory = story[story.length - 1]
        localStorage.setItem("bookmark", presentStory)
        storyContainer.innerHTML = dialogue[presentStory].text
        choice1.style.display = 'none'
        choice2.style.display = 'none'
        choice3.style.display = 'none'
        beginbattle()
    }

    presentStory = story[story.length - 1]
    choice1.style.display = 'none'
    choice2.style.display = 'none'
    choice3.style.display = 'none'

    storyContainer.innerHTML = dialogue[presentStory].text

});



choice2.addEventListener("click", function () { //choice 2 function
    if (presentStory === "firstchoice") {
        story.push("hold")
        playerpath = "hold"
        console.log("Fight path chosen")
    }

    else if (presentStory === "junior") {
        story.push("juniormean")
        juniorpath = "mean"
        console.log("You made Junior angry")
    }

    else if (playerpath === "hold") {                                //checks playerpath based on previous choices
        story.push("enterlambda")
        scene.style.backgroundImage = 'url(images/LambdaCentral.png)'
        presentStory = story[story.length - 1]

        storyContainer.innerHTML = dialogue[presentStory].text
    }

    else if (presentStory === "enterfrostveil") {
        story.push("polarbearer")
        presentStory = story[story.length - 1]
        localStorage.setItem("bookmark", presentStory)
        storyContainer.innerHTML = dialogue[presentStory].text
        choice1.style.display = 'none'
        choice2.style.display = 'none'
        choice3.style.display = 'none'
        beginbattle()
    }
    presentStory = story[story.length - 1]
    choice1.style.display = 'none'
    choice2.style.display = 'none'
    choice3.style.display = 'none'

    storyContainer.innerHTML = dialogue[presentStory].text
});



choice3.addEventListener("click", function () {          //choice 3 function
    if (presentStory === "firstchoice") {
        story.push("investigate")
        playerpath = "investigate"
        console.log("Investigate path chosen")
    }

    else if (playerpath === "investigate") {                    //checks playerpath based on previous choices

        story.push("entergrumoda")
        scene.style.backgroundImage = 'url(images/GrumodaJungle.png)'
        presentStory = story[story.length - 1]

        storyContainer.innerHTML = dialogue[presentStory].text
    }

    else if (presentStory === "enterfrostveil") {
        story.push("sealion")
        presentStory = story[story.length - 1]
        localStorage.setItem("bookmark", presentStory)
        storyContainer.innerHTML = dialogue[presentStory].text
        choice1.style.display = 'none'
        choice2.style.display = 'none'
        choice3.style.display = 'none'
        beginbattle()
    }

    presentStory = story[story.length - 1]
    choice1.style.display = 'none'
    choice2.style.display = 'none'
    choice3.style.display = 'none'

    storyContainer.innerHTML = dialogue[presentStory].text
});



item1.addEventListener("click", function () {             //item functions here
    story.push("gothealingitem")
    healingpotioncount++
    gathereditems++
    presentStory = story[story.length - 1]
    item1.style.visibility = 'hidden'

    storyContainer.innerHTML = dialogue[presentStory].text
    console.log('healing potions:', healingpotioncount)
    console.log('gathered items:', gathereditems)
});



item2.addEventListener("click", function () { //item functions here
    story.push("gothealingitem")
    healingpotioncount++
    gathereditems++
    presentStory = story[story.length - 1]
    item2.style.visibility = 'hidden'

    storyContainer.innerHTML = dialogue[presentStory].text
    console.log('healing potions:', healingpotioncount)
    console.log('gathered items:', gathereditems)
});

item3.addEventListener("click", function () { //item functions here
    story.push("gotdmgitem")
    dmgpotioncount++
    gathereditems++
    presentStory = story[story.length - 1]
    item3.style.visibility = 'hidden'

    storyContainer.innerHTML = dialogue[presentStory].text
    console.log('dmg potions:', dmgpotioncount)
    console.log('gathered items:', gathereditems)
});

function beginbattle() {                            ///battle logic
    if (localStorage.getItem("bookmark") !== null) {
        enemytype = localStorage.getItem("bookmark")
        remainingenemyhp = enemies[enemytype].maxhealth
        enemy1hp.innerHTML = remainingenemyhp + "/" + enemies[enemytype].maxhealth
        jasonhp.innerHTML = "JasonHP: " + jasonhealth + "/" + protagonist["jason"].maxhealth
        battleactive = true
    }
};

slash.addEventListener("click", function () {
    let attack = protagonist["jason"].attacks[0]

    let standardattack = attack.damage
    if (playerturn) {
        if (dmgmodifier === true) {
            remainingenemyhp = remainingenemyhp - (standardattack * 2)
            dmgmodifier = false
        }
        else {
            remainingenemyhp = remainingenemyhp - standardattack
        }
        if (remainingenemyhp <= 0) {
            remainingenemyhp = 0;
            enemy1.style.display = 'none'
            winBattle()
        }

        else {
            enemy1hp.innerHTML = remainingenemyhp + "/" + enemies[enemytype].maxhealth
            storyContainer.innerHTML = attack.text
            playerturn = false
            enemyattack()
        }
    }
});

inventory.addEventListener("click", function() {
storyContainer.innerHTML = ""
healitembutton.style.display = 'inline-block'
damageitembutton.style.display = 'inline-block'
    healitembutton.innerHTML = 'Healing Potions: ' + healingpotioncount
    damageitembutton.innerHTML = 'Damage Potions: ' + dmgpotioncount
});

healitembutton.addEventListener ("click", function () {
     healitembutton.style.display = 'none'
        damageitembutton.style.display = 'none'
    healing()
});

damageitembutton.addEventListener ("click", function () {
     healitembutton.style.display = 'none'
        damageitembutton.style.display = 'none'
    dmgmodify()
});


function enemyattack() {
    setTimeout(function () {
        let enemyAttacks = Math.floor(Math.random() * enemies[enemytype].attacks.length)
        let chosenAttack = enemies[enemytype].attacks[enemyAttacks]
        jasonhealth = jasonhealth - chosenAttack.damage
        if (jasonhealth <= 0) {
            scene.style.display = 'none'
            scene.style.backgroundColor = 'rgba(0, 0, 0)'
        }

        jasonhp.innerHTML = "JasonHP: " + jasonhealth + "/" + protagonist["jason"].maxhealth
        storyContainer.innerHTML = chosenAttack.text
        playerturn = true;
    }, 1750);

}

function healing() {
    if (playerturn) {
    if (healingpotioncount != 0) {
    healingpotioncount = healingpotioncount - 1
    jasonhealth = jasonhealth + 50
    if (jasonhealth > 100) {
        jasonhealth = 100
    }
    jasonhp.innerHTML = "JasonHP: " + jasonhealth + "/" + protagonist["jason"].maxhealth
    storyContainer.innerHTML = items['heal'].text
    healitembutton.style.display = 'none'
    playerturn = false
    enemyattack()
}
 else {
        storyContainer.innerHTML = 'You don\' have enough of this item!'
        playerturn = true
 }}
};


function dmgmodify() {
    if (playerturn) {
if (dmgpotioncount != 0) {
    dmgpotioncount = dmgpotioncount - 1
    dmgmodifier = true
    storyContainer.innerHTML = items['doubledamage'].text
    playerturn = false
    enemyattack()
    }
        
else {
        storyContainer.innerHTML = 'You don\' have enough of this item!'
        playerturn = true
 }
}
};


function winBattle() {
    storyContainer.innerHTML = 'You have defeated ' + enemies[enemytype].name + '!'
    enemy1hp.style.display = 'none'
    enemy2hp.style.display = 'none'
    enemy3hp.style.display = 'none'
    slash.style.display = 'none'
    inventory.style.display = 'none'
    skills.style.display = 'none'
    fabricator.style.display = 'none'
    battleactive = false
    playerturn = true
    if (juniorpath === "nice") {
        jasonhealth = jasonhealth + 30
        if (jasonhealth > protagonist["jason"].maxhealth) {
            jasonhealth = protagonist["jason"].maxhealth;
        }
        storyContainer.innerHTML = 'You have defeated ' + enemies[enemytype].name + '!' + 'And since you were nice to Junior he heals you 30 hp!'
        console.log(jasonhealth)
    }
};