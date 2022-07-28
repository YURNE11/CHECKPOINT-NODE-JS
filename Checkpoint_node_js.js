//Exercice 1
console.log("Hello WORLD")


//_____________________________________________
//Exercice 2
const process = require("process")

var tab=process.argv;
var som =0;
    for (let i=0; i<tab.length; i++){
        if(i>=2){
            som= som +(Number(tab[i]))
        }
    }
console.log(som)


//______________________________________________
//Exercice 3
const fs = require("fs")

var data=fs.readFileSync('input.txt')
var newdata=data.toString().split('')
var compteur= 0;
var tab=["\n","\t"];
  for (let i=0; i<newdata.length; i++){
    for(let j=0;j<tab.length;j++){
      if(newdata[i]===tab[j]){
        compteur=compteur+1
      }}
  } 
console.log(compteur)


//_______________________________________________
//Exercice 4
const fs = require("fs")

fs.readFile('input.txt',function(err,data){
    if(err)return console.lo('erreur')
    var newdata=data.toString().split('')
    var compteur= 0;
    var tab=["\n","\t"];
        for (let i=0; i<newdata.length; i++){
            for(let j=0;j<tab.length;j++){
                if(newdata[i]===tab[j]){
                    compteur=compteur+1
            }}
    } 
	console.log("le nombre de saut de ligne est:" +compteur)
})
console.log("programme asynchrone fini")