function dwarfRollCall(dwarves) {
  var str=""
  for(var i = 0; i < dwarves.length; i++){
   str += (i + 1) + ". "+ dwarves[i] + " "
  }
  return(str)
}



function summonCaptainPlanet(planeteerCalls){
  var array=[]
 for(var x = 0; x <planeteerCalls.length; x++){
   array.push(planeteerCalls[x].toUpperCase()+'!')
 }
 return(array)
}



function longPlaneteerCalls(words) {
  var array=[]
  for(var i = 0; i < words.length; i++){
  if(words[i].length > 4){
    return(true)
  }else{
    return(false)
  }
  }

}



function findTheCheese (foods) {
    
  if(foods.includes("cheddar")){
   return(foods[1])
  }else{
    
     return("no cheese!")
  }

}

function wordsWithB (words) {
 for(var i =0; i < words.length; i++){
   return( words[i].includes('B') 
 }
 
}
