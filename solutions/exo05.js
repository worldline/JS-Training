const lyrics = [
  "Clap along if you feel like a room without a roof",
  "Clap along if you feel like happiness is the truth",
  "Clap along if you know what happiness is to you",
  "Clap along if you feel like that's what you wanna do"
];

export let instructions = [];

// FIX 1: use let instead of var in the for loop to declare "i" in block scope
for (let i = 0; i < lyrics.length; i++) {
  instructions.push(function printNextLine() {
    return "Because I'm happy ! " + lyrics[i]
  });
}

// FIX 2 : create a new function scope to get a local variable at each iteration
/*lyrics.forEach(function (lyric) {
  instructions.push(function printNextLine() {
    return "Because I'm happy ! " + lyric
  });
})*/

// FIX3: Pattern Immediately Invoked Function Expression (IIFE)
/*for (var i = 0; i < lyrics.length; i++) {
  (function(lyric){
      instructions.push(function printNextLine() {
        return "Because I'm happy ! " + lyric
      });
  })(lyrics[i])
}*/
