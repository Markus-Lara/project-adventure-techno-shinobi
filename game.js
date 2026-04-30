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

var remainingenemyhp = enemies[enemytype].health

enemystats = ["sealion"]

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

bridgettestrike: {
    text: 'Bridgette hammered into the opponent for 10 damage!',
},

hansstrike: {
text: 'Hans pummelled his opponent for 20 damage!',
},

clericaheal: {
text: 'Clerica healed the party for 15 hp!',
},

penguinjastrike: {
    text: 'Opposing penguinja threw a kunai and did 10 damage!',
},

polarbearerstrike: {
    text: 'Polarbearer slammed his shield and did 8 damage!',
},

sealionstrike: {
    text: 'Sealion roundhouse kicks for 12 damage!'
}
};