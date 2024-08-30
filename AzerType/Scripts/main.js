/*let gameParam 
{
    let motJeu = "";
    let phraseJeu = "";
    let score = 0;



}*/
let motJeu = "";
let phraseJeu = "";
let score = 0;
let cptTour = 0;
function reset(){score = 0;cptTour = 0;motJeu = "";phraseJeu = ""; isGameOver = false; majScore(0); game2();}

game2();

/*function game()
{
    let cptTour = 0; let score = 0;
    while(!isGameOver && nbrMotPhraseMaxTab[mdj%2]>cptTour){//Si on est pas gameOver et pas fait tout les tours de jeux on continue

        if(mdj<2)//SI JEU AVEC MOT
        {
            function randomMot(){ return motList[Math.floor(Math.random()*motList.length-1)]; }
            const motJeu = randomMot();

            const msgPrompt = "Entre le mot : "+motJeu;
            // let motEntree = prompt(msgPrompt);

            let motPropose = document.querySelector(".zoneProposition");
            console.log(motPropose);
            motPropose.textContent = motJeu;

            // let inputUser = document.getElementById("inputEcriture").addEventListener("keydown");
            
            document.getElementById('inputEcriture').addEventListener('keypress', function (e) {
                if (e.key === 'Enter') {
                    let inputUser = document.getElementById('inputEcriture');
                }
            });
            console.log(inputUser);
            motEntree = inputUser.textContent;


            let validButton = document.getElementById("btnValiderMot");
            console.log(validButton);


            

            let listButton = document.querySelectorAll(".zoneOptions radio");
            console.log(listButton);

            const msgExplication = "Dommage ! Tu as écrit : '"+motEntree+"' au lieu de : '"+motJeu+"'";

            if(motEntree === motJeu) { score+=1; }
            else {console.log(msgExplication); console.log(msgEchec); isGameOver=true; majMaxScore(score);}
        }
        else//SI JEU AVEC PHRASE
        {
            function randomPhrase(){ return phraseList[Math.floor(Math.random()*phraseList.length-1)]; }
            const phraseJeu = randomPhrase();
            
            const msgPrompt = "Entre la phrase : "+phraseJeu;
            let phraseEntree = prompt(msgPrompt);
  
            const msgExplication = "Dommage ! Tu as écrit : '"+phraseEntree+"' au lieu de : '"+phraseJeu+"'";


            if(phraseEntree === phraseJeu) { score+=1;}
            else {console.log(msgExplication); console.log(msgEchec); isGameOver=true; majMaxScore(score);}

        }
        scoreTemp = score;cptTour++;
        majScore(scoreTemp);
    }
    if(!isGameOver){majMaxScore(scoreTemp);}
}*/
function game2()
{
    if(!isGameOver && nbrMotPhraseMaxTab[mdj%2]>=cptTour){//Si on est pas gameOver et pas fait tout les tours de jeux on continue
        
        if(mdj<2)//SI JEU AVEC MOT
        {
            function randomMot(){ return motList[Math.floor(Math.random()*motList.length-1)]; }
            motJeu = randomMot();

            let motPropose = document.querySelector(".zoneProposition");
            console.log(motPropose);
            motPropose.textContent = motJeu;
     
         /* let listButton = document.querySelectorAll(".zoneOptions radio");
            console.log(listButton);*/

        }
        else//SI JEU AVEC PHRASE
        {
            function randomPhrase(){ return phraseList[Math.floor(Math.random()*phraseList.length-1)]; }
            phraseJeu = randomPhrase();
            
            let phrasePropose = document.querySelector(".zoneProposition");
            console.log(phrasePropose);
            phrasePropose.textContent = phraseJeu;

            /*const msgPrompt = "Entre la phrase : "+phraseJeu;
            let phraseEntree = prompt(msgPrompt);*/
        }
    }
    if(isGameOver){majMaxScore(score);}
}


    let inputUser = document.getElementById('inputEcriture');
    inputUser.addEventListener('keypress', function (e) { // USER APPUIE SUR ENTREE
       if (e.key === 'Enter') {
           inputUser = document.getElementById('inputEcriture');
           verifyEntry(inputUser.value);
       }
   });
    //console.log(inputUser);

   let validButton = document.getElementById("btnValiderMot");// SI USER APPUIS SUR VALIDER
   validButton.addEventListener("click", function() {
        inputUser = document.getElementById('inputEcriture');
        verifyEntry(inputUser.value);
   });
    //console.log(validButton);


function verifyEntry(value)
{   
    console.log("on est au "+cptTour+"ème tour sur"+nbrMotPhraseMaxTab[mdj%2]);
    if(nbrMotPhraseMaxTab[mdj%2]>cptTour)
    {
        if(!isGameOver)
        {
            if(mdj<2)//SI JEU AVEC MOT
            {
                const msgExplication = "Dommage ! Tu as écrit : '"+value+"' au lieu de : '"+motJeu+"'";

                if(value === motJeu) {score+=1;cptTour++; majScore(score); game2();}
                else {console.log(msgExplication); console.log(msgEchec); isGameOver=true; majMaxScore(score);}

            }
            else//SI JEU AVEC PHRASE
            {
                const msgExplication = "Dommage ! Tu as écrit : '"+value+"' au lieu de : '"+phraseJeu+"'";

                if(value === phraseJeu) { score+=1;cptTour++; majScore(score); game2();}
                else {console.log(msgExplication); console.log(msgEchec); isGameOver=true; majMaxScore(score);}
            }
        }
    }
    else
    {
        let motPropose = document.querySelector(".zoneProposition");//CLEAN LA PROPOSITION
        motPropose.textContent = "";
        let inputUser = document.getElementById('inputEcriture');//CLEAN L'ENTREE UTILISATEUR
        inputUser.value = "";
        majMaxScore(score);
    }
}
