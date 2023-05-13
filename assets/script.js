// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

let currentDay = $('#currentDay');

let hourTime = dayjs().format("H");

let today = dayjs();

// handle displaying the date
function displayTime() {
    var rightNow = today.format('MMM D, YYYY');
    currentDay.text(rightNow);
}

$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });



// changing the class based on the time
function hour9function() {
    if(hourTime > 9) {
        $("#hour-9").addClass("past");
        console.log("past");
    } else if (hourTime < 9) {
        $("#hour-9").addClass("future");
        console.log("future");
    } else {
        $("#hour-9").addClass("present");
        console.log("present");
    }
}

function hour10function() {
    if(hourTime > 10) {
        $("#hour-10").addClass("past");
        console.log("past");
    } else if (hourTime < 10) {
        $("#hour-10").addClass("future");
        console.log("future");
    } else {
        $("#hour-10").addClass("present");
        console.log("present");
    }
}

function hour11function() {
    if(hourTime > 11) {
        $("#hour-11").addClass("past");
        console.log("past");
    } else if (hourTime < 11) {
        $("#hour-11").addClass("future");
        console.log("future");
    } else {
        $("#hour-11").addClass("present");
        console.log("present");
    }
}

function hour12function() {
    if(hourTime > 12) {
        $("#hour-12").addClass("past");
        console.log("past");
    } else if (hourTime < 12) {
        $("#hour-12").addClass("future");
        console.log("future");
    } else {
        $("#hour-12").addClass("present");
        console.log("present");
    }
}

function hour13function() {
    if(hourTime > 13) {
        $("#hour-13").addClass("past");
        console.log("past");
    } else if (hourTime < 13) {
        $("#hour-13").addClass("future");
        console.log("future");
    } else {
        $("#hour-13").addClass("present");
        console.log("present");
    }
}

function hour14function() {
    if(hourTime > 14) {
        $("#hour-14").addClass("past");
        console.log("past");
    } else if (hourTime < 14) {
        $("#hour-14").addClass("future");
        console.log("future");
    } else {
        $("#hour-14").addClass("present");
        console.log("present");
    }
}

function hour15function() {
    if(hourTime > 15) {
        $("#hour-15").addClass("past");
        console.log("past");
    } else if (hourTime < 15) {
        $("#hour-15").addClass("future");
        console.log("future");
    } else {
        $("#hour-15").addClass("present");
        console.log("present");
    }
}

function hour16function() {
    if(hourTime > 16) {
        $("#hour-16").addClass("past");
        console.log("past");
    } else if (hourTime < 16) {
        $("#hour-16").addClass("future");
        console.log("future");
    } else {
        $("#hour-16").addClass("present");
        console.log("present");
    }
}

function hour17function() {
    if(hourTime > 17) {
        $("#hour-17").addClass("past");
        console.log("past");
    } else if (hourTime < 17) {
        $("#hour-17").addClass("future");
        console.log("future");
    } else {
        $("#hour-17").addClass("present");
        console.log("present");
    }
}


displayTime();

hour9function();
hour10function();
hour11function();
hour12function();
hour13function();
hour14function();
hour15function();
hour16function();
hour17function();