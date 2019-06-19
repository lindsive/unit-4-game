$(document).ready(function() {
var yourCharacter;
var enemies;
var defender;
var characterChosen = false;

var obiWan = {
    hp: 120,
    attack: 8
};

var luke = {
    hp: 100,
    attack: 5
};

var darthVader = {
    hp: 150,
    attack: 20,
};

var darthMaul = {
    hp: 180, 
    attack: 25
};

// Functions


$("#attacker").on("click", function() {
   console.log("abc") 
    if (characterChosen) {
        characterChosen=true;
        $("#imageSection").appendTo("#attacker");
        console.log(characterChosen);
        $("#imageSection").appendTo("#pickEnemy");
        console.log("addingEnemoes");
    }

});


});