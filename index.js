function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return ("Welcome, " + name + ". " +  "You are number " + katzDeliLine.length + " in line.");
}

function nowServing(katzDeliLine){
  for (var i = 0; i < katzDeliLine.length; i += 1) {
    if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
    } else {
      return ('Currently serving ' + katzDeliLine.shift() + ".");
    }
  }
}

function currentLine(katzDeliLine){}
 