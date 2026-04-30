import { healingpotioncount, dmgpotioncount, juniorpath } from "./story.js";



const slash = document.getElementById("slash")



const inventory = document.getElementById("inventory")



const skills = document.getElementById("skills")



const fabricator = document.getElementById("fabricator")



const enemy1 = document.getElementById("enemy1")



const enemy2 = document.getElementById("enemy2")



const enemy3 = document.getElementById("enemy3")



const enemy1hp = document.getElementById("enemy1hp")



const enemy2hp = document.getElementById("enemy2hp")



const enemy3hp = document.getElementById("enemy3hp")



const jasonhp = document.getElementById("jasonhp")



const hanshp = document.getElementById("hanshp")



const bridgettehp = document.getElementById("bridgettehp")



const clerica = document.getElementById("clericahp")

const storyContainer = document.getElementById("startexpo")

enemystats = ["sealion"]

var remainingenemyhp

var enemytype

const protagonist = {

    jason: {

        health: 100,

        damage: 15,

    },



    bridgette: {

        health: 150,

        damage: 10,

    },



    hans: {

        health: 75,

        damage: 10

    },



    clerica: {

health: 100,

heal: 100

    }

};



const enemies = {

sealion: {

    name: 'sealion',

    health : 75,

    damage : 12,

},



polarbearer: {

    name: 'polarbearer',

    health : 150,

    damage : 8,

},



penguinja: {

    name: 'penguinja',

    health : 100,

    damage : 10,

},



kamiron: {

    name: 'kamiron',

    health : 100,

    damage : 8,

},



mab: {

    name: 'M.A.B',

    health : 100,

    damage : 8,

},



asr: {

    name: 'A.S.R',

    health : 100,

    damage : 8,

},



ahg: {

    name: 'A.H.G',

    health : 100,

    damage : 8,

},



boomera: {

    name: 'Kamiron',

    health : 100,

    damage : 8,

},



weedwhip: {

    name: 'Weed Whip',

    health : 100,

    damage : 8,

},



attackerfloresta: {

    name: 'Attacker Floresta',

    health : 100,

    damage : 8,

},



bomberregy: {

    name: 'Bomber Regy',

    health : 100,

    damage : 8,

},



knucklesandshieva: {

    name: 'Brass Knuckles and Shieva',

    health : 100,

    damage : 8,

},



toothandnail: {

    name: 'Tooth and Nail',

    health: 100,

    damage: 8

},



wanoba: {

    name: 'Wanoba',

    health : 100,

    damage : 8,

},



dante: {

    name: 'Dante',

    health : 100,

    damage : 8,

}

};



const battletrack = {

jasonstrike: {

    text: 'Jason slashed his opponent for 15 damage!',

},



jasonspa: {

    text: 'Jason slashes twice and does 30 damage'

},



jasonspa2: {

    text: 'Jason uses the combined move: Fan Knuckles and does a whopping 35 damage'

},



jasonspa3: {

    text: 'Jason uses Kamiron\'s technique: Frost Axe Throw and does a whopping 35 damage'

},



jasonspa4: {

    text: 'Jason uses Boomera\'s technique: Boomer Throw and does a whopping 35 damage'

},



jasonspa5: {

    text: 'Jason uses Tooth and Nail\'s technique: Tooth Nailing and does a whopping 35 damage'

},



fabricatorattack: {

    text: 'Jason uses the Fabricator and lasers the enemy for a whopping 80 damage'

},



bridgettestrike: {

    text: 'Bridgette hammered into the opponent for 10 damage!',

},



bridgettespa: {

    text: 'Bridgette spiral spins into the opponent for 20 damage!'

},



hansstrike: {

text: 'Hans pummelled his opponent for 20 damage!',

},



hansspa: {

    text: 'Hans bicycle kicks the opponent for 30 damage!'

},



clericaheal: {

text: 'Clerica healed the party for 15 hp!',

},



clericaspa: {

    text: 'Clerica raises defense by 5%'

},



penguinjastrike: {

    text: 'Opposing penguinja threw a kunai and did 10 damage!',

},



polarbearerstrike: {

    text: 'Polarbearer slammed his shield and did 8 damage!',

},



sealionstrike: {

    text: 'Sealion roundhouse kicks for 12 damage!'

},



kamironstrike: {

    text: 'Kamiron strikes you for 15 damage!'

},



kamironstrike: {

    text: 'Kamiron throws an ice axe at you for 30 damage!'

},



ahgstrike: {

    text: 'Opposing A.H.G threw a sai and did 10 damage!',

},



asrstrike: {

    text: 'A.S.R stabs you with his spear and did 12 damage!',

},



mabstrike: {

    text: 'M.A.B smacks for 8 damage!'

},



boomerastrike: {

    text: 'Boomera cartwheel kicks you for 15 damage!'

},





boomeraspa: {

    text: 'Boomera throws her boomerang and damages you for 30 damage!'

},



bomberregystrike: {

    text: 'Opposing Bomber Regy shot out smudge and did 8 damage!',

},



attackerflorestastrike: {

    text: 'Attacker Floresta handstand spinning kicks you and did 12 damage!',

},



weedwhipstrike: {

    text: 'WeedWhip whips for 10 damage!'

},



doublebossstrike: {

    text: 'Boss Shieva and Brass Knuckles attack you for 15 damage!'

},



doublebossspa: {

    text: 'Boss Shieva and Brass Knuckles use a combined move: Fan Knuckles and damages you for 30 damage!'

},



toothandnailstrike: {

    text: 'Tooth and Nail slashes you for 15 damage!'

},



toothandnailspa: {

    text: 'Tooth and Nail uses his backflip kick attack and damages you for 30 damage!'

},



wanobastrike: {

    text: 'Wanoba strikes you with his Kitana for 25 damage!'

},



wanobaspa: {

    text: 'Wanoba does a multi flash slash and damages you for 40 damage!'

},



dantestrike: {

    text: 'Dante strikes you for 30 damage!'

},



dantespa: {

    text: 'Dante unleashes his rapid, high speed thrusting palm strikes which damage you for a whopping 50 damage!'

}

};

export function beginbattle() {
    enemytype = localStorage.getItem("bookmark")
    remainingenemyhp = enemies[enemytype].health
};

slash.addEventListener("click", function() {
    remainingenemyhp = remainingenemyhp - protagonist["jason"].damage
    if (remainingenemyhp <= 0) {
        remainingenemyhp = 0
enemy1.style.display = 'none'
        winBattle()
    }

    else {
        storyContainer.innerHTML = battletrack["jasonstrike"].text
    }
    enemy1hp.innerHTML = (remainingenemyhp) + "/" + (enemies[enemytype].health);
    });

    beginbattle()

    export function winBattle() {
storyContainer.innerHTML = 'You have defeated ' + enemytype.name + '!'
slash.style.disply = 'none'
inventory.style.disply = 'none'
skills.style.disply = 'none'
fabricator.style.disply = 'none'
    }