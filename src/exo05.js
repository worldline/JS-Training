const lyrics = [
  "Clap along if you feel like a room without a roof",
  "Clap along if you feel like happiness is the truth",
  "Clap along if you know what happiness is to you",
  "Clap along if you feel like that's what you wanna do"
];

export const instructions = [];

// TOFIX: print the song lyrics correctly
for (var i = 0; i < lyrics.length; i++) {
  instructions.push(function printNextLine() {
    return "Because I'm happy ! " + lyrics[i]
  });
}

// try to run this code to see the problem in the console
/*instructions.forEach(function (printNextLine) {
  console.log(printNextLine());
});*/