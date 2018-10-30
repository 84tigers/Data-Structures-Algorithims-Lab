"use strict";

$(document).ready(() => {
    // array to collect input values
    let bugReq = [];
    // event listener for button to send values (name, problem) to array
    $(document).on("click", ".submit", () => {
        const bugName = $("input.bug-name").val("");
        const bugProb = $("input.bug-problem").val("");
        // console.log( $("form.input.bug-name").innerText);

        // send values to end of array
        bugReq.push({
            name : bugName,
            problem : bugProb
        });    
    });
    // console.log(bugReq);

});


// newBugReq() function to append <p> with bugReq[0] 

// event listener for completed bugReq -- bugReq.shift() -- call newBugReq() 



