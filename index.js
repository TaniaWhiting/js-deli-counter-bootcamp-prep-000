function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return ("Welcome, " + name + ". " +  "You are number " + katzDeliLine.length + " in line.");
}

function nowServing(katzDeliLine){
  for (var i = 0; i <= katzDeliLine.length; i++) {
    if (katzDeliLine.length === 0) {
    return ("There is nobody waiting to be served!");
    } else {
      return ('Currently serving ' + katzDeliLine.shift() + ".");
    }
  }
}

function currentLine(katzDeliLine){
  var array = [];
  function fillArray(){
    array.push("  " + (i + 1) + ". " + katzDeliLine[i]);
  }
  for (var i=0; i < katzDeliLine.length; i++){
    fillArray();
  }
  return ("The line is currently" + array.slice(0, array.length));
}
 