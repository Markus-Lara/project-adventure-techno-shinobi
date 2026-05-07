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

const clericahp = document.getElementById("clericahp")

const enemy1hp = document.getElementById("enemy1hp")

const enemy2hp = document.getElementById("enemy2hp")

const enemy3hp = document.getElementById("enemy3hp")

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

var victory = false

var hans = false

var bridgette = false

var clerica = false

var frostaxeskill = false

var fanknucklesskill = false

var boomerthrowskill = false

var toothnailingskill = false

var finishfrostveil = false

var finishgrumoda = false

var finishlambda = false

var enemytype;

var remainingenemyhp;

var jasonspa;

var jasonhealth = protagonist["jason"].maxhealth


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
        presentStory = story[story.ength - 1]

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

    if (presentStory === "mab") {                               ///start battles
        battledisplay()
        enemydisplay()
        beginbattle()
    }

    else if (presentStory === "asr") {
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
        enemy1.src = "images/asr.png"
        enemy1.style.height = "300px"
    }

    else if (presentStory === "ahg") {
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
        enemy1.src = "images/ahg.png"
        enemy1.style.height = "300px"
    }


    else if (presentStory === "weedwhip") {
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
        enemy1.src = "images/weedwhip.png"
        enemy1.style.height = "300px"
    }

    else if (presentStory === "attackerfloresta") {
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
        enemy1.src = "images/attackerfloresta.png"
        enemy1.style.height = "300px"
    }

    else if (presentStory === "bomberreggy") {
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
        enemy1.src = "images/bombereggy.png"
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

    else if (victory === true) {
        victory = false
        story.push("cityprogression")
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
        choice1.style.display = 'inline-block'
        choice2.style.display = 'inline-block'
        choice3.style.display = 'inline-block'
        enemy1hp.style.display = 'none'
        enemy1.style.display = 'none'
        slash.style.display = 'none'
        inventory.style.display = 'none'
        skills.style.display = 'none'
        fabricator.style.display = 'none'
        jasonhp.style.display = 'none'
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

    else if (presentStory === "items")

        if (presentStory === "items") {                              //items function
            item1.style.visibility = 'visible'
            item2.style.visibility = 'visible'
            item3.style.visibility = 'visible'
            item4.style.visibility = 'visible'
            item5.style.visibility = 'visible'
            storyContainer.disabled = true
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
        slash.style.display = 'inline-block'
        inventory.style.display = 'inline-block'
        skills.style.display = 'inline-block'
        if (hasfabricator === false)
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

    if (presentStory === "hanshelp" || presentStory === "hansnohelp") {
        story.push("cityprogression")
        presentStory = story[story.length - 1]
        choice1.innerHTML = dialogue[presentStory].choices[0][0]
        choice2.innerHTML = dialogue[presentStory].choices[1][0]
        choice3.innerHTML = dialogue[presentStory].choices[2][0]
        storyContainer.innerHTML = dialogue[presentStory].text
        choice1.style.display = 'inline-block'
        choice2.style.display = 'inline-block'
        choice3.style.display = 'inline-block'
    }

    if (presentStory === "bridgettejoin" || presentStory === "bridgettenojoin") {
        story.push("cityprogression")
        presentStory = story[story.length - 1]
        choice1.innerHTML = dialogue[presentStory].choices[0][0]
        choice2.innerHTML = dialogue[presentStory].choices[1][0]
        choice3.innerHTML = dialogue[presentStory].choices[2][0]
        storyContainer.innerHTML = dialogue[presentStory].text
        choice1.style.display = 'inline-block'
        choice2.style.display = 'inline-block'
        choice3.style.display = 'inline-block'
    }

    if (battlecount === 4 && frostveil) {
        story.push("hans")
        presentStory = story[story.length - 1]
        choice1.innerHTML = dialogue[presentStory].choices[0][0]
        choice2.innerHTML = dialogue[presentStory].choices[1][0]
        choice1.style.display = 'inline-block'
        choice2.style.display = 'inline-block'
        choice3.style.display = 'none'
        storyContainer.innerHTML = dialogue[presentStory].text
        battlecount++
        enemy1.style.display = 'inline-block'
        enemy1.src = "images/hans.png"
        console.log("battlecount: " + battlecount)
    }

    if (battlecount === 4 && grumoda) {
        story.push("clerica")
        presentStory = story[story.length - 1]
        choice1.innerHTML = dialogue[presentStory].choices[0][0]
        choice2.innerHTML = dialogue[presentStory].choices[1][0]
        choice1.style.display = 'inline-block'
        choice2.style.display = 'inline-block'
        choice3.style.display = 'none'
        storyContainer.innerHTML = dialogue[presentStory].text
        battlecount++
        enemy1.style.display = 'inline-block'
        enemy1.src = "images/clerica.png"
        console.log("battlecount: " + battlecount)
    }

    if (battlecount === 4 && lambda) {
        story.push("bridgette")
        presentStory = story[story.length - 1]
        choice1.innerHTML = dialogue[presentStory].choices[0][0]
        choice2.innerHTML = dialogue[presentStory].choices[1][0]
        choice1.style.display = 'inline-block'
        choice2.style.display = 'inline-block'
        choice3.style.display = 'none'
        storyContainer.innerHTML = dialogue[presentStory].text
        battlecount++
        enemy1.style.display = 'inline-block'
        enemy1.src = "images/bridgette.png"
        console.log("battlecount: " + battlecount)
    }

    else if (presentStory === "kamiron") {
        localStorage.setItem("bookmark", presentStory)
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 8 && presentStory === "cityprogression" && frostveil) {
        story.push("kamiron")
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
        choice1.style.display = 'none'
        choice2.style.display = 'none'
        choice3.style.display = 'none'
    }

    else if (battlecount === 9 && frostveil) {
        battlecount = 0
        frostveil = false
        frostaxeskill = true
        finishfrostveil = true
        story.push("finishfrostveil")
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
        choice1.innerHTML = dialogue[presentStory].choices[0][0]
        choice2.innerHTML = dialogue[presentStory].choices[1][0]
        choice1.style.display = 'inline-block'
        choice2.style.display = 'inline-block'
        choice3.style.display = 'none'
        console.log("finished frostveil: " + finishfrostveil)
        console.log("battlecount: " + battlecount)
    }

    else if (battlecount === 8 && presentStory === "cityprogression" && lambda) {
        story.push("boomera")
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
        choice1.style.display = 'none'
        choice2.style.display = 'none'
        choice3.style.display = 'none'
    }

    else if (battlecount === 9 && lambda) {
        battlecount = 0
        lambda = false
        boomerthrowskill = true
        finishlambda = true
        story.push("finishfrostveil")
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
        choice1.innerHTML = dialogue[presentStory].choices[0][0]
        choice2.innerHTML = dialogue[presentStory].choices[1][0]
        choice1.style.display = 'inline-block'
        choice2.style.display = 'inline-block'
        choice3.style.display = 'none'
        console.log("finished lambda: " + finishlambda)
        console.log("battlecount: " + battlecount)
    }

    else if (battlecount === 8 && presentStory === "cityprogression" && grumoda) {
        story.push("knucklesandshieva")
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
        choice1.style.display = 'none'
        choice2.style.display = 'none'
        choice3.style.display = 'none'
    }

    else if (battlecount === 9 && grumoda) {
        battlecount = 0
        grumoda = false
        fanknucklesskill = true
        finishgrumoda = true
        story.push("finishfrostveil")
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
        choice1.innerHTML = dialogue[presentStory].choices[0][0]
        choice2.innerHTML = dialogue[presentStory].choices[1][0]
        choice1.style.display = 'inline-block'
        choice2.style.display = 'inline-block'
        choice3.style.display = 'none'
        console.log("finished lambda: " + finishlambda)
        console.log("battlecount: " + battlecount)
    }
});

choice1.addEventListener("click", function () {       //choice 1 function
    if (presentStory === "firstchoice") {
        story.push("run")
        playerpath = "run"
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
        choice1.style.display = 'none'
        choice2.style.display = 'none'
        choice3.style.display = 'none'
        console.log("run path chosen")
    }

    else if (presentStory === "hans") {
        story.push("hanshelp")
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
        choice1.style.display = 'none'
        choice2.style.display = 'none'
        hans = true
        allycount++
        enemy1.style.display = 'none'
        console.log("New ally acquired!")
    }

    else if (presentStory === "clerica") {
        story.push("clericatalk")
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
        choice1.style.display = 'none'
        choice2.style.display = 'none'
        hans = true
        allycount++
        enemy1.style.display = 'none'
        console.log("New ally acquired!")
    }

    else if (presentStory === "bridgette") {
        story.push("bridgettejoin")
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
        choice1.style.display = 'none'
        choice2.style.display = 'none'
        hans = true
        allycount++
        enemy1.style.display = 'none'
        console.log("New ally acquired!")
    }

    else if (battlecount === 1 && presentStory === "cityprogression" && frostveil) {
        story.push("sealion")
        presentStory = story[story.length - 1]
        localStorage.setItem("bookmark", presentStory)
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 2 && presentStory === "cityprogression" && frostveil) {
        story.push("sealion")
        presentStory = story[story.length - 1]
        localStorage.setItem("bookmark", presentStory)
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 3 && presentStory === "cityprogression" && frostveil) {
        story.push("polarbearer")
        presentStory = story[story.length - 1]
        localStorage.setItem("bookmark", presentStory)
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 5 && presentStory === "cityprogression" && frostveil) {
        story.push("polarbearer")
        presentStory = story[story.length - 1]
        localStorage.setItem("bookmark", presentStory)
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 6 && presentStory === "cityprogression" && frostveil) {
        story.push("penguinja")
        presentStory = story[story.length - 1]
        localStorage.setItem("bookmark", presentStory)
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 7 && presentStory === "cityprogression" && frostveil) {
        story.push("sealion")
        presentStory = story[story.length - 1]
        localStorage.setItem("bookmark", presentStory)
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 8 && presentStory === "cityprogression" && frostveil) {
        story.push("penguinja")
        presentStory = story[story.length - 1]
        localStorage.setItem("bookmark", presentStory)
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 1 && presentStory === "cityprogression" && lambda) {
        story.push("asr")
        presentStory = story[story.length - 1]
        localStorage.setItem("bookmark", presentStory)
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 2 && presentStory === "cityprogression" && lambda) {
        story.push("mab")
        presentStory = story[story.length - 1]
        localStorage.setItem("bookmark", presentStory)
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 3 && presentStory === "cityprogression" && lambda) {
        story.push("asr")
        presentStory = story[story.length - 1]
        localStorage.setItem("bookmark", presentStory)
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 5 && presentStory === "cityprogression" && lambda) {
        story.push("ahg")
        presentStory = story[story.length - 1]
        localStorage.setItem("bookmark", presentStory)
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 6 && presentStory === "cityprogression" && lambda) {
        story.push("asr")
        presentStory = story[story.length - 1]
        localStorage.setItem("bookmark", presentStory)
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 7 && presentStory === "cityprogression" && lambda) {
        story.push("ahg")
        presentStory = story[story.length - 1]
        localStorage.setItem("bookmark", presentStory)
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 8 && presentStory === "cityprogression" && lambda) {
        story.push("ahg")
        presentStory = story[story.length - 1]
        localStorage.setItem("bookmark", presentStory)
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (presentStory === "junior") {
        story.push("juniornice")
        juniorpath = "nice"

        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
        choice1.style.display = 'none'
        choice2.style.display = 'none'
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
        return
    }

    else if (presentStory === "enterlambda") {
        story.push("mab")
        presentStory = story[story.length - 1]
        localStorage.setItem("bookmark", presentStory)
        storyContainer.innerHTML = dialogue[presentStory].text
        choice1.style.display = 'none'
        choice2.style.display = 'none'
        choice3.style.display = 'none'
        enemy1.style.display = 'inline-block'
        enemy1.src = 'images/mab.png'
        enemy1.style.height = "300px"
        beginbattle()
    }

    else if (presentStory === "entergrumoda") {
        story.push("weedwhip")
        presentStory = story[story.length - 1]
        localStorage.setItem("bookmark", presentStory)
        storyContainer.innerHTML = dialogue[presentStory].text
        choice1.style.display = 'none'
        choice2.style.display = 'none'
        choice3.style.display = 'none'
        enemy1.style.display = 'inline-block'
        enemy1.src = 'images/weedwhip.png'
        beginbattle()
    }


    else if (presentStory === "finishfrostveil") {
        story.push("enterlambda")
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
        scene.style.backgroundImage = 'url(images/LambdaCentral.png)'
        choice1.innerHTML = dialogue[presentStory].choices[0][0]
        choice2.innerHTML = dialogue[presentStory].choices[1][0]
        choice3.innerHTML = dialogue[presentStory].choices[2][0]
        choice1.style.display = 'inline-block'
        choice2.style.display = 'inline-block'
        choice3.style.display = 'inline-block'
    }
});



choice2.addEventListener("click", function () {                 //choice 2 function
    if (presentStory === "firstchoice") {
        story.push("hold")
        playerpath = "hold"
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
        choice1.style.display = 'none'
        choice2.style.display = 'none'
        choice3.style.display = 'none'
        console.log("Fight path chosen")
    }

    else if (presentStory === "hans") {
        story.push("hansnohelp")
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
        choice1.style.display = 'none'
        choice2.style.display = 'none'
        hans = false
        enemy1.style.display = 'none'
        console.log("Can never be too safe!")
    }

    else if (presentStory === "clerica") {
        story.push("clericanotalk")
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
        choice1.style.display = 'none'
        choice2.style.display = 'none'
        hans = true
        allycount++
        enemy1.style.display = 'none'
        console.log("New ally acquired!")
    }

    else if (presentStory === "bridgette") {
        story.push("bridgettenojoin")
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
        choice1.style.display = 'none'
        choice2.style.display = 'none'
        hans = true
        allycount++
        enemy1.style.display = 'none'
        console.log("New ally acquired!")
    }

    else if (battlecount === 1 && presentStory === "cityprogression" && frostveil) {
        story.push("polarbearer")
        presentStory = story[story.length - 1]
        localStorage.setItem("bookmark", presentStory)
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 2 && presentStory === "cityprogression" && frostveil) {
        story.push("penguinja")
        presentStory = story[story.length - 1]
        localStorage.setItem("bookmark", presentStory)
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 3 && presentStory === "cityprogression" && frostveil) {
        story.push("sealion")
        presentStory = story[story.length - 1]
        localStorage.setItem("bookmark", presentStory)
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 5 && presentStory === "cityprogression" && frostveil) {
        story.push("penguinja")
        presentStory = story[story.length - 1]
        localStorage.setItem("bookmark", presentStory)
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 6 && presentStory === "cityprogression" && frostveil) {
        story.push("sealion")
        presentStory = story[story.length - 1]
        localStorage.setItem("bookmark", presentStory)
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 7 && presentStory === "cityprogression" && frostveil) {
        story.push("polarbearer")
        presentStory = story[story.length - 1]
        localStorage.setItem("bookmark", presentStory)
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 8 && presentStory === "cityprogression" && frostveil) {
        story.push("sealion")
        presentStory = story[story.length - 1]
        localStorage.setItem("bookmark", presentStory)
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 1 && presentStory === "cityprogression" && lambda) {
        story.push("ahg")
        presentStory = story[story.length - 1]
        localStorage.setItem("bookmark", presentStory)
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 2 && presentStory === "cityprogression" && lambda) {
        story.push("asr")
        presentStory = story[story.length - 1]
        localStorage.setItem("bookmark", presentStory)
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 3 && presentStory === "cityprogression" && lambda) {
        story.push("mab")
        presentStory = story[story.length - 1]
        localStorage.setItem("bookmark", presentStory)
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 5 && presentStory === "cityprogression" && lambda) {
        story.push("asr")
        presentStory = story[story.length - 1]
        localStorage.setItem("bookmark", presentStory)
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 6 && presentStory === "cityprogression" && lambda) {
        story.push("ahg")
        presentStory = story[story.length - 1]
        localStorage.setItem("bookmark", presentStory)
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 7 && presentStory === "cityprogression" && lambda) {
        story.push("mab")
        presentStory = story[story.length - 1]
        localStorage.setItem("bookmark", presentStory)
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 8 && presentStory === "cityprogression" && lambda) {
        story.push("asr")
        presentStory = story[story.length - 1]
        localStorage.setItem("bookmark", presentStory)
        enemydisplay()
        battledisplay()
        beginbattle()
    }


    else if (presentStory === "junior") {
        story.push("juniormean")
        juniorpath = "mean"
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
        choice1.style.display = 'none'
        choice2.style.display = 'none'
        console.log("You made Junior angry")
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
        return
    }

    else if (presentStory === "enterlambda") {
        story.push("ahg")
        presentStory = story[story.length - 1]
        localStorage.setItem("bookmark", presentStory)
        storyContainer.innerHTML = dialogue[presentStory].text
        choice1.style.display = 'none'
        choice2.style.display = 'none'
        choice3.style.display = 'none'
        enemy1.style.display = 'inline-block'
        enemy1.src = 'images/ahg.png'
        beginbattle()
    }

    else if (presentStory === "entergrumoda") {
        story.push("attackerfloresta")
        presentStory = story[story.length - 1]
        localStorage.setItem("bookmark", presentStory)
        storyContainer.innerHTML = dialogue[presentStory].text
        choice1.style.display = 'none'
        choice2.style.display = 'none'
        choice3.style.display = 'none'
        enemy1hp.style.display = 'inline-block'
        enemy1.style.display = 'inline-block'
        enemy1.src = 'images/attackerfloresta.png'
        beginbattle()
        return
    }
    else if (playerpath === "hold") {                                //checks playerpath based on previous choices
        story.push("enterlambda")
        lambda = true
        scene.style.backgroundImage = 'url(images/LambdaCentral.png)'
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
        choice1.style.display = 'none'
        choice2.style.display = 'none'
        choice3.style.display = 'none'
        storyContainer.innerHTML = dialogue[presentStory].text
    }

    else if (presentStory === "finishfrostveil") {
        story.push("entergrumoda")
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
        scene.style.backgroundImage = 'url(images/GrumodaJungle.png)'
        choice1.style.display = 'inline-block'
        choice2.style.display = 'inline-block'
        choice3.style.display = 'inline-block'
        choice1.innerHTML = dialogue[presentStory].choices[0][0]
        choice2.innerHTML = dialogue[presentStory].choices[1][0]
        choice3.innerHTML = dialogue[presentStory].choices[2][0]
    }

});



choice3.addEventListener("click", function () {          //choice 3 function
    if (presentStory === "firstchoice") {
        story.push("investigate")
        playerpath = "investigate"
        presentStory = story[story.length - 1]
        storyContainer.innerHTML = dialogue[presentStory].text
        choice1.style.display = 'none'
        choice2.style.display = 'none'
        choice3.style.display = 'none'
        console.log("Investigate path chosen")
    }

    else if (battlecount === 1 && presentStory === "cityprogression" && frostveil) {
        story.push("penguinja")
        presentStory = story[story.length - 1]
        localStorage.setItem("bookmark", presentStory)
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 2 && presentStory === "cityprogression" && frostveil) {
        story.push("polarbearer")
        presentStory = story[story.length - 1]
        localStorage.setItem("bookmark", presentStory)
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 3 && presentStory === "cityprogression" && frostveil) {
        story.push("penguinja")
        presentStory = story[story.length - 1]
        localStorage.setItem("bookmark", presentStory)
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 5 && presentStory === "cityprogression" && frostveil) {
        story.push("sealion")
        presentStory = story[story.length - 1]
        localStorage.setItem("bookmark", presentStory)
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 6 && presentStory === "cityprogression" && frostveil) {
        story.push("polarbearer")
        presentStory = story[story.length - 1]
        localStorage.setItem("bookmark", presentStory)
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 7 && presentStory === "cityprogression" && frostveil) {
        story.push("penguinja")
        presentStory = story[story.length - 1]
        localStorage.setItem("bookmark", presentStory)
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 8 && presentStory === "cityprogression" && frostveil) {
        story.push("polarbearer")
        presentStory = story[story.length - 1]
        localStorage.setItem("bookmark", presentStory)
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 1 && presentStory === "cityprogression" && lambda) {
        story.push("mab")
        presentStory = story[story.length - 1]
        localStorage.setItem("bookmark", presentStory)
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 2 && presentStory === "cityprogression" && lambda) {
        story.push("ahg")
        presentStory = story[story.length - 1]
        localStorage.setItem("bookmark", presentStory)
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 3 && presentStory === "cityprogression" && lambda) {
        story.push("ahg")
        presentStory = story[story.length - 1]
        localStorage.setItem("bookmark", presentStory)
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 5 && presentStory === "cityprogression" && lambda) {
        story.push("mab")
        presentStory = story[story.length - 1]
        localStorage.setItem("bookmark", presentStory)
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 6 && presentStory === "cityprogression" && lambda) {
        story.push("mab")
        presentStory = story[story.length - 1]
        localStorage.setItem("bookmark", presentStory)
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 7 && presentStory === "cityprogression" && lambda) {
        story.push("asr")
        presentStory = story[story.length - 1]
        localStorage.setItem("bookmark", presentStory)
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (battlecount === 8 && presentStory === "cityprogression" && lambda) {
        story.push("mab")
        presentStory = story[story.length - 1]
        localStorage.setItem("bookmark", presentStory)
        enemydisplay()
        battledisplay()
        beginbattle()
    }

    else if (presentStory === "entergrumoda") {
        story.push("bomberregy")
        presentStory = story[story.length - 1]
        localStorage.setItem("bookmark", presentStory)
        storyContainer.innerHTML = dialogue[presentStory].text
        choice1.style.display = 'none'
        choice2.style.display = 'none'
        choice3.style.display = 'none'
        enemy1hp.style.display = 'inline-block'
        enemy1.style.display = 'inline-block'
        enemy1.src = 'images/bomberregy.png'
        beginbattle()
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
        presentStory = story[story.length - 1]
        localStorage.setItem("bookmark", presentStory)
        storyContainer.innerHTML = dialogue[presentStory].text
        choice1.style.display = 'none'
        choice2.style.display = 'none'
        choice3.style.display = 'none'
        beginbattle()
        return
    }

    else if (presentStory === "enterlambda") {
        story.push("asr")
        presentStory = story[story.length - 1]
        localStorage.setItem("bookmark", presentStory)
        storyContainer.innerHTML = dialogue[presentStory].text
        choice1.style.display = 'none'
        choice2.style.display = 'none'
        choice3.style.display = 'none'
        enemy1.style.display = 'inline-block'
        enemy1.src = 'url(images/asr.png)'
        beginbattle()
    }
});


item1.addEventListener("click", function () {             //item functions here
    healingpotioncount++
    gathereditems++
    presentStory = story[story.length - 1]
    item1.style.visibility = 'hidden'

    storyContainer.innerHTML = 'I got a damage potion! ' + '(' + gathereditems + '/' + '5' + ')'
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
    storyContainer.innerHTML = 'I got a damage potion! ' + '(' + gathereditems + '/' + '5' + ')'
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
    storyContainer.innerHTML = 'I got a damage potion! ' + '(' + gathereditems + '/' + '5' + ')'
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
        enemy1.src = "images/" + enemytype + ".png"
        enemy1.style.height = "300px"
    }
};

slash.addEventListener("click", function () {
    let attack = protagonist["jason"].attacks[0]
    storyContainer.disabled = true
    slash.disabled = true
    inventory.disabled = true
    healitembutton.style.display = 'none'
    damageitembutton.style.display = 'none'
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
    healing()
});

damageitembutton.addEventListener("click", function () {
    healitembutton.style.display = 'none'
    damageitembutton.style.display = 'none'
    storyContainer.disabled = true
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
            playerturn = true;
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
        }, 1750);
    }

    else if (allycount === 2) {
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
        }, 3500);
    }

    else if (allycount === 3) {
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
        }, 5250);
    }
}

function healing() {
    storyContainer.disabled = true
    slash.disabled = true
    inventory.disabled = true
    skills.disabled = true
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
        let clericaAttacks = Math.floor(Math.random() * protagonist.clerica.attacks.length)
        let chosenAttack = protagonist.clerica.attacks[clericaAttacks]
        jasonhealth = jasonhealth + chosenAttack.heal
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