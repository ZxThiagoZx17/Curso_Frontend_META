// // Task 1: Build a function-based console log message generator
// function consoleStyler(color, background, fontSize ,txt) {
    
// }

// // Task 2: Build another console log message generator
// function celebrateStyler() {
    
// }

// // Task 3: Run both the consoleStyler and the celebrateStyler functions


// // Task 4: Insert a congratulatory and custom message
// function styleAndCelebrate() {
    
// }
// // Call styleAndCelebrate
// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
    // Step 1: Create a message with "%c" prefix for styling
    let message = "%c" + txt;

    // Step 2: Create style variable and assign the color style
    let style = `color: ${color};`;

    // Step 3: Add background style
    style += `background: ${background};`;

    // Step 4: Add font-size style
    style += `font-size: ${fontSize};`;

    // Step 5: Console log the message with the style
    console.log(message, style);
}

// Task 2: Build another console log message generator
function celebrateStyler(reason) {
    // Step 1: Create the style
    let fontStyle = "color: tomato; font-size: 50px;";

    // Step 2: If statement for "birthday"
    if (reason == "birthday") {
        console.log("%cHappy birthday", fontStyle);
    } 
    // Step 3: Else if statement for "champions"
    else if (reason == "champions") {
        console.log("%cCongrats on the title!", fontStyle);
    } 
    // Step 4: Else statement for other reasons
    else {
        console.log("%cReason not recognized", fontStyle);
    }
}

// Task 3: Run both the consoleStyler and celebrateStyler functions
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
celebrateStyler('birthday');

// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt, reason) {
    // Step 1: Call consoleStyler
    consoleStyler(color, background, fontSize, txt);

    // Step 2: Call celebrateStyler
    celebrateStyler(reason);
}

// Final step: Call styleAndCelebrate function
styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');
