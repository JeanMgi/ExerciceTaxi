"use strict";
let nom = "John";
let sante = 10;
let radio = ["Where Is My Mind - Pixies", "Chippin'In - Samurai", "Monsters - All Time Low", "Riptide - Grandson", "Anissa - Wejdene"];
let num;
let changement = 0;

function alea(min, max){
    /**
     * Math.floor prend l'entier inférieur ou égal à un nombre
     * Math.random donne un résultat aléatoire entre 0 et 1(exclus)
     * En multipliant par (max-min) on obtient un résultat entre 0 et (max-min+1)(exclus) donc entre (max-min)inclus
     * En ajoutant min on obtient un résultat entre min et max
     */
    let nbAlea = Math.floor(Math.random()*(max-min+1)+min);
    return nbAlea;
}

for(let i = 29;i>=0;i--){
    if(i==0){
        console.log("John est arrivé sans mourir !");
        console.log("John a changé "+changement+" fois de taxi.")
    }else if(sante == 0){
        console.log("John a écouté trop de Wejdene, il a explosé...");
        break;
    }else{
        num = alea(0,4);
        console.log("La musique jouée est : "+radio[num]);
        if(num==4){
            console.log("Alerte ! Wejdene à la radio !");
            console.log("John change de taxi.");
            sante--;
            changement++;
        }
        console.log("Il reste "+i+" feux.");
    }
}