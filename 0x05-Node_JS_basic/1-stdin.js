// Display the welcome message
console.log("Welcome to Holberton School, what is your name?");

// Capture user input from stdin
process.stdin.on('readable', () => {
   const chunk = process.stdin.read();

    if (chunk){
	    process.stdout.write('Your name is: ${chunk}');
    }
});

// When the program is about to exit, display the closing message
process.on('exit', () => {
    console.log("This important software is now closing");
});
