function or(expression1, expression2) {
   return (expression1 ? true : (expression2 ? true : false ));
}

//  Michael Diodoro
function or(expression1, expression2) {
  return expression1 ? expression1 : expression2;
}

// John Jacob
function or(expression1, expression2) {
  return !(!expression1 && !expression2);
}

// Alexander Mire
function or(expression1, expression2) {
if(expression1){
  return true
}
if(expression2){
  return true
}
return false
}

// Dino Firmalino
const or = (exp1, exp2) => {
  if (!exp1 && !exp2) {
    return false;
  } else {
    return true;
  }
};
