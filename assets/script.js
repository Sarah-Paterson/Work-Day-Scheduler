// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

let currentDay = $('#currentDay');

let hourTime = dayjs().format("H");

let today = dayjs();

// handle displaying the date
// function displayDate() {
//     var rightNow = today.format('MMM D, YYYY');
//     currentDay.text(rightNow);
// }

$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    

    // Save button
    $(".saveBtn").click(function(){
        console.log("save clicked");

        

        // let inputText = $('.description');
        // let totalTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
        // let saveText = inputText.value;
        // setSaveText(saveText);
        
        
        // // this.appendChild(scoreCard);
    
        
        
        // function setSaveText(saveText) {
        //     let tasks = {
        //         inputText: saveText,
        //     }
            
        //     totalTasks.push(tasks);
        //     console.log('total tasks', totalTasks);
        //     localStorage.setItem("tasks", JSON.stringify(totalTasks));
         
        // }

      });

    // changing block colors (class) based on the current time
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
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //

    // the current date in the header of the page.
    function displayDate() {
        var rightNow = today.format('MMM D, YYYY');
        currentDay.text(rightNow);
    }

    displayDate();
  });
