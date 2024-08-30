let isGameOver = false;
let mdj = mdjSelect2();
let iRad = false;
/*
function mdjSelect()
{
    let tmp = prompt(mdjQuestion);
    while(tmp != 0 && tmp != 2){ tmp = prompt(mdjQuestion); }
    let resultMDJ = prompt(mdjQuestionInf);
    while(tmp != 0 && tmp != 1){ resultMDJ = prompt(mdjQuestionInf); }

    if(tmp+resultMDJ == 0){console.log(normDefault);}//PRINT NBR D'OCCURENCES PAR DEFAUT
    else if(tmp+resultMDJ == 2){console.log(norpDefault);}
    else{console.log(infDefault);}

    return (parseInt(tmp)+parseInt(resultMDJ));
}*/

function mdjSelect2()
{
    let gameMod = 0;
    let isInfMod = document.querySelector('input[name="modInf"]');//getElementById("infinite");
    if(isInfMod.checked){gameMod=isInfMod.value;}
    else {gameMod=0;}

    let radioModList = document.querySelectorAll('input[name="mod"]');
    for(let i=0; i < radioModList.length; i++)
    {if(radioModList[i].checked){gameMod=parseInt(gameMod)+parseInt(radioModList[i].value);}}
    
    return gameMod;
}

let changingToMot = document.getElementById("mots");// SI USER APPUIS SUR MOTS
changingToMot.addEventListener('click', function() {
     mdj = mdjSelect2();
     reset();majScoreMDJ();
});
let changingToPhrase = document.getElementById("phrases");// SI USER APPUIS SUR PHRASES
changingToPhrase.addEventListener('click', function() {
     mdj = mdjSelect2();
     reset();majScoreMDJ();
});
let infModClick = document.querySelector('input[name="modInf"]');// SI USER APPUIS SUR PHRASES
infModClick.addEventListener('click', function() {
    if(!iRad){infModClick.checked = true;iRad = true;}
    else{infModClick.checked = false;iRad = false;}
     mdj = mdjSelect2();
     reset();majScoreMDJ();
});

function majScoreMDJ()
{
    let value = scoreMaxTab[mdj];
    let affichageScoreMax = document.querySelector(".zoneScoreMax span");
        affichageScoreMax.textContent = value;
}
function majMaxScore(value)
{   
    if(value > scoreMaxTab[mdj])
    {
        alert(msgMaxScore+"Tu as fait ton record ! Tu as obtenus "+value+" points !");
        scoreMaxTab[mdj] = value;
        let affichageScoreMax = document.querySelector(".zoneScoreMax span");
        affichageScoreMax.textContent = value;
    }
    else{
        console.log("Ton score est de "+value+" !");
    }
    reset();
}
function majScore(value)
{
    let affichageScore = document.querySelector(".zoneScore span");
    affichageScore.textContent = value;
    let textBoxInput = document.getElementById("inputEcriture");
    textBoxInput.value = "";
}