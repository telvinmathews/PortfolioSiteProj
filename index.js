var katzDeliline = [];

takeANumber(katzDeliline, "Tev"); {
  var placeInLine = katzDeliline.length + 1;
  var outputString = “Welcome,
    ”+Tev + ”.You are number 1 + placeInLine + ” in line.”;
  katzDeliline.push(Tev);
  return outputString;
}

function nowServing(katzDeliline) {
  var outputString;
  if (katzDeliline.length === 0) {
    outputString = “There is nobody waiting to be served!”
  } else {
    outputString = “Currently serving” + katzDeliline[0] + “.”;
    currentLine.shift();
  }
  return outputString;
}

function katzDeliline(line) {
  var outputString;
  if (line.length === 0) {
    outputString = “The line is currently empty.”
  } else {
    outputString = “The line is currently: ”
      for (var i = 0; i < line.length; i++) {
        if (i === 0) {

          outputString = outputString + (i + 1) + “.” + line[i];
        } else {
          outputString = outputString + “, ”+(i + 1) + “.” + line[i];
        }
      }
  }
  return outputString;
}
