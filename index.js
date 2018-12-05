function dwarfRollCall(dwarves) {
  let i = 1
  let newString = '1. ' + dwarves[0] + ' ';
  do { newString = newString + `${i+1}. ` + `${dwarves[i]} `;
    i++
  } while (i < dwarves.length)
  return newString
}

function summonCaptainPlanet(planeteerCalls){
  let newArray = [];
  let i= 0;
  while (i < planeteerCalls.length) {
    newArray.push(`${planeteerCalls[i].toUpperCase()}!`);
    i++;
  } return newArray;
}

function longPlaneteerCalls(words) {
for (let i = 0; i < words.length; i++) {
  if (words[i].length > 4) {
    return true;
  } else {
    return false;
  }
}}

function findTheCheese (foods) {
for (let i = 0; i < foods.length; i++) {
  if (foods[i] === 'cheddar' || foods[i] === 'gouda' || foods[i] === 'camembert') {
    return foods[i];
  }} return 'no cheese!';
}
