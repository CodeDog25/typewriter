const sentence = "hello there from lighthouse labs";
const newSentence = sentence + "\n";
let counter = 0;
for (const char of sentence) {
    setTimeout(() => {
        process.stdout.write (char);
    }, counter);
    counter += 50;
    
  };

  console.log(newSentence);