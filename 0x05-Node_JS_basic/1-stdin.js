// Display the welcome message
console.log("Welcome to Holberton School, what is your name?");

// Capture user input from stdin
process.stdin.on('data', (input) => {
    // Convert the input to a string and remove any trailing newlines
    const name = input.toString().trim();

    // Display the user's name
    console.log(`Your name is: ${name}`);

    // Close the input stream to end the program
    process.stdin.end();
});

// When the program is about to exit, display the closing message
process.on('exit', () => {
    console.log("This important software is now closing");
});
