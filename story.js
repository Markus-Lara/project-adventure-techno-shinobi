import { dialogue, protagonist, enemies, items } from "./stats.js"
const storyContainer = document.getElementById("startexpo"); //the text box

var choice1 = document.getElementById("choice1")

var choice2 = document.getElementById("choice2")

var choice3 = document.getElementById("choice3")

var item1 = document.getElementById("item1")

var item2 = document.getElementById("item2")

var item3 = document.getElementById("item3")

var item4 = document.getElementById("item4")

var item5 = document.getElementById("item5")

var enemy1 = document.getElementById("enemy1")

const slash = document.getElementById("slash")

const inventory = document.getElementById("inventory")

const skills = document.getElementById("skills")

const fabricator = document.getElementById("fabricator")

const scene = document.getElementById("prologue")

const jasonhp = document.getElementById("jasonhp")

const enemy1hp = document.getElementById("enemy1hp")

const healitembutton = document.getElementById("healing")

const damageitembutton = document.getElementById("damage")

const skillgroup = document.getElementById("skillgrouping")

const doubleslash = document.getElementById("skillone")

const frostaxethrow = document.getElementById("skilltwo")

const fanknuckles = document.getElementById("skillthree")

const boomerthrow = document.getElementById("skillfour")

const toothnailing = document.getElementById("skillfive")

var playerpath = ""

var juniorpath = ""

var skillcooldown = 0

var chapterprogression = 0

var healingpotioncount = 0

var dmgpotioncount = 0

var gathereditems = 0

var battlecount = 0

var allycount = 0

var playerturn = true

var hasfabricator = false

var battleactive = false

var dmgmodifier = false

var victory = false

var frostveil = false

var lambda = false

var grumoda = false

var mountain = false

var finishedfrostveil = false

var finishedlambda = false

var finishedgrumoda = false

var hans = false

var bridgette = false

var clerica = false

var frostaxeskill = false

var fanknucklesskill = false

var boomerthrowskill = false

var toothnailingskill = false

var enemytype;

var remainingenemyhp;

var jasonspa;

var jasonhealth = protagonist["jason"].maxhealth

let story = ["intro"]; //sets a value for the whole array

var presentStory = story[story.length - 1] //presentStory is set to last index of story array

skillgroup.style.display = 'none'

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

   else if (battlecount === 4 && frostveil && victory === true) {
        story.push("hans")
        victory = false
        presentStory = story[story.length - 1]
        choice1.innerHTML = dialogue[presentStory].choices[0][0]
        choice2.innerHTML = dialogue[presentStory].choices[1][0]
        displaytwochoices()
        enemy1.style.display = 'inline-block'
        enemy1.src = "images/hans.png"
         storyContainer.innerHTML = dialogue[presentStory].text
        console.log("battlecount: " + battlecount)
    }

   else if (battlecount === 4 && lambda && victory === true) {
        story.push("bridgette")
        victory = false
        presentStory = story[story.length - 1]
        choice1.innerHTML = dialogue[presentStory].choices[0][0]
        choice2.innerHTML = dialogue[presentStory].choices[1][0]
        displaytwochoices()
        enemy1.style.display = 'inline-block'
        enemy1.src = "images/bridgette.png"
        storyContainer.innerHTML = dialogue[presentStory].text
        console.log("battlecount: " + battlecount)
    }

    else if (battlecount === 4 && grumoda && victory === true) {
        story.push("clerica")
        victory = false
        presentStory = story[story.length - 1]
        choice1.innerHTML = dialogue[presentStory].choices[0][0]
        choice2.innerHTML = dialogue[presentStory].choices[1][0]
        displaytwochoices()
        enemy1.style.display = 'inline-block'
        enemy1.src = "images/clerica.png"
        storyContainer.innerHTML = dialogue[presentStory].text
        console.log("battlecount: " + battlecount)
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

    if (gathereditems === 5) {
        if (playerpath === "run") {
            story.push("enterfrostveil")
            frostveil = true
            presentStory = story[story.length - 1]
            storyContainer.innerHTML = dialogue[presentStory].text
        }
        else if (playerpath === "hold") {
            story.push("enterlambda")
            lambda = true
            presentStory = story[story.length - 1]
            storyContainer.innerHTML = dialogue[presentStory].text
        }
        else if (playerpath === "investigate") {
            story.push("entergrumoda")
            grumoda = true
            presentStory = story[story.length - 1]
            storyContainer.innerHTML = dialogue[presentStory].text
        }
        gathereditems = 0
        console.log("gathereditems", gathereditems)
    }

        if (presentStory === "items") {                              //items function
            storyContainer.disabled = true
            item1.style.visibility = 'visible'
            item2.style.visibility = 'visible'
            item3.style.visibility = 'visible'
            item4.style.visibility = 'visible'
            item5.style.visibility = 'visible'
        }

    if (dialogue[presentStory].choices) { //checks current array index for choices
        if (dialogue[presentStory].choices.length === 3) {
            choice1.innerHTML = dialogue[presentStory].choices[0][0]
            choice2.innerHTML = dialogue[presentStory].choices[1][0]
            choice3.innerHTML = dialogue[presentStory].choices[2][0]
            displaythreechoices()
        }

        else if (dialogue[presentStory].choices.length === 2) {
            choice1.innerHTML = dialogue[presentStory].choices[0][0]
            choice2.innerHTML = dialogue[presentStory].choices[1][0]
            displaytwochoices()
        }
    }

    else {
        hidechoices()
    }

    if (presentStory === "hanshelp" || presentStory === "hansnohelp") {
        battlecount++
        levelcontinue()
        displaythreechoices()
        console.log("battlecount: " + battlecount)
    }

    if (presentStory === "bridgettejoin" || presentStory === "bridgettenojoin") {
        battlecount++
        levelcontinue()
        displaythreechoices()
        console.log("battlecount: " + battlecount)
    }

    if (presentStory === "clericatalk" || presentStory === "clericanotalk") {
        battlecount++
        levelcontinue()
        displaythreechoices()
        console.log("battlecount: " + battlecount)
    }

    else if (battlecount=== 9 && chapterprogression === 2) {
        battlecount = 0
        chapterprogression = 0
        lambda = false
        finishedlambda = true
        boomerthrowskill = true
        frostveil= false
        finishedfrostveil= true
        frostaxeskill = true
        grumoda = false
        finishedlambda = true
        fanknucklesskill = true
        mountain = true
        story.push("mountainside")
        presentStory = story[story.length -1]
        storyContainer.innerHTML = dialogue[presentStory].text
        scene.style.backgroundImage = 'url(images/thegauntlet.png)'
        hidechoices()
        console.log("battlecount: " + battlecount)
        console.log("presentStory: " + presentStory)
        console.log()
        return
    }

    else if (battlecount === 9 && lambda && chapterprogression === 1) {
        battlecount = 0
        lambda = false
        finishedlambda = true
        boomerthrowskill = true
        story.push("finishlambda")
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
        storyContainer.disabled = true
        chapterprogression++
        console.log("chapterprogression: " + chapterprogression)
        console.log("battlecount: " + battlecount)
        if (finishedfrostveil) {
            choice2.innerHTML = dialogue[presentStory].choices[1][0]
            choice1.style.display ="none"
            choice2.style.display ="inline-block"
            choice3.style.display ="none"
        }

        else if (finishedgrumoda) {
            choice1.innerHTML = dialogue[presentStory].choices[0][0]
            choice1.style.display ="inline-block"
            choice2.style.display ="none"
            choice3.style.display ="none"
        }
        return
    }

else if (battlecount === 9 && grumoda && chapterprogression === 1) {
        battlecount = 0
        grumoda = false
        finishedgrumoda = true
        fanknucklesskill = true
        story.push("finishgrumoda")
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
        storyContainer.disabled = true
        chapterprogression++
        console.log("chapterprogression: " + chapterprogression)
        console.log("battlecount: " + battlecount)
        if (finishedfrostveil) {
            choice2.innerHTML = dialogue[presentStory].choices[1][0]
            choice1.style.display ="none"
            choice2.style.display ="inline-block"
            choice3.style.display ="none"
        }

        else if (finishedlambda) {
            choice1.innerHTML = dialogue[presentStory].choices[0][0]
            choice1.style.display ="inline-block"
            choice2.style.display ="none"
            choice3.style.display ="none"
        }
        return
    }

    else if (battlecount === 9 && frostveil && chapterprogression === 1) {
        battlecount = 0
        frostveil= false
        finishedfrostveil= true
        frostaxeskill = true
        story.push("finishfrostveil")
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
        storyContainer.disabled = true
        chapterprogression++
        console.log("chapterprogression: " + chapterprogression)
        console.log("battlecount: " + battlecount)
        if (finishedlambda) {
            choice2.innerHTML = dialogue[presentStory].choices[1][0]
            choice1.style.display ="none"
            choice2.style.display ="inline-block"
            choice3.style.display ="none"
        }

        else if (finishedgrumoda) {
            choice1.innerHTML = dialogue[presentStory].choices[0][0]
            choice1.style.display ="inline-block"
            choice2.style.display ="none"
            choice3.style.display ="none"
        }
        return
    }

    else if (battlecount === 9 && frostveil) {
        battlecount = 0
        frostveil = false
        finishedfrostveil = true
        frostaxeskill = true
        story.push("finishfrostveil")
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
        choice1.innerHTML = dialogue[presentStory].choices[0][0]
            choice2.innerHTML = dialogue[presentStory].choices[1][0]
        displaytwochoices()
        storyContainer.disabled = true
        chapterprogression++
        console.log("chapterprogression: " + chapterprogression)
        console.log("battlecount: " + battlecount)
        return
    }

    else if (battlecount === 9 && grumoda) {
        battlecount = 0
        grumoda = false
        finishedgrumoda = true
        fanknucklesskill = true
        story.push("finishgrumoda")
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
        choice1.innerHTML = dialogue[presentStory].choices[0][0]
            choice2.innerHTML = dialogue[presentStory].choices[1][0]
        displaytwochoices()
        storyContainer.disabled = true
        chapterprogression++
        console.log("chapterprogression: " + chapterprogression)
        console.log("battlecount: " + battlecount)
        return
    }

    else if (battlecount === 9 && lambda) {
        battlecount = 0
        lambda = false
        finishedlambda = true
        boomerthrowskill = true
        story.push("finishlambda")
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
        choice1.innerHTML = dialogue[presentStory].choices[0][0]
            choice2.innerHTML = dialogue[presentStory].choices[1][0]
        displaytwochoices()
        storyContainer.disabled = true
        chapterprogression++
        console.log("chapterprogression: " + chapterprogression)
        console.log("battlecount: " + battlecount)
        return
    }


    else if (battlecount === 9 && lambda && chapterprogression == 2) {
        battlecount = 0
        lambda = false
        finishedlambda = true
        boomerthrowskill = true
        story.push("finishlambda")
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
        choice1.innerHTML = dialogue[presentStory].choices[0][0]
            choice2.innerHTML = dialogue[presentStory].choices[1][0]
        displaytwochoices()
        storyContainer.disabled = true
        chapterprogression++
        console.log("chapterprogression: " + chapterprogression)
        console.log("battlecount: " + battlecount)
        return
    }

    else if (battlecount === 9 && grumoda && chapterprogression == 1) {
        battlecount = 0
        lambda = false
        finishedlambda = true
        boomerthrowskill = true
        story.push("finishlambda")
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
        storyContainer.disabled = true
        chapterprogression++
        console.log("chapterprogression: " + chapterprogression)
        console.log("battlecount: " + battlecount)
        if (finishedfrostveil) {
            choice2.innerHTML = dialogue[presentStory].choices[1][0]
            choice1.style.display ="none"
            choice2.style.display ="inline-block"
            choice3.style.display ="none"
        }

        else if (finishedgrumoda) {
            choice1.innerHTML = dialogue[presentStory].choices[1][0]
            choice1.style.display ="inline-block"
            choice2.style.display ="none"
            choice3.style.display ="none"
        }
        return
    }

    else if (battlecount === 0 && presentStory === "mountainside" && mountain) {
        story.push("asr")
        presentStory = story[story.length - 1]
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
        console.log("presentStory: " + presentStory)
        console.log("battlecount: " + battlecount)
        return
    }

    else if (battlecount === 1 && presentStory === "mountainpush" && mountain) {
        story.push("attackerfloresta")
        presentStory = story[story.length - 1]
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
        console.log("presentStory: " + presentStory)
        console.log("battlecount: " + battlecount)
        return
    }

    else if (battlecount === 2 && presentStory === "mountainpush" && mountain) {
        story.push("toothandnail")
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
         updatesaveenemy()
        console.log("presentStory: " + presentStory)
        console.log("battlecount: " + battlecount)
        return
    }

    else if (presentStory === "toothandnail") {
        localStorage.setItem("bookmark", presentStory)
        presentStory = story[story.length - 1]
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 3 && presentStory === "mountainpush" && mountain) {
        story.push("bomberregy")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
        return
    }

    else if (battlecount === 4 && presentStory === "mountainpush" && mountain) {
        story.push("sealion")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
        return
    }

else if (battlecount === 5 && presentStory === "mountainpush" && mountain) {
        story.push("wanoba")
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
         updatesaveenemy()
        console.log("presentStory: " + presentStory)
        console.log("battlecount: " + battlecount)
        scene.style.backgroundImage = 'url(images/lab.png)'
        return
    }

    else if (presentStory === "wanoba") {
        localStorage.setItem("bookmark", presentStory)
        presentStory = story[story.length - 1]
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 6 && presentStory === "mountainpush" && mountain) {
        story.push("returnhome")
        hasfabricator = true
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
        console.log("presentStory: " + presentStory)
        console.log("battlecount: " + battlecount)
        return
    }

    else if (battlecount === 6 && presentStory === "returnhome" && mountain) {
        story.push("weedwhip")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
        return
    }

    else if (battlecount === 7 && presentStory === "mountainpush" && mountain) {
        story.push("penguinja")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
        return
    }

    else if (battlecount === 8 && presentStory === "mountainpush" && mountain) {
        story.push("ahg")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
        return
    }
    
        else if (battlecount === 9 && allycount > 0 && presentStory === "mountainpush") {
story.push("split")
mountain = false
        presentStory = story[story.length - 1]
        storyContainer.innerHMTL = dialogue[presentStory].text
        console.log("presentStory: " + presentStory)
        return
    }

        else if (battlecount === 9 && allycount === 0 && presentStory === "mountainpush") {
        story.push("returnalone")
        mountain = false
        presentStory = story[story.length - 1]
        storyContainer.innerHMTL = dialogue[presentStory].text
        console.log("presentStory: " + presentStory)
        return
        }

else if (presentStory === "split" || presentStory === "returnalone"){
story.push("dantechoice")
presentStory = story[story.length - 1]
        storyContainer.innerHMTL = dialogue[presentStory].text
        choice1.innerHTML = dialogue[presentStory].choices[0][0]
            choice2.innerHTML = dialogue[presentStory].choices[1][0]
        choice1.style.display = 'inline-block'
        choice2.style.display = 'inline-block'
        choice3.style.display = 'none'
        scene.style.backgroundImage = 'url(images/finalbattle.png)'
        enemy1.src = 'images/dante.png'
        enemy1.style.display = 'inline-block'
        return
    }

    if (victory === true) {
        if (presentStory === "kamiron") {
        localStorage.setItem("bookmark", presentStory)
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 8 && frostveil && victory === true) {
        story.push("kamiron")
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
        hidechoices()
    }

else if (presentStory === "boomera") {
        localStorage.setItem("bookmark", presentStory)
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 8 && lambda && victory === true) {
        story.push("boomera")
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
        hidechoices()
        enemy1.src = "images/boomera.png"
        enemy1.style.display = "inline-block"
        return
    }

else if (presentStory === "knucklesandshieva") {
        localStorage.setItem("bookmark", presentStory)
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 8 && grumoda && victory === true) {
        story.push("knucklesandshieva")
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
        hidechoices()
        enemy1.src = "images/knucklesandshieva.png"
        enemy1.style.display = "inline-block"
        return
    }

    else if(mountain === true) {
        story.push("mountainpush")
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
        hidechoices()
        return
    }

else if (presentStory === "split") {
    presentStory = story[story.length - 1]
        storyContainer.innerHMTL = dialogue[presentStory].text
        console.log("presentStory: " + presentStory)
        return
}

else if (presentStory === "returnalone") {
    presentStory = story[story.length - 1]
        storyContainer.innerHMTL = dialogue[presentStory].text
        console.log("presentStory: " + presentStory)
        return
}

else if (presentStory === "dante") {
    story.push("endingchoices")
  presentStory = story[story.length -1]
  storyContainer.innerHTML = dialogue[presentStory].text
  choice1.innerHTML = dialogue[presentStory].choices[0][0]
            choice2.innerHTML = dialogue[presentStory].choices[1][0]
        choice1.style.display = 'inline-block'
        choice3.style.display = 'none'
if (allycount === 3){
    choice2.style.display = 'inline-bloc'
}
}

    else {
        victory = false
        story.push("cityprogression")
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
        displaythreechoices()
        enemy1hp.style.display = 'none'
        enemy1.style.display = 'none'
        slash.style.display = 'none'
        inventory.style.display = 'none'
        skills.style.display = 'none'
        fabricator.style.display = 'none'
        jasonhp.style.display = 'none'
    }
    return
    }

    else if (presentStory === "sealion" && frostveil) {                               ///first battles
        localStorage.setItem("bookmark", presentStory)
        battledisplay()
        enemydisplay()
        beginbattle()
    }

    else if (presentStory === "polarbearer" && frostveil) {
        localStorage.setItem("bookmark", presentStory)
        battledisplay()
        enemydisplay()
        beginbattle()
    }

    else if (presentStory === "penguinja" && frostveil) {
        localStorage.setItem("bookmark", presentStory)
        battledisplay()
        enemydisplay()
        beginbattle()
    }

    if (presentStory === "mab" && lambda) {                       
        battledisplay()
        enemydisplay()
        beginbattle()
    }

    else if (presentStory === "asr" && lambda) {
        localStorage.setItem("bookmark", presentStory)
        battledisplay()
        enemydisplay()
        beginbattle()
    }

    else if (presentStory === "ahg" && lambda) {
       localStorage.setItem("bookmark", presentStory)
        battledisplay()
        enemydisplay()
        beginbattle()
    }

    else if (presentStory === "bomberregy" && grumoda) {
        localStorage.setItem("bookmark", presentStory)
        battledisplay()
        enemydisplay()
        beginbattle()
    }

    else if (presentStory === "weedwhip" && grumoda) {
        localStorage.setItem ("bookmark", presentStory)
        battledisplay()
        enemydisplay()
        beginbattle()
    }

    else if (presentStory === "attackerfloresta" && grumoda) {
        localStorage.setItem("bookmark", presentStory)
        battledisplay()
        enemydisplay()
        beginbattle()
    }


    else if (presentStory === "finishfrostveil") {
        story.push("finishfrostveil")
        choice1.innerHTML = dialogue[presentStory].choices[0][0]
        choice2.innerHTML = dialogue[presentStory].choices[1][0]
        displaytwochoices()
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
    }

    else if (presentStory === "finishgrumoda") {
        story.push("finishgrumoda")
        choice1.innerHTML = dialogue[presentStory].choices[0][0]
        choice2.innerHTML = dialogue[presentStory].choices[1][0]
        displaytwochoices()
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
    }

    else if (presentStory === "finishlambda") {
        story.push("finishlambda")
        choice1.innerHTML = dialogue[presentStory].choices[0][0]
        choice2.innerHTML = dialogue[presentStory].choices[1][0]
        displaytwochoices()
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
    }

});

choice1.addEventListener("click", function () {       //choice 1 function
    if (presentStory === "firstchoice") {
        story.push("run")
        playerpath = "run"
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
        hidechoices()
        console.log("run path chosen")
    }

    else if (presentStory === "finishfrostveil") {
        playerpath = "hold"
         story.push("items")
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text + " (Click Again)"
        storyContainer.disabled = false
        victory = false
        hidechoices()
        scene.style.backgroundImage = 'url(images/LambdaCentral.png)'
    }

    else if (presentStory === "finishlambda") {
        playerpath = "run"
         story.push("items")
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text + " (Click Again)"
        storyContainer.disabled = false
        victory = false
        hidechoices()
        scene.style.backgroundImage = 'url(images/FrostveilCity.png)'
    }

    else if (presentStory === "finishgrumoda") {
        playerpath = "run"
         story.push("items")
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text + " (Click Again)"
        storyContainer.disabled = false
        victory = false
        hidechoices()
        scene.style.backgroundImage = 'url(images/FrostveilCity.png)'
    }

    else if (presentStory === "hans") {
        story.push("hanshelp")
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
       hidechoices()
        hans = true
        allycount++
        enemy1.style.display = 'none'
        console.log("battlecount: " + battlecount)
        console.log("New ally acquired!")
    }

    else if (presentStory === "clerica") {
        story.push("clericatalk")
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
        hidechoices()
        clerica = true
        allycount++
        enemy1.style.display = 'none'
        console.log("battlecount: " + battlecount)
        console.log("New ally acquired!")
    }

    else if (presentStory === "bridgette") {
        story.push("bridgettejoin")
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
        hidechoices()
        bridgette = true
        allycount++
        enemy1.style.display = 'none'
        console.log("battlecount: " + battlecount)
        console.log("New ally acquired!")
    }

    else if (battlecount === 1 && presentStory === "cityprogression" && frostveil) {
        story.push("sealion")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 2 && presentStory === "cityprogression" && frostveil) {
        story.push("sealion")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 3 && presentStory === "cityprogression" && frostveil) {
        story.push("polarbearer")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 5 && presentStory === "cityprogression" && frostveil) {
        story.push("polarbearer")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 6 && presentStory === "cityprogression" && frostveil) {
        story.push("penguinja")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 7 && presentStory === "cityprogression" && frostveil) {
        story.push("sealion")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 1 && presentStory === "cityprogression" && lambda) {
        story.push("asr")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 2 && presentStory === "cityprogression" && lambda) {
        story.push("mab")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 3 && presentStory === "cityprogression" && lambda) {
        story.push("asr")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 5 && presentStory === "cityprogression" && lambda) {
        story.push("ahg")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 6 && presentStory === "cityprogression" && lambda) {
        story.push("asr")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 7 && presentStory === "cityprogression" && lambda) {
        story.push("ahg")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 1 && presentStory === "cityprogression" && grumoda) {
        story.push("weedwhip")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 2 && presentStory === "cityprogression" && grumoda) {
        story.push("bomberregy")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 3 && presentStory === "cityprogression" && grumoda) {
        story.push("bomberregy")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 5 && presentStory === "cityprogression" && grumoda) {
        story.push("attackerfloresta")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 6 && presentStory === "cityprogression" && grumoda) {
        story.push("bomberregy")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 7 && presentStory === "cityprogression" && grumoda) {
        story.push("weedwhip")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (presentStory === "dantechoice") {
        story.push("badending")
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
    }

    else if (presentStory === "endingchoices") {
    story.push("neutralending")
    presentStory = story[story.length -1]
    storyContainer.innerHTML = dialogue[presentStory].text
    storyContainer.disabled = true
    hidechoices()
}

    else if (presentStory === "junior") {
        story.push("juniornice")
        juniorpath = "nice"
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
        hidechoices()
        console.log("Junior will remember this")
    }

    if (presentStory === "enterfrostveil") {
        story.push("penguinja")
        updatesaveenemy()
        storyContainer.innerHTML = dialogue[presentStory].text
        hidechoices()
        beginbattle()
    }

    else if (presentStory === "enterlambda") {
        story.push("mab")
        updatesaveenemy()
        storyContainer.innerHTML = dialogue[presentStory].text
        hidechoices()
        enemy1.style.display = 'inline-block'
        enemy1.src = 'images/mab.png'
        enemy1.style.height = "300px"
        beginbattle()
    }

    else if (presentStory === "entergrumoda") {
        story.push("weedwhip")
        updatesaveenemy()
        storyContainer.innerHTML = dialogue[presentStory].text
        hidechoices()
        enemy1.src = 'images/weedwhip.png'
        enemy1.style.height = '300px'
    }
});

choice2.addEventListener("click", function () {                 //choice 2 function
    if (presentStory === "firstchoice") {
        story.push("hold")
        playerpath = "hold"
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
        hidechoices()
        console.log("Fight path chosen")
    }

    else if (presentStory === "finishlambda") {
        playerpath = "investigate"
        story.push("items")
        presentStory = story[story.length - 1]
        victory = false
        storyContainer.innerHTML = dialogue[presentStory].text + " (Click Again)"
        storyContainer.disabled = false
        hidechoices()
        scene.style.backgroundImage = 'url(images/GrumodaJungle.png)'
        console.log(playerpath)
        console.log(presentStory)
    }


    else if (presentStory === "finishfrostveil") {
        playerpath = "investigate"
        story.push("items")
        presentStory = story[story.length - 1]
        victory = false
        storyContainer.innerHTML = dialogue[presentStory].text + " (Click Again)"
        storyContainer.disabled = false
        hidechoices()
        scene.style.backgroundImage = 'url(images/GrumodaJungle.png)'
    }
    else if (presentStory === "finishgrumoda") {
        playerpath = "hold"
        story.push("items")
        victory = false
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text + " (Click Again)"
        storyContainer.disabled = false
        hidechoices()
        scene.style.backgroundImage = 'url(images/LambdaCentral.png)'
    }

    else if (presentStory === "hans") {
        story.push("hansnohelp")
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
        hidechoices()
        hans = false
        enemy1.style.display = 'none'
        console.log("battlecount: " + battlecount)
        console.log("Sorry whoever you are, but I've got a mission!")
    }

    else if (presentStory === "clerica") {
        story.push("clericanotalk")
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
        hidechoices()
        clerica = false
        allycount++
        enemy1.style.display = 'none'
        console.log("battlecount: " + battlecount)
        console.log("I have other things to do anyway....")
    }

    else if (presentStory === "bridgette") {
        story.push("bridgettenojoin")
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
        hidechoices()
        bridgette = false
        allycount++
        enemy1.style.display = 'none'
        console.log("battlecount: " + battlecount)
        console.log("Gotta play it safe!")
    }

    else if (battlecount === 1 && presentStory === "cityprogression" && frostveil) {
        story.push("polarbearer")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 2 && presentStory === "cityprogression" && frostveil) {
        story.push("penguinja")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 3 && presentStory === "cityprogression" && frostveil) {
        story.push("sealion")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 5 && presentStory === "cityprogression" && frostveil) {
        story.push("penguinja")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 6 && presentStory === "cityprogression" && frostveil) {
        story.push("sealion")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 7 && presentStory === "cityprogression" && frostveil) {
        story.push("polarbearer")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 1 && presentStory === "cityprogression" && lambda) {
        story.push("ahg")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 2 && presentStory === "cityprogression" && lambda) {
        story.push("asr")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 3 && presentStory === "cityprogression" && lambda) {
        story.push("mab")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 5 && presentStory === "cityprogression" && lambda) {
        story.push("asr")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 6 && presentStory === "cityprogression" && lambda) {
        story.push("ahg")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 7 && presentStory === "cityprogression" && lambda) {
        story.push("mab")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

else if (battlecount === 1 && presentStory === "cityprogression" && grumoda) {
        story.push("bomberregy")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 2 && presentStory === "cityprogression" && grumoda) {
        story.push("attackerfloresta")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 3 && presentStory === "cityprogression" && grumoda) {
        story.push("weedwhip")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 5 && presentStory === "cityprogression" && grumoda) {
        story.push("bomberregy")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 6 && presentStory === "cityprogression" && grumoda) {
        story.push("weedwhip")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 7 && presentStory === "cityprogression" && grumoda) {
        story.push("attackerfloresta")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (presentStory === "junior") {
        story.push("juniormean")
        juniorpath = "mean"
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
        hidechoices()
        console.log("You made Junior angry")
    }

    else if (presentStory === "enterfrostveil") {
        story.push("polarbearer")
        updatesaveenemy()
        storyContainer.innerHTML = dialogue[presentStory].text
        hidechoices()
        beginbattle()
        return
    }

    else if (presentStory === "dantechoice") {
        story.push("dante")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

else if (presentStory === "endingchoices") {
    story.push("goodending")
    presentStory = story[story.length -1]
    storyContainer.innerHTML = dialogue[presentStory].text
    storyContainer.disabled = true
    hidechoices()
}

    else if (presentStory === "enterlambda") {
        story.push("ahg")
        updatesaveenemy()
        storyContainer.innerHTML = dialogue[presentStory].text
        hidechoices()
        enemy1.style.display = 'inline-block'
        enemy1.src = 'images/ahg.png'
        beginbattle()
    }

    else if (presentStory === "entergrumoda") {
        story.push("attackerfloresta")
        updatesaveenemy()
        storyContainer.innerHTML = dialogue[presentStory].text
        hidechoices()
        victory = false
        enemy1.style.display = 'inline-block'
        enemy1.src = 'images/attackerfloresta.png'
        enemy1.style.height = '300px'
        beginbattle()
    }
    else if (playerpath === "hold") {                                //checks playerpath based on previous choices
        story.push("enterlambda")
        lambda = true
        scene.style.backgroundImage = 'url(images/LambdaCentral.png)'
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
        hidechoices()
        storyContainer.innerHTML = dialogue[presentStory].text
    }
});

choice3.addEventListener("click", function () {          //choice 3 function
    if (presentStory === "firstchoice") {
        story.push("investigate")
        playerpath = "investigate"
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
        hidechoices()
        console.log("Investigate path chosen")
    }

    else if (battlecount === 1 && presentStory === "cityprogression" && frostveil) {
        story.push("penguinja")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 2 && presentStory === "cityprogression" && frostveil) {
        story.push("polarbearer")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 3 && presentStory === "cityprogression" && frostveil) {
        story.push("penguinja")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 5 && presentStory === "cityprogression" && frostveil) {
        story.push("sealion")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 6 && presentStory === "cityprogression" && frostveil) {
        story.push("polarbearer")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 7 && presentStory === "cityprogression" && frostveil) {
        story.push("penguinja")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 1 && presentStory === "cityprogression" && lambda) {
        story.push("mab")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 2 && presentStory === "cityprogression" && lambda) {
        story.push("ahg")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 3 && presentStory === "cityprogression" && lambda) {
        story.push("ahg")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 5 && presentStory === "cityprogression" && lambda) {
        story.push("mab")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 6 && presentStory === "cityprogression" && lambda) {
        story.push("mab")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 7 && presentStory === "cityprogression" && lambda) {
        story.push("asr")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 1 && presentStory === "cityprogression" && grumoda) {
        story.push("attackerfloresta")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 2 && presentStory === "cityprogression" && grumoda) {
        story.push("weedwhip")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 3 && presentStory === "cityprogression" && grumoda) {
        story.push("bomberregy")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 5 && presentStory === "cityprogression" && grumoda) {
        story.push("weedwhip")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 6 && presentStory === "cityprogression" && grumoda) {
        story.push("attackerfloresta")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 7 && presentStory === "cityprogression" && grumoda) {
        story.push("bomberregy")
        updatesaveenemy()
        enemydisplay()
        battledisplay()
        beginbattle()
    }

else if (presentStory === "entergrumoda") {
         story.push("bomberregy")
        updatesaveenemy()
        storyContainer.innerHTML = dialogue[presentStory].text
        hidechoices()
        enemy1.style.display = 'inline-block'
        enemy1.src = 'images/bomberregy.png'
        beginbattle()
        return
    }

    else if (playerpath === "investigate") {                    //checks playerpath based on previous choices
        story.push("entergrumoda")
        grumoda = true
        scene.style.backgroundImage = 'url(images/GrumodaJungle.png)'
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
    }

    else if (presentStory === "enterfrostveil") {
        story.push("sealion")
        updatesaveenemy()
        storyContainer.innerHTML = dialogue[presentStory].text
        hidechoices()
        beginbattle()
        return
    }

    else if (presentStory === "enterlambda") {
        story.push("asr")
        updatesaveenemy()
        storyContainer.innerHTML = dialogue[presentStory].text
        hidechoices()
        enemy1.style.display = 'inline-block'
        enemy1.src = 'images/asr.png'
        beginbattle()
        return
    }
});

item1.addEventListener("click", function () {             //item functions here
    healingpotioncount++
    gathereditems++
    presentStory = story[story.length - 1]
    item1.style.visibility = 'hidden'


    storyContainer.innerHTML = 'I got a healing potion! ' + '(' + gathereditems + '/' + '5' + ')'
    if (gathereditems === 5) {
        storyContainer.disabled = false;
    }
    console.log('healing potions:', healingpotioncount)
    console.log('gathered items:', gathereditems)
});

item2.addEventListener("click", function () { //item functions here
    healingpotioncount++
    gathereditems++
    presentStory = story[story.length - 1]
    item2.style.visibility = 'hidden'
    storyContainer.innerHTML = 'I got a healing potion! ' + '(' + gathereditems + '/' + '5' + ')'
    if (gathereditems === 5) {
        storyContainer.disabled = false;
    }
    console.log('healing potions:', healingpotioncount)
    console.log('gathered items:', gathereditems)
});

item3.addEventListener("click", function () { //item functions here
    dmgpotioncount++
    gathereditems++
    presentStory = story[story.length - 1]
    item3.style.visibility = 'hidden'
    storyContainer.innerHTML = 'I got a damage potion! ' + '(' + gathereditems + '/' + '5' + ')'
    if (gathereditems === 5) {
        storyContainer.disabled = false;
    }
    console.log('dmg potions:', dmgpotioncount)
    console.log('gathered items:', gathereditems)
});

item4.addEventListener("click", function () { //item functions here
    dmgpotioncount++
    gathereditems++
    presentStory = story[story.length - 1]
    item4.style.visibility = 'hidden'
    storyContainer.innerHTML = 'I got a damage potion! ' + '(' + gathereditems + '/' + '5' + ')'
    if (gathereditems === 5) {
        storyContainer.disabled = false;
    }
    console.log('dmg potions:', dmgpotioncount)
    console.log('gathered items:', gathereditems)
});

item5.addEventListener("click", function () { //item functions here
    healingpotioncount++
    gathereditems++
    presentStory = story[story.length - 1]
    item5.style.visibility = 'hidden'
    storyContainer.innerHTML = 'I got a healing potion! ' + '(' + gathereditems + '/' + '5' + ')'
    if (gathereditems === 5) {
        storyContainer.disabled = false;
    }
    console.log('healingotions:', healingpotioncount)
    console.log('gathered items:', gathereditems)
});

function beginbattle() {                            ///battle logic
    if (localStorage.getItem("bookmark") !== null) {
        enemytype = localStorage.getItem("bookmark")
        remainingenemyhp = enemies[enemytype].maxhealth
        enemy1hp.innerHTML = remainingenemyhp + "/" + enemies[enemytype].maxhealth
        jasonhp.innerHTML = "JasonHP: " + jasonhealth + "/" + protagonist["jason"].maxhealth
        battleactive = true
        slash.disabled = false
        inventory.disabled = false
        fabricator.disabled = false
        enemy1.src = "images/" + enemytype + ".png"
        enemy1.style.height = "300px"
    }
};

slash.addEventListener("click", function () {
    let attack = protagonist["jason"].attacks[0]
    storyContainer.disabled = true
    slash.disabled = true
    inventory.disabled = true
    skills.disabled = true
    fabricator.disabled = true
    healitembutton.style.display = 'none'
    damageitembutton.style.display = 'none'
    skillgroup.style.display = 'none'
    doubleslash.style.display = 'none'
    fanknuckles.style.display = 'none'
    frostaxethrow.style.display = 'none'
    boomerthrow.style.display = 'none'
    toothnailing.style.display = 'none'
    let standardattack = attack.damage
    if (playerturn) {
        if (dmgmodifier === true) {
            remainingenemyhp = remainingenemyhp - (standardattack * 2)
            dmgmodifier = false
        }
        else {
            remainingenemyhp = remainingenemyhp - standardattack
        }

        enemy1hp.innerHTML = remainingenemyhp + "/" + enemies[enemytype].maxhealth
        storyContainer.innerHTML = attack.text

        if (remainingenemyhp <= 0) {
            remainingenemyhp = 0;
            enemy1.style.display = 'none'
            winBattle()
        }

        else {
            if (hans && clerica && bridgette) {
                hansattack()
                bridgetteattack()
                clericaheal()
            }

            else if (hans && clerica) {
                hansattack()
                clericaheal()
            }

            else if (hans && bridgette) {
                hansattack()
                bridgetteattack()
            }

            else if (bridgette && clerica) {
                bridgetteattack()
                clericaheal()
            }

            else if (hans) {
                hansattack()
            }

            else if (clerica) {
                clericaheal()
            }

            else if (bridgette) {
                bridgetteattack()
            }

            else {
                enemyattack()
            }
        }
    }
});

fabricator.addEventListener("click", function () {
    if (skillcooldown >= 3) {
    let attack = protagonist["jason"].attacks[6]
    storyContainer.disabled = true
    slash.disabled = true
    inventory.disabled = true
    skills.disabled = true
    fabricator.disabled = true
    healitembutton.style.display = 'none'
    damageitembutton.style.display = 'none'
    skillgroup.style.display = 'none'
    doubleslash.style.display = 'none'
    fanknuckles.style.display = 'none'
    frostaxethrow.style.display = 'none'
    boomerthrow.style.display = 'none'
    toothnailing.style.display = 'none'
    let standardattack = attack.damage
    if (playerturn) {
        if (dmgmodifier === true) {
            remainingenemyhp = remainingenemyhp - (standardattack * 2)
            dmgmodifier = false
        }
        else {
            remainingenemyhp = remainingenemyhp - standardattack
        }

        enemy1hp.innerHTML = remainingenemyhp + "/" + enemies[enemytype].maxhealth
        storyContainer.innerHTML = attack.text

        if (remainingenemyhp <= 0) {
            remainingenemyhp = 0;
            enemy1.style.display = 'none'
            winBattle()
        }

        else {
            if (hans && clerica && bridgette) {
                hansattack()
                bridgetteattack()
                clericaheal()
            }

            else if (hans && clerica) {
                hansattack()
                clericaheal()
            }

            else if (hans && bridgette) {
                hansattack()
                bridgetteattack()
            }

            else if (bridgette && clerica) {
                bridgetteattack()
                clericaheal()
            }

            else if (hans) {
                hansattack()
            }

            else if (clerica) {
                clericaheal()
            }

            else if (bridgette) {
                bridgetteattack()
            }

            else {
                enemyattack()
            }
        }
    }
}
else {
storyContainer.disabled = true
            storyContainer.innerHTML = 'Please wait for cooldown timer: ' + skillcooldown + "/2"
            playerturn = true
        }
});

skills.addEventListener ("click", function() {
    storyContainer.innerHTML = ""
    skillgroup.style.display = 'inline-block'
doubleslash.style.display = 'inline-block'
healitembutton.style.display = 'none'
    damageitembutton.style.display = 'none'
 if(frostaxeskill) {
    frostaxethrow.style.display = 'inline-block'
 }

 if (fanknucklesskill) {
    fanknuckles.style.display = 'inline-block'
 }

if (boomerthrowskill) {
    boomerthrow.style.display = 'inline-block'
 }

 if (toothnailingskill) {
    toothnailing.style.display = 'inline-block'
 }
});

doubleslash.addEventListener("click", function () {
    if (skillcooldown >= 2) {
    let attack = protagonist["jason"].attacks[1]
    storyContainer.disabled = true
    slash.disabled = true
    inventory.disabled = true
    skills.disabled = true
    fabricator.disabled = true
    healitembutton.style.display = 'none'
    damageitembutton.style.display = 'none'
    skillgroup.style.display = 'none'
    doubleslash.style.display = 'none'
    fanknuckles.style.display = 'none'
    frostaxethrow.style.display = 'none'
    boomerthrow.style.display = 'none'
    toothnailing.style.display = 'none'
    let standardattack = attack.damage
    skillcooldown = 0

    if (playerturn) {
        if (dmgmodifier === true) {
            remainingenemyhp = remainingenemyhp - (standardattack * 2)
            dmgmodifier = false
        }
        else {
            remainingenemyhp = remainingenemyhp - standardattack
        }

        enemy1hp.innerHTML = remainingenemyhp + "/" + enemies[enemytype].maxhealth
        storyContainer.innerHTML = attack.text

        if (remainingenemyhp <= 0) {
            remainingenemyhp = 0;
            enemy1.style.display = 'none'
            winBattle()
        }

        else {
            if (hans && clerica && bridgette) {
                hansattack()
                bridgetteattack()
                clericaheal()
            }

            else if (hans && clerica) {
                hansattack()
                clericaheal()
            }

            else if (hans && bridgette) {
                hansattack()
                bridgetteattack()
            }

            else if (bridgette && clerica) {
                bridgetteattack()
                clericaheal()
            }

            else if (hans) {
                hansattack()
            }

            else if (clerica) {
                clericaheal()
            }

            else if (bridgette) {
                bridgetteattack()
            }

            else {
                enemyattack()
            }
        }
    }
}
else {
    skillgroup.style.display = 'none'
    doubleslash.style.display = 'none'
    fanknuckles.style.display = 'none'
    frostaxethrow.style.display = 'none'
    boomerthrow.style.display = 'none'
    toothnailing.style.display = 'none'
            storyContainer.disabled = true
            storyContainer.innerHTML = 'Please wait for cooldown timer: ' + skillcooldown + "/2"
            playerturn = true
        }
});

fanknuckles.addEventListener("click", function () {
    if (skillcooldown >= 2) {
    let attack = protagonist["jason"].attacks[2]
    storyContainer.disabled = true
    slash.disabled = true
    inventory.disabled = true
    skills.disabled = true
    fabricator.disabled = true
    healitembutton.style.display = 'none'
    damageitembutton.style.display = 'none'
    skillgroup.style.display = 'none'
    doubleslash.style.display = 'none'
    fanknuckles.style.display = 'none'
    frostaxethrow.style.display = 'none'
    boomerthrow.style.display = 'none'
    toothnailing.style.display = 'none'
    skillcooldown = 0
    let standardattack = attack.damage
    if (playerturn) {
        if (dmgmodifier === true) {
            remainingenemyhp = remainingenemyhp - (standardattack * 2)
            dmgmodifier = false
        }
        else {
            remainingenemyhp = remainingenemyhp - standardattack
        }

        enemy1hp.innerHTML = remainingenemyhp + "/" + enemies[enemytype].maxhealth
        storyContainer.innerHTML = attack.text

        if (remainingenemyhp <= 0) {
            remainingenemyhp = 0;
            enemy1.style.display = 'none'
            winBattle()
        }

        else {
            if (hans && clerica && bridgette) {
                hansattack()
                bridgetteattack()
                clericaheal()
            }

            else if (hans && clerica) {
                hansattack()
                clericaheal()
            }

            else if (hans && bridgette) {
                hansattack()
                bridgetteattack()
            }

            else if (bridgette && clerica) {
                bridgetteattack()
                clericaheal()
            }

            else if (hans) {
                hansattack()
            }

            else if (clerica) {
                clericaheal()
            }

            else if (bridgette) {
                bridgetteattack()
            }

            else {
                enemyattack()
            }
        }
    }
}
else {
    skillgroup.style.display = 'none'
    doubleslash.style.display = 'none'
    fanknuckles.style.display = 'none'
    frostaxethrow.style.display = 'none'
    boomerthrow.style.display = 'none'
    toothnailing.style.display = 'none'
            storyContainer.disabled = true
            storyContainer.innerHTML = 'Please wait for cooldown timer: ' + skillcooldown + "/2"
            playerturn = true
        }
});

frostaxethrow.addEventListener("click", function () {
    if (skillcooldown >= 2) {
    let attack = protagonist["jason"].attacks[3]
    storyContainer.disabled = true
    slash.disabled = true
    inventory.disabled = true
    skills.disabled = true
    fabricator.disabled = true
    healitembutton.style.display = 'none'
    damageitembutton.style.display = 'none'
    skillgroup.style.display = 'none'
    doubleslash.style.display = 'none'
    fanknuckles.style.display = 'none'
    frostaxethrow.style.display = 'none'
    boomerthrow.style.display = 'none'
    toothnailing.style.display = 'none'
    skillcooldown = 0
    let standardattack = attack.damage
    if (playerturn) {
        if (dmgmodifier === true) {
            remainingenemyhp = remainingenemyhp - (standardattack * 2)
            dmgmodifier = false
        }
        else {
            remainingenemyhp = remainingenemyhp - standardattack
        }

        enemy1hp.innerHTML = remainingenemyhp + "/" + enemies[enemytype].maxhealth
        storyContainer.innerHTML = attack.text

        if (remainingenemyhp <= 0) {
            remainingenemyhp = 0;
            enemy1.style.display = 'none'
            winBattle()
        }

        else {
            if (hans && clerica && bridgette) {
                hansattack()
                bridgetteattack()
                clericaheal()
            }

            else if (hans && clerica) {
                hansattack()
                clericaheal()
            }

            else if (hans && bridgette) {
                hansattack()
                bridgetteattack()
            }

            else if (bridgette && clerica) {
                bridgetteattack()
                clericaheal()
            }

            else if (hans) {
                hansattack()
            }

            else if (clerica) {
                clericaheal()
            }

            else if (bridgette) {
                bridgetteattack()
            }

            else {
                enemyattack()
            }
        }
    }
}
else {
    skillgroup.style.display = 'none'
    doubleslash.style.display = 'none'
    fanknuckles.style.display = 'none'
    frostaxethrow.style.display = 'none'
    boomerthrow.style.display = 'none'
    toothnailing.style.display = 'none'
            storyContainer.disabled = true
            storyContainer.innerHTML = 'Please wait for cooldown timer: ' + skillcooldown + "/2"
            playerturn = true
        }
});

boomerthrow.addEventListener("click", function () {
    if (skillcooldown >= 2) {
    let attack = protagonist["jason"].attacks[4]
    storyContainer.disabled = true
    slash.disabled = true
    inventory.disabled = true
    skills.disabled = true
    fabricator.disabled = true
    healitembutton.style.display = 'none'
    damageitembutton.style.display = 'none'
    skillgroup.style.display = 'none'
    doubleslash.style.display = 'none'
    fanknuckles.style.display = 'none'
    frostaxethrow.style.display = 'none'
    boomerthrow.style.display = 'none'
    toothnailing.style.display = 'none'
    skillcooldown = 0
    let standardattack = attack.damage
    if (playerturn) {
        if (dmgmodifier === true) {
            remainingenemyhp = remainingenemyhp - (standardattack * 2)
            dmgmodifier = false
        }
        else {
            remainingenemyhp = remainingenemyhp - standardattack
        }

        enemy1hp.innerHTML = remainingenemyhp + "/" + enemies[enemytype].maxhealth
        storyContainer.innerHTML = attack.text

        if (remainingenemyhp <= 0) {
            remainingenemyhp = 0;
            enemy1.style.display = 'none'
            winBattle()
        }

        else {
            if (hans && clerica && bridgette) {
                hansattack()
                bridgetteattack()
                clericaheal()
            }

            else if (hans && clerica) {
                hansattack()
                clericaheal()
            }

            else if (hans && bridgette) {
                hansattack()
                bridgetteattack()
            }

            else if (bridgette && clerica) {
                bridgetteattack()
                clericaheal()
            }

            else if (hans) {
                hansattack()
            }

            else if (clerica) {
                clericaheal()
            }

            else if (bridgette) {
                bridgetteattack()
            }

            else {
                enemyattack()
            }
        }
    }
    }
    else {
        skillgroup.style.display = 'none'
    doubleslash.style.display = 'none'
    fanknuckles.style.display = 'none'
    frostaxethrow.style.display = 'none'
    boomerthrow.style.display = 'none'
    toothnailing.style.display = 'none'
            storyContainer.disabled = true
            storyContainer.innerHTML = 'Please wait for cooldown timer: ' + skillcooldown + "/2"
            playerturn = true
        }
});

toothnailing.addEventListener("click", function () {
    if (skillcooldown >= 2) {
    let attack = protagonist["jason"].attacks[5]
    storyContainer.disabled = true
    slash.disabled = true
    inventory.disabled = true
    skills.disabled = true
    fabricator.disabled = true
    healitembutton.style.display = 'none'
    damageitembutton.style.display = 'none'
    skillgroup.style.display = 'none'
    doubleslash.style.display = 'none'
    fanknuckles.style.display = 'none'
    frostaxethrow.style.display = 'none'
    boomerthrow.style.display = 'none'
    toothnailing.style.display = 'none'
    skillcooldown = 0
    let standardattack = attack.damage
    if (playerturn) {
        if (dmgmodifier === true) {
            remainingenemyhp = remainingenemyhp - (standardattack * 2)
            dmgmodifier = false
        }
        else {
            remainingenemyhp = remainingenemyhp - standardattack
        }

        enemy1hp.innerHTML = remainingenemyhp + "/" + enemies[enemytype].maxhealth
        storyContainer.innerHTML = attack.text

        if (remainingenemyhp <= 0) {
            remainingenemyhp = 0;
            enemy1.style.display = 'none'
            winBattle()
        }

        else {
            if (hans && clerica && bridgette) {
                hansattack()
                bridgetteattack()
                clericaheal()
            }

            else if (hans && clerica) {
                hansattack()
                clericaheal()
            }

            else if (hans && bridgette) {
                hansattack()
                bridgetteattack()
            }

            else if (bridgette && clerica) {
                bridgetteattack()
                clericaheal()
            }

            else if (hans) {
                hansattack()
            }

            else if (clerica) {
                clericaheal()
            }

            else if (bridgette) {
                bridgetteattack()
            }

            else {
                enemyattack()
            }
        }
    }
}
else {
    skillgroup.style.display = 'none'
    doubleslash.style.display = 'none'
    fanknuckles.style.display = 'none'
    frostaxethrow.style.display = 'none'
    boomerthrow.style.display = 'none'
    toothnailing.style.display = 'none'
            storyContainer.disabled = true
            storyContainer.innerHTML = 'Please wait for cooldown timer: ' + skillcooldown + "/2"
            playerturn = true
        }
});

inventory.addEventListener("click", function () {
    storyContainer.innerHTML = ""
    storyContainer.disabled = true
    healitembutton.style.display = 'inline-block'
    damageitembutton.style.display = 'inline-block'
    healitembutton.innerHTML = 'Healing Potions: ' + healingpotioncount
    damageitembutton.innerHTML = 'Damage Potions: ' + dmgpotioncount
});

healitembutton.addEventListener("click", function () {
    healitembutton.style.display = 'none'
    damageitembutton.style.display = 'none'
    storyContainer.disabled = true
    slash.disabled = true
    inventory.disabled = true
    skills.disabled = true
    fabricator.disabled = true
    healing()
});

damageitembutton.addEventListener("click", function () {
    healitembutton.style.display = 'none'
    damageitembutton.style.display = 'none'
    storyContainer.disabled = true
    slash.disabled = true
    inventory.disabled = true
    skills.disabled = true
    fabricator.disabled = true
    dmgmodify()
});

function enemyattack() {
    if (allycount === 0) {
        setTimeout(function () {
            let enemyAttacks = Math.floor(Math.random() * enemies[enemytype].attacks.length)
            let chosenAttack = enemies[enemytype].attacks[enemyAttacks]
            jasonhealth = jasonhealth - chosenAttack.damage
            storyContainer.disabled = true
            if (jasonhealth <= 0) {
                scene.style.display = 'none'
                scene.style.backgroundColor = 'rgba(0, 0, 0)'
            }

            jasonhp.innerHTML = "JasonHP: " + jasonhealth + "/" + protagonist["jason"].maxhealth
            storyContainer.innerHTML = chosenAttack.text
            slash.disabled = false
            inventory.disabled = false
            skills.disabled = false
            fabricator.disabled = false
            playerturn = true;
            skillcooldown++
        }, 1750);
    }

    else if (allycount === 1) {
        setTimeout(function () {
            let enemyAttacks = Math.floor(Math.random() * enemies[enemytype].attacks.length)
            let chosenAttack = enemies[enemytype].attacks[enemyAttacks]
            jasonhealth = jasonhealth - chosenAttack.damage
            storyContainer.disabled = true
            if (jasonhealth <= 0) {
                scene.style.display = 'none'
                scene.style.backgroundColor = 'rgba(0, 0, 0)'
            }

            jasonhp.innerHTML = "JasonHP: " + jasonhealth + "/" + protagonist["jason"].maxhealth
            storyContainer.innerHTML = chosenAttack.text
            slash.disabled = false
            inventory.disabled = false
            playerturn = true;
            skillcooldown++
        }, 1750);
    }
}


function healing() {
    storyContainer.disabled = true
    slash.disabled = true
    inventory.disabled = true
    skills.disabled = true
    fabricator.disabled = true
    skillgroup.style.display = 'none'
    doubleslash.style.display = 'none'
    fanknuckles.style.display = 'none'
    frostaxethrow.style.display = 'none'
    boomerthrow.style.display = 'none'
    toothnailing.style.display = 'none'
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
        }
        else {
            storyContainer.disabled = true
            storyContainer.innerHTML = 'You don\' have enough of this item!'
            playerturn = true
        }

        if (hans && clerica && bridgette) {
            hansattack()
            bridgetteattack()
            clericaheal()
        }

        else if (hans && clerica) {
            hansattack()
            clericaheal()
        }

        else if (hans && bridgette) {
            hansattack()
            bridgetteattack()
        }

        else if (bridgette && clerica) {
            bridgetteattack()
            clericaheal()
        }

        else if (hans) {
            hansattack()
        }

        else if (clerica) {
            clericaheal()
        }

        else if (bridgette) {
            bridgetteattack()
        }

        else {
            enemyattack()
        }
    }
};

function dmgmodify() {
    storyContainer.disabled = true
    slash.disabled = true
    inventory.disabled = true
    skills.disabled = true
    fabricator.disabled = true
    skillgroup.style.display = 'none'
    doubleslash.style.display = 'none'
    fanknuckles.style.display = 'none'
    frostaxethrow.style.display = 'none'
    boomerthrow.style.display = 'none'
    toothnailing.style.display = 'none'
    if (playerturn) {
        if (dmgpotioncount != 0) {
            dmgpotioncount = dmgpotioncount - 1
            dmgmodifier = true
            storyContainer.innerHTML = items['doubledamage'].text
            playerturn = false
        }

        else {
            storyContainer.innerHTML = 'You don\' have enough of this item!'
            playerturn = true
        }

        if (hans && clerica && bridgette) {
            hansattack()
            bridgetteattack()
            clericaheal()
        }

        else if (hans && clerica) {
            hansattack()
            clericaheal()
        }

        else if (hans && bridgette) {
            hansattack()
            bridgetteattack()
        }

        else if (bridgette && clerica) {
            bridgetteattack()
            clericaheal()
        }

        else if (hans) {
            hansattack()
        }

        else if (clerica) {
            clericaheal()
        }


        else if (bridgette) {
            bridgetteattack()
        }

        else {
            enemyattack()
        }
    }
};

function winBattle() {
    enemy1hp.style.display = 'none'
    enemy1.style.display = 'none'
    slash.style.display = 'none'
    inventory.style.display = 'none'
    skills.style.display = 'none'
    fabricator.style.display = 'none'
    jasonhp.style.display = 'none'
    skillgroup.style.display = 'none'
    doubleslash.style.display = 'none'
    fanknuckles.style.display = 'none'
    frostaxethrow.style.display = 'none'
    boomerthrow.style.display = 'none'
    toothnailing.style.display = 'none'
    battleactive = false
    storyContainer.disabled = false
    playerturn = true
    victory = true
    battlecount++
    storyContainer.innerHTML = 'You have defeated ' + enemies[enemytype].name + '!'
    if (juniorpath === "nice") {
        jasonhealth = jasonhealth + 30
        if (jasonhealth > protagonist["jason"].maxhealth) {
            jasonhealth = protagonist["jason"].maxhealth;
        }
        storyContainer.innerHTML = 'You have defeated ' + enemies[enemytype].name + '!' + ' And since you were nice to Junior he heals you 30 hp!'
        console.log('jasonhealth: ' + jasonhealth)
        console.log('battlecount: ' + battlecount)
    }
};

function enemydisplay() {
    enemytype = localStorage.getItem("bookmark")
    enemy1.src = "images/" + enemytype + ".png"
    enemy1.style.height = "300px"
    storyContainer.innerHTML = "I am now fighting " + enemytype + "!"
}

function battledisplay() {
    enemy1hp.style.display = 'inline-block'
    enemy1.style.display = 'inline-block'
    jasonhp.style.display = 'inline-block'
    slash.style.display = 'inline-block'
    inventory.style.display = 'inline-block'
    skills.style.display = 'inline-block'
    storyContainer.disabled = true
    if (hasfabricator == false)
        fabricator.style.display = 'none'
    else {
        fabricator.style.display = 'inline-block'
    }
    choice1.style.display = 'none'
    choice2.style.display = 'none'
    choice3.style.display = 'none'
}

function hansattack() {
    setTimeout(function () {
        let hansAttacks = Math.floor(Math.random() * protagonist.hans.attacks.length)
        let chosenAttack = protagonist.hans.attacks[hansAttacks]
        remainingenemyhp = remainingenemyhp - chosenAttack.damage
        storyContainer.disabled = true
        slash.disabled = true
        inventory.disabled = true
        if (remainingenemyhp <= 0) {
            winBattle()
        }
        else {
            enemy1hp.innerHTML = remainingenemyhp + "/" + enemies[enemytype].maxhealth
            storyContainer.innerHTML = chosenAttack.text
            enemyattack();
        }
    }, 1750);
}

function bridgetteattack() {
    setTimeout(function () {
        let bridgettesAttacks = Math.floor(Math.random() * protagonist.bridgette.attacks.length)
        let chosenAttack = protagonist.bridgette.attacks[bridgettesAttacks]
        remainingenemyhp = remainingenemyhp - chosenAttack.damage
        storyContainer.disabled = true
        slash.disabled = true
        inventory.disabled = true
        skills.disabled = true
        if (remainingenemyhp <= 0) {
            winBattle()
        }
        else {
            enemy1hp.innerHTML = remainingenemyhp + "/" + enemies[enemytype].maxhealth
            storyContainer.innerHTML = chosenAttack.text
            enemyattack();
        }
    }, 1750);
}

function clericaheal() {
    setTimeout(function () {
        jasonhealth = jasonhealth + 20
        if (jasonhealth > protagonist["jason"].maxhealth) {
            jasonhealth = protagonist["jason"].maxhealth;
        }
        storyContainer.disabled = true
        slash.disabled = true
        inventory.disabled = true
        skills.disabled = true
        if (remainingenemyhp <= 0) {
            winBattle()
        }
        else {
            enemy1hp.innerHTML = remainingenemyhp + "/" + enemies[enemytype].maxhealth
            storyContainer.innerHTML = 'Clerica heals Jason for 20 hp!'
            jasonhp.innerHTML = "JasonHP: " + jasonhealth + "/" + protagonist["jason"].maxhealth
            enemyattack();
        }
    
    }, 1750);
}

function levelcontinue() {
    story.push("cityprogression")
        presentStory = story[story.length - 1]
        choice1.innerHTML = dialogue[presentStory].choices[0][0]
        choice2.innerHTML = dialogue[presentStory].choices[1][0]
        choice3.innerHTML = dialogue[presentStory].choices[2][0]
        storyContainer.innerHTML = dialogue[presentStory].text
}

function hidechoices() {
    choice1.style.display = 'none'
        choice2.style.display = 'none'
        choice3.style.display = 'none'
}

function displaythreechoices() {
    choice1.style.display = 'inline-block'
        choice2.style.display = 'inline-block'
        choice3.style.display = 'inline-block'
}

function updatesaveenemy() {
    presentStory = story[story.length - 1]
        localStorage.setItem("bookmark", presentStory)
}

function displaytwochoices() {
choice1.style.display = 'inline-block'
            choice2.style.display = 'inline-block'
            choice3.style.display = 'none'
}